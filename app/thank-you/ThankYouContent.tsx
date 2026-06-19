"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FB } from "../lib/pixel";

export default function ThankYouContent({ product, value }: { product?: string; value?: number }) {
  const { t, lang } = useLanguage();

  useEffect(() => {
    if (product) FB.purchase(product, value ?? 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-sage min-h-[calc(100vh-100px)] pt-[100px] flex items-center">
      <div className="max-w-lg mx-auto px-5 sm:px-8 py-12 sm:py-24 text-center">

        {/* Animated check */}
        <div
          className="animate-scale-in w-24 h-24 rounded-full bg-forest mx-auto flex items-center justify-center mb-8 shadow-xl"
        >
          <svg
            className="w-12 h-12 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        {/* Tag */}
        <p className="text-forest-mid text-xs font-bold tracking-widest uppercase mb-3">
          + SANAÏA
        </p>

        {/* Heading */}
        <h1
          className="font-display font-black text-ink leading-tight mb-4"
          style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)" }}
        >
          {t.checkout.successTitle}
        </h1>

        {/* Body */}
        <p className="text-body text-base leading-relaxed mb-8">
          {t.checkout.successBody}
        </p>

        {/* Product pill */}
        {product && (
          <div className="inline-flex flex-col items-center bg-white border border-edge rounded-2xl px-6 py-4 mb-8 shadow-sm">
            <p className="text-muted text-xs uppercase tracking-widest font-bold mb-1">
              {lang === "ar" ? "طلبك" : "Votre commande"}
            </p>
            <p className="font-black text-ink text-lg">{product}</p>
          </div>
        )}

        {/* Trust points */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          {[
            {
              icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .95h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              ),
              label: lang === "ar" ? "سيتصل بك فريقنا خلال 24 ساعة" : "Notre équipe vous appelle sous 24h",
            },
            {
              icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              ),
              label: lang === "ar" ? "الدفع عند الاستلام" : "Paiement à la livraison",
            },
            {
              icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              ),
              label: lang === "ar" ? "توصيل مجاني في المغرب" : "Livraison gratuite au Maroc",
            },
          ].map((point) => (
            <div key={point.label} className="flex items-center gap-2 text-body text-sm">
              <span className="w-7 h-7 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0 text-forest">
                {point.icon}
              </span>
              {point.label}
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-forest text-white font-bold px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity shadow-lg"
        >
          {t.product.backToShop}
        </Link>
      </div>
    </section>
  );
}
