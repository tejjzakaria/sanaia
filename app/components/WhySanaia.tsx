"use client";
import AnimateIn from "./AnimateIn";
import { useLanguage } from "../context/LanguageContext";

const ICONS = [
  <svg key="leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>,
  <svg key="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>,
  <svg key="flask" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M10 2v7.31l-4.45 7.12A1 1 0 0 0 6.4 18h11.2a1 1 0 0 0 .85-1.57L14 9.31V2"/>
    <path d="M8.5 2h7"/>
    <circle cx="13" cy="14" r="1" fill="currentColor" stroke="none"/>
  </svg>,
  <svg key="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>,
];

export default function WhySanaia() {
  const { t } = useLanguage();

  return (
    <section id="trust" className="bg-sage py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimateIn animation="animate-fade-up" className="text-center mb-16 space-y-4">
          <p className="text-forest-mid text-xs font-bold tracking-widest uppercase">
            {t.trust.tag}
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-tight">
            {t.trust.heading}
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.trust.pillars.map((pillar, i) => (
            <AnimateIn
              key={i}
              animation="animate-scale-in"
              delay={`delay-${(i + 1) * 100}` as "delay-100" | "delay-200" | "delay-300" | "delay-400"}
            >
              <div className="group relative bg-white border border-edge hover:border-forest/20 hover:shadow-lg rounded-2xl p-8 transition-all duration-300 overflow-hidden h-full">
                {/* Watermark */}
                <span className="absolute top-4 right-5 font-display text-6xl font-black text-forest/4 select-none leading-none" aria-hidden>
                  {pillar.number}
                </span>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center mb-5 group-hover:bg-forest/15 transition-colors duration-300">
                  {ICONS[i]}
                </div>
                <h3 className="font-display text-lg font-bold text-ink mb-2">{pillar.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn animation="animate-fade-in" delay="delay-500" className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-10 bg-edge" />
          <p className="text-muted text-xs text-center">{t.trust.certBar}</p>
          <div className="h-px w-10 bg-edge" />
        </AnimateIn>
      </div>
    </section>
  );
}
