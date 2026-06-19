"use client";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";
import { useLanguage } from "../context/LanguageContext";

const VALUE_ICONS = [
  /* Leaf – Natural */
  <svg key="leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>,
  /* Flask – Science */
  <svg key="flask" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M10 2v7.31l-4.45 7.12A1 1 0 0 0 6.4 18h11.2a1 1 0 0 0 .85-1.57L14 9.31V2"/>
    <path d="M8.5 2h7"/>
    <circle cx="13" cy="14" r="1" fill="currentColor" stroke="none"/>
  </svg>,
  /* Star – Morocco/Pride */
  <svg key="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>,
];

const CHECK_ICON = (
  <svg className="w-4 h-4 text-forest-light flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
  </svg>
);

const MFG_DETAIL_ICON = (
  <svg className="w-4 h-4 text-forest-light flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.536 5.121a.5.5 0 00-.707-.707L7 9.243 5.354 7.596a.5.5 0 10-.708.707l2 2a.5.5 0 00.708 0l4-4z"/>
  </svg>
);

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-forest pt-[68px] pb-24 lg:pb-32 overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
          {[500, 700, 900].map((s) => (
            <div key={s} className="absolute rounded-full border border-white/4" style={{ width: s, height: s }} />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 lg:pt-24 text-center space-y-8">
          <AnimateIn animation="animate-fade-in">
            <p className="text-forest-light text-xs font-bold tracking-widest uppercase">
              {t.about.heroTag}
            </p>
          </AnimateIn>

          <AnimateIn animation="animate-fade-up" delay="delay-100">
            <div className="space-y-1">
              <h1
                className="font-display font-black text-white leading-[0.92] tracking-tight"
                style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
              >
                {t.about.heroLine1}
              </h1>
              <h1
                className="font-display font-black text-forest-light leading-[0.92] tracking-tight"
                style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
              >
                {t.about.heroLine2}
              </h1>
            </div>
          </AnimateIn>

          <AnimateIn animation="animate-fade-up" delay="delay-200">
            <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              {t.about.heroSub}
            </p>
          </AnimateIn>

          <AnimateIn animation="animate-fade-up" delay="delay-300">
            <div className="flex justify-center pt-2">
              <div className="inline-flex items-center gap-3 border border-white/12 rounded-full px-6 py-3 bg-white/5 backdrop-blur-sm">
                <Image
                  src="/sanaia-images/sanaia-logo-without-bg.png"
                  alt="SANAÏA"
                  width={24}
                  height={24}
                  className="object-contain brightness-0 invert opacity-60"
                />
                <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">
                  SANAÏA · Beauty Pharmacos · ONSSA
                </span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────── */}
      <section className="bg-sage py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <AnimateIn animation="animate-slide-left">
              <div className="relative">
                <div className="absolute -inset-4 bg-sage-dark rounded-[40px] rotate-2" aria-hidden />
                <div className="relative rounded-3xl overflow-hidden aspect-square shadow-xl">
                  <Image
                    src="/sanaia-images/hero-image-2.png"
                    alt="SANAÏA produits naturels"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimateIn>

            {/* Text */}
            <AnimateIn animation="animate-slide-right" delay="delay-200" className="space-y-6">
              <p className="text-forest-mid text-xs font-bold tracking-widest uppercase">
                {t.about.missionTag}
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-tight">
                {t.about.missionHeading}
              </h2>
              <p className="text-body text-base leading-relaxed">{t.about.missionText1}</p>
              <p className="text-body text-base leading-relaxed">{t.about.missionText2}</p>
              <ul className="space-y-3 pt-2">
                {t.about.missionDetails.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    {CHECK_ICON}
                    <span className="text-body text-sm font-medium">{d}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimateIn animation="animate-fade-up" className="text-center mb-16 space-y-4">
            <p className="text-forest-mid text-xs font-bold tracking-widest uppercase">
              {t.about.valuesTag}
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-tight">
              {t.about.valuesHeading}
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.values.map((v, i) => (
              <AnimateIn
                key={v.title}
                animation="animate-scale-in"
                delay={`delay-${(i + 1) * 150}` as "delay-150" | "delay-300" | "delay-400"}
              >
                <div className="group relative bg-sage border border-edge hover:border-forest/20 hover:shadow-lg rounded-3xl p-8 transition-all duration-300 overflow-hidden h-full">
                  {/* Large background number */}
                  <span className="absolute top-4 right-6 font-display text-7xl font-black text-forest/4 select-none leading-none" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center mb-5 group-hover:bg-forest/15 transition-colors duration-300">
                    {VALUE_ICONS[i]}
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink mb-3">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manufacturing ─────────────────────────────────── */}
      <section className="bg-forest py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <AnimateIn animation="animate-slide-left" className="space-y-6">
              <p className="text-forest-light text-xs font-bold tracking-widest uppercase">
                {t.about.mfgTag}
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t.about.mfgHeading}
              </h2>
              <p className="text-white/55 text-base leading-relaxed">
                {t.about.mfgText}
              </p>
              <ul className="space-y-4 pt-2">
                {t.about.mfgDetails.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    {MFG_DETAIL_ICON}
                    <span className="text-white/70 text-sm font-medium">{d}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            {/* Visual card */}
            <AnimateIn animation="animate-slide-right" delay="delay-200">
              <div className="relative">
                <div className="bg-white/6 border border-white/10 rounded-3xl p-10 space-y-8">
                  {/* Map pin */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-forest-mid/40 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-forest-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        <circle cx="12" cy="9" r="2.5"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Beauty Pharmacos</p>
                      <p className="text-white/40 text-xs">Aït Melloul, Souss-Massa, Maroc</p>
                    </div>
                  </div>

                  <div className="h-px bg-white/8" />

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "4", label: "Produits agréés" },
                      { value: "GMP", label: "Standard qualité" },
                      { value: "ONSSA", label: "Certification" },
                      { value: "100%", label: "Contrôle qualité" },
                    ].map((s) => (
                      <div key={s.label}>
                        <p className="font-black text-2xl text-white leading-none">{s.value}</p>
                        <p className="text-white/35 text-xs mt-1 font-medium">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Certification ─────────────────────────────────── */}
      <section className="bg-sage py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <AnimateIn animation="animate-fade-up" className="space-y-8">
            <p className="text-forest-mid text-xs font-bold tracking-widest uppercase">
              {t.about.certTag}
            </p>

            {/* Shield icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-forest/10 rounded-3xl flex items-center justify-center">
                <svg className="w-10 h-10 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink">
                {t.about.certHeading}
              </h2>
              {/* Cert number badge */}
              <div className="inline-block">
                <span className="bg-forest text-white text-sm font-bold tracking-widest px-6 py-2.5 rounded-full">
                  {t.about.certNumber}
                </span>
              </div>
            </div>

            <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
              {t.about.certBody}
            </p>

            <div className="bg-white border border-edge rounded-3xl p-8 max-w-2xl mx-auto space-y-6">
              <p className="text-body text-base leading-relaxed">{t.about.certText}</p>
              <div className="border-t border-edge pt-6 flex justify-center">
                <Image
                  src="/labs.webp"
                  alt="Certifié ONSSA · ISO · GMP · SGS · FDA"
                  width={480}
                  height={113}
                  className="w-full max-w-[420px] h-auto"
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="bg-ink py-20">
        <AnimateIn animation="animate-fade-up" className="max-w-2xl mx-auto px-5 sm:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight">
            {t.about.ctaHeading}
          </h2>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2.5 bg-forest hover:bg-forest-dark text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {t.about.ctaButton}
            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 2l4 4-4 4"/>
              </svg>
            </span>
          </Link>
        </AnimateIn>
      </section>
    </>
  );
}
