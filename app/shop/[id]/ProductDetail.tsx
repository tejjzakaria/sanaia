"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";
import { PRODUCTS, type Product } from "../../data/products";
import { FB } from "../../lib/pixel";

/* ─── Icons ─────────────────────────────────────────────────────────────── */

function CheckIcon({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 12" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 6l4 5 10-10" />
    </svg>
  );
}

function StarIcon({ fill = 100 }: { fill?: number }) {
  const id = `star-fill-${fill}`;
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20">
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset={`${fill}%`} stopColor="#FBBF24" />
          <stop offset={`${fill}%`} stopColor="#D1D5DB" />
        </linearGradient>
      </defs>
      <path fill={`url(#${id})`} d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8l5 5 5-5" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4" />
      <path className="opacity-75" d="M4 12a8 8 0 018-8" />
    </svg>
  );
}

/* ─── Validation ─────────────────────────────────────────────────────────── */

const PHONE_RE = /^(0[67]\d{8}|\+?212[67]\d{8})$/;

function validateForm(form: { name: string; phone: string; city: string; address: string }) {
  const errors: Record<string, string> = {};
  if (!form.name.trim() || form.name.trim().length < 3) errors.name = "Champ requis (min 3 caractères)";
  const cleanPhone = form.phone.replace(/[\s\-]/g, "");
  if (!PHONE_RE.test(cleanPhone)) errors.phone = "Numéro invalide (ex: 0612345678)";
  if (!form.city.trim()) errors.city = "Champ requis";
  if (!form.address.trim() || form.address.trim().length < 5) errors.address = "Champ requis (min 5 caractères)";
  return errors;
}

/* ─── Main component ─────────────────────────────────────────────────────── */

export default function ProductDetail({ product }: { product: Product }) {
  const { lang, t } = useLanguage();
  const item = lang === "ar" ? product.ar : product.fr;
  const router = useRouter();

  const [activeImg, setActiveImg] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPack, setSelectedPack] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", city: "", address: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  const steps = item.howToUse.split(".").map((s) => s.trim()).filter(Boolean);
  const pack = product.packs[selectedPack];
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  useEffect(() => {
    FB.viewContent(product.fr.name, product.id);
  }, [product.fr.name, product.id]);

  function handleField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus("submitting");
    setFormError(null);
    FB.initiateCheckout(product.fr.name, pack.priceNum);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: product.fr.name, productAr: product.ar.name,
          pack: pack.label, qty: pack.qty, total: pack.price,
          name: form.name, phone: form.phone, city: form.city, address: form.address,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("failed");
      router.push(`/thank-you?product=${encodeURIComponent(product.fr.name)}&value=${pack.priceNum}`);
    } catch {
      setStatus("idle");
      setFormError(lang === "ar" ? "حدث خطأ، يرجى المحاولة مجدداً" : "Une erreur est survenue, veuillez réessayer.");
    }
  }

  const stats = lang === "ar"
    ? [
        { value: "96%", label: "تحسن ملحوظ لدى عملائنا" },
        { value: "94%", label: "يوصون بسنايا لأصدقائهم" },
        { value: `${product.rating}/5`, label: "تقييم متوسط من العملاء" },
      ]
    : [
        { value: "96%", label: "de nos clients constatent une amélioration notable" },
        { value: "94%", label: "recommandent SANAÏA à leurs proches" },
        { value: `${product.rating}/5`, label: "note moyenne basée sur 200+ avis" },
      ];

  const compareRows = lang === "ar"
    ? [
        { feature: "معتمد أونسا", us: true, them: false },
        { feature: "100% مكونات طبيعية", us: true, them: false },
        { feature: "بدون مواد كيميائية", us: true, them: false },
        { feature: "مصنوع في المغرب", us: true, them: false },
        { feature: "الدفع عند الاستلام", us: true, them: true },
        { feature: "ضمان الجودة", us: true, them: false },
      ]
    : [
        { feature: "Certifié ONSSA", us: true, them: false },
        { feature: "100% Ingrédients naturels", us: true, them: false },
        { feature: "Sans additifs chimiques", us: true, them: false },
        { feature: "Fabriqué au Maroc", us: true, them: false },
        { feature: "Paiement à la livraison", us: true, them: true },
        { feature: "Garantie satisfaction", us: true, them: false },
      ];

  return (
    <div>
      {/* ── A. Breadcrumb ─────────────────────────────────────────────── */}
      <div className="bg-sage border-b border-edge pt-[100px]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="hover:text-forest transition-colors">{lang === "ar" ? "الرئيسية" : "Accueil"}</Link>
            <span className="opacity-40">/</span>
            <Link href="/shop" className="hover:text-forest transition-colors">{lang === "ar" ? "المتجر" : "Boutique"}</Link>
            <span className="opacity-40">/</span>
            <span className="text-ink font-semibold">{product.fr.name}</span>
          </nav>
        </div>
      </div>

      {/* ── B. Product Hero ───────────────────────────────────────────── */}
      <section className="bg-sage py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Desktop: 3-col [thumbs | image | info] / Mobile: image → thumbs → info */}
          <div className="flex flex-col lg:grid lg:grid-cols-[64px_1fr_1fr] lg:gap-6 xl:gap-10 items-start">

            {/* Vertical thumbnails — hidden on mobile, shown as sidebar on desktop */}
            {product.images.length > 1 && (
              <div className="hidden lg:flex flex-col gap-2 lg:sticky lg:top-28 lg:self-start">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Image ${i + 1}`}
                    className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-200 bg-white"
                    style={{
                      borderColor: activeImg === i ? product.color : "transparent",
                      opacity: activeImg === i ? 1 : 0.5,
                    }}
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="56px" />
                  </button>
                ))}
              </div>
            )}

            {/* Main image */}
            <div className="w-full lg:sticky lg:top-28 lg:self-start space-y-3">
              {/* Urgency banner */}
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
                <span className="text-base">🔥</span>
                <p className="text-red-600 font-black text-xs uppercase tracking-wide">
                  {lang === "ar" ? "منتج رائج | مخزون محدود ⏳" : "PRODUIT VIRAL | STOCK LIMITÉ ⏳"}
                </p>
              </div>

              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl bg-white">
                <Image
                  src={product.images[activeImg]}
                  alt={item.name}
                  fill
                  className="object-cover transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
              </div>

              {/* Horizontal thumbs on mobile only */}
              {product.images.length > 1 && (
                <div className="flex lg:hidden gap-2 overflow-x-auto pb-1">
                  {product.images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      aria-label={`Image ${i + 1}`}
                      className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-200 bg-white"
                      style={{
                        borderColor: activeImg === i ? product.color : "transparent",
                        opacity: activeImg === i ? 1 : 0.5,
                      }}
                    >
                      <Image src={src} alt="" fill className="object-cover" sizes="56px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: product details */}
            <div className="w-full mt-6 lg:mt-0 space-y-5">
              {/* Certified tag */}
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
                style={{ backgroundColor: `${product.color}18`, color: product.color }}
              >
                {t.product.certifiedBy}
              </span>

              {/* Title */}
              <div>
                <h1 className="font-display font-black text-ink leading-tight" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}>
                  {product.fr.name}
                </h1>
                <p className="font-arabic text-xl font-semibold text-muted mt-1">{product.ar.name}</p>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} fill={Math.round(Math.min(100, Math.max(0, (product.rating - star + 1) * 100)))} />
                ))}
                <span className="text-sm text-muted ml-2 font-medium">{product.rating.toFixed(1)}</span>
                <span className="text-muted text-xs ml-1">(200+ avis)</span>
              </div>

              {/* Tagline */}
              <p className="text-forest-mid font-semibold text-sm tracking-wide uppercase">{item.tagline}</p>

              {/* Description */}
              <p className="text-body text-sm leading-relaxed">{item.description}</p>

              {/* Benefits */}
              <ul className="space-y-2.5">
                {item.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${product.color}18` }}>
                      <CheckIcon color={product.color} />
                    </span>
                    <span className="text-body text-sm leading-snug">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-edge" />

              {/* Pack selector */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-body uppercase tracking-wide">
                  {lang === "ar" ? "اختر الباقة" : "Choisissez votre offre"}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {product.packs.map((p, i) => {
                    const isSelected = selectedPack === i;
                    const saving = i > 0 ? product.packs[0].priceNum * p.qty - p.priceNum : 0;
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedPack(i)}
                        className="relative flex flex-col items-center gap-1 rounded-2xl border-2 py-3 px-2 transition-all duration-200"
                        style={{
                          borderColor: isSelected ? product.color : "var(--color-edge)",
                          backgroundColor: isSelected ? `${product.color}10` : "white",
                        }}
                      >
                        {i === 1 && saving > 0 ? (
                          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1">
                            <span className="bg-ink text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                              {lang === "ar" ? "الأكثر طلباً" : "Populaire"}
                            </span>
                            <span className="text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap" style={{ backgroundColor: product.color }}>
                              -{saving} DH
                            </span>
                          </div>
                        ) : saving > 0 ? (
                          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap" style={{ backgroundColor: product.color }}>
                            -{saving} DH
                          </span>
                        ) : null}
                        <span className="font-bold text-ink text-xs">{lang === "ar" ? p.labelAr : p.label}</span>
                        <span className="font-black text-sm tabular-nums" style={{ color: product.color }}>{p.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Inline checkout card */}
              <div className="bg-white rounded-3xl border border-edge overflow-hidden shadow-sm">
                {/* Mini order summary */}
                <div className="px-5 py-4 border-b border-edge flex items-center justify-between gap-4" style={{ backgroundColor: `${product.color}08` }}>
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-white">
                      <Image src={product.image} alt={item.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-ink text-sm truncate">{product.fr.name}</p>
                      <p className="text-muted text-xs">{lang === "ar" ? pack.labelAr : pack.label}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-black text-ink tabular-nums text-lg">{pack.price}</p>
                    <p className="text-forest-mid text-xs font-semibold">{t.checkout.deliveryValue}</p>
                  </div>
                </div>

                {/* Form */}
                <div className="px-5 py-5">
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <h3 className="font-display font-bold text-ink text-base">{t.checkout.formTitle}</h3>

                    {/* Name */}
                    <div className="relative">
                      <input
                        id="field-name" type="text" value={form.name}
                        onChange={(e) => handleField("name", e.target.value)}
                        placeholder=" "
                        className={`peer border-2 rounded-xl px-4 pt-6 pb-2 w-full outline-none text-ink transition-colors focus:border-forest text-sm bg-white ${errors.name ? "border-red-400" : "border-edge"}`}
                      />
                      <label htmlFor="field-name" className="absolute left-4 top-4 text-muted text-sm transition-all duration-150 pointer-events-none peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-forest peer-focus:uppercase peer-focus:tracking-wide peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:font-bold peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-wide">
                        {t.checkout.name}
                      </label>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none select-none z-10">🇲🇦</span>
                      <input
                        id="field-phone" type="tel" dir="ltr" value={form.phone}
                        onChange={(e) => handleField("phone", e.target.value)}
                        placeholder=" "
                        className={`peer border-2 rounded-xl pl-10 pr-4 pt-6 pb-2 w-full outline-none text-ink transition-colors focus:border-forest text-sm bg-white ${errors.phone ? "border-red-400" : "border-edge"}`}
                      />
                      <label htmlFor="field-phone" className="absolute left-10 top-4 text-muted text-sm transition-all duration-150 pointer-events-none peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-forest peer-focus:uppercase peer-focus:tracking-wide peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:font-bold peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-wide">
                        {t.checkout.phone}
                      </label>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* City */}
                    <div className="relative">
                      <input
                        id="field-city" type="text" value={form.city}
                        onChange={(e) => handleField("city", e.target.value)}
                        placeholder=" "
                        className={`peer border-2 rounded-xl px-4 pt-6 pb-2 w-full outline-none text-ink transition-colors focus:border-forest text-sm bg-white ${errors.city ? "border-red-400" : "border-edge"}`}
                      />
                      <label htmlFor="field-city" className="absolute left-4 top-4 text-muted text-sm transition-all duration-150 pointer-events-none peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-forest peer-focus:uppercase peer-focus:tracking-wide peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:font-bold peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-wide">
                        {t.checkout.city}
                      </label>
                      {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                    </div>

                    {/* Address */}
                    <div className="relative">
                      <textarea
                        id="field-address" rows={3} value={form.address}
                        onChange={(e) => handleField("address", e.target.value)}
                        placeholder=" "
                        className={`peer border-2 rounded-xl px-4 pt-6 pb-2 w-full outline-none text-ink transition-colors focus:border-forest resize-none text-sm bg-white ${errors.address ? "border-red-400" : "border-edge"}`}
                      />
                      <label htmlFor="field-address" className="absolute left-4 top-4 text-muted text-sm transition-all duration-150 pointer-events-none peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-forest peer-focus:uppercase peer-focus:tracking-wide peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:font-bold peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-wide">
                        {t.checkout.address}
                      </label>
                      {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                    </div>

                    {formError && <p className="text-red-500 text-sm text-center font-medium">{formError}</p>}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full text-white font-black py-4 rounded-full text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 disabled:opacity-70 shadow-md"
                      style={{ backgroundColor: product.color }}
                    >
                      {status === "submitting" ? (
                        <><SpinnerIcon />{t.checkout.submitting}</>
                      ) : (
                        <>{t.checkout.submit} →</>
                      )}
                    </button>

                    {/* Trust row */}
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-1">
                      {[
                        { icon: <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>, label: t.checkout.trust[0] },
                        { icon: <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><path d="M12 12v4M10 14h4" /></svg>, label: t.checkout.trust[1] },
                        { icon: <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>, label: t.checkout.trust[2] },
                      ].map((trustItem) => (
                        <div key={trustItem.label} className="flex items-center gap-1 text-muted text-xs">
                          <span className="text-forest-mid">{trustItem.icon}</span>
                          {trustItem.label}
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-edge pt-4 flex justify-center">
                      <Image src="/labs.webp" alt="Certifié ONSSA · ISO · GMP · SGS · FDA" width={360} height={85} className="w-full max-w-[260px] h-auto opacity-80" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── C. Marquee strip ─────────────────────────────────────────── */}
      <div className="bg-ink h-10 overflow-hidden">
        <div className="flex w-max h-full animate-marquee">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center shrink-0" aria-hidden={half === 1 ? true : undefined}>
              {Array.from({ length: 6 }).flatMap((_, r) =>
                [
                  lang === "ar" ? "✅ ضمان الجودة" : "✅ Qualité Garantie",
                  lang === "ar" ? "🚚 توصيل مجاني" : "🚚 Livraison Gratuite",
                  lang === "ar" ? "🇲🇦 صنع في المغرب" : "🇲🇦 Fabriqué au Maroc",
                  lang === "ar" ? "💳 الدفع عند الاستلام" : "💳 Paiement à la Livraison",
                  lang === "ar" ? "🌿 100% طبيعي" : "🌿 100% Naturel",
                  lang === "ar" ? "🏅 معتمد أونسا" : "🏅 Certifié ONSSA",
                ].map((item, i) => (
                  <span key={`${r}-${i}`} className="inline-flex items-center gap-3 text-white/80 text-xs font-semibold px-6 whitespace-nowrap">
                    {item}
                    <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                  </span>
                ))
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── D. Results stats bar ──────────────────────────────────────── */}
      <section className="bg-ink py-14">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-center text-white/40 text-xs font-bold uppercase tracking-widest mb-10">
            {lang === "ar" ? "نتائج موثقة" : "Résultats prouvés"}
          </p>
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4 sm:px-8 gap-2">
                <span className="font-black text-3xl sm:text-5xl tabular-nums" style={{ color: product.color }}>
                  {stat.value}
                </span>
                <p className="text-white/60 text-xs sm:text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── D. Rich product sections (from creatives) ────────────────── */}
      {product.sections.map((sec, i) => {
        const content = lang === "ar" ? sec.ar : sec.fr;
        const isImgLeft = sec.layout === "image-left";
        const bg = i % 2 === 0 ? "bg-white" : "bg-sage";

        if (sec.variant === "myth-fact") {
          return (
            <section key={i} className={`${bg} py-16 lg:py-24`}>
              <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className={`flex flex-col ${isImgLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}>
                  <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-lg">
                    <Image src={sec.image} alt={content.headline} width={600} height={600} className="w-full h-auto object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                  <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="font-display font-black text-ink text-2xl lg:text-4xl leading-tight">{content.headline}</h2>
                    <div className="space-y-4">
                      {/* Myth */}
                      <div className="flex gap-4 p-5 rounded-2xl bg-red-50 border border-red-100">
                        <span className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M1 1l10 10M11 1L1 11" />
                          </svg>
                        </span>
                        <div>
                          <p className="font-black text-red-600 text-xs uppercase tracking-widest mb-1">{content.mythLabel}</p>
                          <p className="text-body text-sm leading-relaxed">{content.myth}</p>
                        </div>
                      </div>
                      {/* Fact */}
                      <div className="flex gap-4 p-5 rounded-2xl border-2" style={{ backgroundColor: `${product.color}08`, borderColor: `${product.color}30` }}>
                        <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: product.color }}>
                          <svg className="w-4 h-4 text-white" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 5l3 4 7-8" />
                          </svg>
                        </span>
                        <div>
                          <p className="font-black text-xs uppercase tracking-widest mb-1" style={{ color: product.color }}>{content.factLabel}</p>
                          <p className="text-body text-sm leading-relaxed">{content.fact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        return (
          <section key={i} className={`${bg} py-16 lg:py-24`}>
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <div className={`flex flex-col ${isImgLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}>
                {/* Image */}
                <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-lg">
                  <Image src={sec.image} alt={content.headline} width={600} height={600} className="w-full h-auto object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <h2 className="font-display font-black text-ink text-2xl lg:text-4xl leading-tight">{content.headline}</h2>
                  {content.sub && <p className="text-body text-base leading-relaxed">{content.sub}</p>}

                  {content.points && (
                    <ul className="space-y-3 pt-1">
                      {content.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${product.color}20` }}>
                            <CheckIcon color={product.color} />
                          </span>
                          <span className="text-body text-sm leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {content.badges && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {content.badges.map((badge, j) => (
                        <span key={j} className="px-3 py-1.5 rounded-full text-xs font-bold border-2" style={{ borderColor: product.color, color: product.color, backgroundColor: `${product.color}0D` }}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── E. Details section ────────────────────────────────────────── */}
      <section id="details" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* How to use */}
            <div>
              <h2 className="font-display font-black text-ink text-2xl lg:text-3xl mb-8">{t.product.howToUse}</h2>
              <ol className="space-y-6">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-black text-lg text-white" style={{ backgroundColor: product.color }}>
                      {i + 1}
                    </span>
                    <p className="text-body leading-relaxed pt-1.5">{step}.</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Ingredients */}
            <div>
              <h2 className="font-display font-black text-ink text-2xl lg:text-3xl mb-8">{t.product.ingredients}</h2>
              <div className="flex flex-wrap gap-3">
                {item.ingredients.map((ing) => (
                  <span key={ing} className="px-4 py-2 rounded-full text-sm font-semibold border-2" style={{ borderColor: product.color, color: product.color, backgroundColor: `${product.color}0D` }}>
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── E. Comparison table ───────────────────────────────────────── */}
      <section className="bg-sage py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="font-display font-black text-ink text-2xl lg:text-3xl mb-3 text-center">
            {lang === "ar" ? "لماذا سنايا؟" : "Pourquoi SANAÏA ?"}
          </h2>
          <p className="text-muted text-sm text-center mb-10">
            {lang === "ar" ? "مقارنة شفافة مع المنافسين" : "Comparaison transparente avec les autres"}
          </p>

          <div className="bg-white rounded-3xl overflow-hidden border border-edge shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_120px_120px] text-center">
              <div className="px-5 py-4" />
              <div className="py-4 border-l border-edge" style={{ backgroundColor: `${product.color}10` }}>
                <p className="font-black text-sm" style={{ color: product.color }}>SANAÏA</p>
              </div>
              <div className="py-4 border-l border-edge bg-gray-50">
                <p className="font-semibold text-sm text-muted">{lang === "ar" ? "الآخرون" : "Autres"}</p>
              </div>
            </div>

            {/* Rows */}
            {compareRows.map((row, i) => (
              <div key={i} className="grid grid-cols-[1fr_120px_120px] border-t border-edge">
                <div className="px-5 py-4 flex items-center">
                  <p className="text-ink text-sm font-medium">{row.feature}</p>
                </div>
                <div className="py-4 border-l border-edge flex items-center justify-center" style={{ backgroundColor: `${product.color}06` }}>
                  {row.us ? (
                    <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: product.color }}>
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 5l3 4 7-8" />
                      </svg>
                    </span>
                  ) : (
                    <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-400" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M1 1l10 10M11 1L1 11" />
                      </svg>
                    </span>
                  )}
                </div>
                <div className="py-4 border-l border-edge flex items-center justify-center bg-gray-50">
                  {row.them ? (
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-500" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 5l3 4 7-8" />
                      </svg>
                    </span>
                  ) : (
                    <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-400" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M1 1l10 10M11 1L1 11" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── G. Customer reviews ───────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-12">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: product.color }}>
                {lang === "ar" ? "آراء العملاء" : "Avis clients"}
              </p>
              <h2 className="font-display font-black text-ink text-2xl lg:text-3xl">
                {lang === "ar" ? "ماذا يقول عملاؤنا" : "Ce que disent nos clients"}
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-sage rounded-2xl px-5 py-3">
              <div>
                <p className="font-black text-4xl text-ink tabular-nums leading-none">{product.rating.toFixed(1)}</p>
                <div className="flex gap-0.5 mt-1">
                  {[1,2,3,4,5].map((s) => (
                    <StarIcon key={s} fill={Math.round(Math.min(100, Math.max(0, (product.rating - s + 1) * 100)))} />
                  ))}
                </div>
              </div>
              <div className="pl-3 border-l border-edge">
                <p className="text-sm font-semibold text-ink">{product.reviews.length * 40}+ avis</p>
                <p className="text-xs text-muted">{lang === "ar" ? "عملاء موثوقون" : "clients vérifiés"}</p>
              </div>
            </div>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.reviews.map((review, i) => (
              <div key={i} className="bg-sage rounded-2xl p-5 flex flex-col gap-3 border border-transparent hover:border-edge transition-colors duration-200">
                {/* Top row */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-base" style={{ backgroundColor: product.color }}>
                    {review.name[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-ink text-sm">{review.name}</p>
                    <p className="text-[10px] text-forest-mid font-semibold uppercase tracking-wide">
                      {lang === "ar" ? "مشتري موثق ✓" : "Achat vérifié ✓"}
                    </p>
                  </div>
                </div>

                {/* Stars + date */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <StarIcon key={s} fill={Math.round(Math.min(100, Math.max(0, (review.rating - s + 1) * 100)))} />
                    ))}
                  </div>
                  <span className="text-[10px] text-muted">{review.date}</span>
                </div>

                {/* Review text */}
                <p className="text-body text-sm leading-relaxed flex-1">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H. FAQ accordion ──────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 className="font-display font-black text-ink text-2xl lg:text-3xl mb-10 text-center">{t.product.faqTitle}</h2>
          <div className="space-y-3">
            {item.faq.map((faqItem, i) => (
              <div key={i} className="bg-sage rounded-2xl border border-edge overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-ink text-sm sm:text-base">{faqItem.q}</span>
                  <span style={{ color: product.color }}><ChevronIcon open={openFaq === i} /></span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? "200px" : "0px" }}>
                  <p className="px-6 pb-5 text-body text-sm leading-relaxed">{faqItem.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── G. Trust bar ──────────────────────────────────────────────── */}
      <section className="bg-forest py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { label: lang === "ar" ? "معتمد أونسا" : "ONSSA Certifié", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg> },
              { label: lang === "ar" ? "100% طبيعي" : "100% Naturel", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12" /><path d="M5 12C5 8.5 8 4 12 2c4 2 7 6.5 7 10H5z" /></svg> },
              { label: lang === "ar" ? "صنع في المغرب" : "Fabriqué au Maroc", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" /></svg> },
            ].map((pillar) => (
              <div key={pillar.label} className="flex flex-col items-center gap-3 py-6 sm:py-0 px-6 text-center">
                <span className="text-forest-light">{pillar.icon}</span>
                <span className="text-white font-semibold text-sm">{pillar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H. Related products ───────────────────────────────────────── */}
      <section className="bg-sage py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-display font-black text-ink text-2xl lg:text-3xl mb-10 text-center">{t.product.related}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
            {relatedProducts.map((rel) => {
              const relItem = lang === "ar" ? rel.ar : rel.fr;
              return (
                <Link key={rel.id} href={`/shop/${rel.id}`} className="group flex flex-col rounded-3xl overflow-hidden border border-edge hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                  <div className="relative aspect-square w-full bg-white">
                    <Image src={rel.image} alt={relItem.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <p className="font-display font-black text-ink">{rel.fr.name}</p>
                    <span className="inline-block mt-2 text-xs font-bold" style={{ color: rel.color }}>
                      {lang === "ar" ? "ابتداءً من" : "Dès"} {rel.packs[0].price} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
