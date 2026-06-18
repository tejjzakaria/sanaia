"use client";
import Link from "next/link";
import AnimateIn from "./AnimateIn";
import { useLanguage } from "../context/LanguageContext";

export default function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-forest py-24 overflow-hidden">
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <AnimateIn animation="animate-fade-up" className="space-y-6">
          <p className="text-forest-light text-xs font-bold tracking-widest uppercase">
            {t.cta.tag}
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t.cta.headline}
          </h2>
          <p className="text-white/60 text-lg">{t.cta.sub}</p>
          <Link
            href="#produits"
            className="inline-flex items-center gap-3 bg-white text-forest px-10 py-4 rounded-full font-bold text-base shadow-xl hover:bg-sage transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
          >
            {t.cta.button}
            <span className="w-7 h-7 bg-forest/10 rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 2l4 5-4 5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
