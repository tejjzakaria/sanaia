"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t, lang } = useLanguage();

  const floatingBadges = [
    { text: t.hero.badge1, top: "12%",  left: "-6%",  rotate: "-6deg"  },
    { text: t.hero.badge2, bottom: "22%", left: "-4%", rotate: "4deg"  },
    { text: t.hero.badge3, top: "18%",  right: "-6%", rotate: "8deg"   },
  ];

  return (
    <section className="relative min-h-screen bg-sage flex flex-col pt-[68px] overflow-hidden">
      {/* Subtle concentric rings (decorative) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        {[440, 580, 720].map((s) => (
          <div
            key={s}
            className="absolute rounded-full border border-forest/6"
            style={{ width: s, height: s }}
          />
        ))}
      </div>

      <div className="flex-1 flex items-center max-w-7xl mx-auto w-full px-5 sm:px-8 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 w-full items-center">

          {/* LEFT — Text */}
          <div className="space-y-7 z-10">
            {/* Section tag */}
            <div className="inline-flex items-center gap-2 text-forest-mid text-xs font-bold tracking-widest uppercase">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 1l1.5 3.09L11 4.73l-2.5 2.43.59 3.44L6 9l-3.09 1.6.59-3.44L1 4.73l3.5-.64L6 1z"/>
              </svg>
              {t.hero.tag}
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className={`font-display font-black text-ink leading-[0.95] tracking-tight ${lang !== "ar" ? "uppercase" : ""}`}
                style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}>
                {t.hero.headline1}
              </h1>
              <h1 className={`font-display font-black text-forest leading-[0.95] tracking-tight ${lang !== "ar" ? "uppercase" : ""}`}
                style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}>
                {t.hero.headline2}
              </h1>
              <h1 className={`font-display font-black text-ink leading-[0.95] tracking-tight ${lang !== "ar" ? "uppercase" : ""}`}
                style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}>
                {t.hero.headline3}
              </h1>
            </div>

            {/* Description */}
            <p className="text-body text-base lg:text-lg leading-relaxed max-w-md">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="#produits"
                className="inline-flex items-center gap-2.5 bg-forest hover:bg-forest-dark text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.hero.cta}
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d={lang === "ar" ? "M9 2L5 7l4 5" : "M5 2l4 5-4 5"} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              <Link
                href="#trust"
                className="inline-flex items-center gap-2 border-2 border-forest/25 hover:border-forest text-forest px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 bg-white/50 hover:bg-white"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* RIGHT — Product image */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-[460px] lg:max-w-[520px]">

              {/* Bio/offer badge */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 bg-white border-2 border-forest/20 text-forest font-bold text-sm px-5 py-2 rounded-full shadow-md">
                {t.hero.offerBadge}
              </div>

              {/* Product image */}
              <div className="animate-float">
                <Image
                  src="/sanaia-images/hero-image-2.png"
                  alt="SANAÏA Collagène Marin"
                  width={520}
                  height={520}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating ingredient badges */}
              {floatingBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="absolute z-20 flex items-center gap-2 bg-forest text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg whitespace-nowrap"
                  style={{
                    top: badge.top,
                    bottom: badge.bottom,
                    left: badge.left,
                    right: badge.right,
                    transform: `rotate(${badge.rotate})`,
                  }}
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0 text-forest-light" viewBox="0 0 14 14" fill="currentColor">
                    <circle cx="7" cy="7" r="3"/>
                  </svg>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 bg-white/80 backdrop-blur-md border-t border-forest/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex divide-x divide-forest/10">
            {[
              { value: t.hero.stat1Value, label: t.hero.stat1Label },
              { value: t.hero.stat2Value, label: t.hero.stat2Label },
              { value: t.hero.stat3Value, label: t.hero.stat3Label },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 py-7 text-center">
                <p className="font-black text-3xl lg:text-4xl text-forest leading-none tabular-nums">
                  {stat.value}
                </p>
                <p className="text-body text-xs mt-2 font-semibold uppercase tracking-[0.12em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
