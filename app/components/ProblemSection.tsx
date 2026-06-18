"use client";
import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { useLanguage } from "../context/LanguageContext";

const PROBLEM_ICONS = [
  /* Skin/glow */
  <svg key="skin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 2a10 10 0 1 0 10 10"/>
    <path d="M12 6v6l4 2"/>
    <path d="M22 2l-5 5"/>
    <path d="M17 2h5v5"/>
  </svg>,

  /* Brain/mood */
  <svg key="brain" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.88A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.88A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>,

  /* Energy/bolt */
  <svg key="energy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M13 2L4.09 12.26a1 1 0 0 0 .9 1.74H11l-1 8 8.91-10.26a1 1 0 0 0-.9-1.74H12l1-8Z"/>
  </svg>,
];

const CHECK_ICON = (
  <svg className="w-5 h-5 text-forest-light flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
  </svg>
);

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Problem block (dark) ────────────────────────── */}
      <section className="bg-forest py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimateIn animation="animate-fade-up" className="text-center mb-16 space-y-4">
            <p className="text-forest-light text-xs font-bold tracking-widest uppercase">
              {t.problem.tag}
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t.problem.heading}
            </h2>
            <p className="text-white/55 text-base max-w-lg mx-auto leading-relaxed">
              {t.problem.description}
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.problem.cards.map((card, i) => (
              <AnimateIn
                key={i}
                animation="animate-fade-up"
                delay={`delay-${(i + 1) * 150}` as "delay-150" | "delay-300" | "delay-400"}
              >
                <div className="bg-white/6 border border-white/10 hover:bg-white/10 hover:border-white/18 rounded-2xl p-8 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-forest-mid/40 text-forest-light flex items-center justify-center mb-6">
                    {PROBLEM_ICONS[i]}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution block (sage) ───────────────────────── */}
      <section className="bg-sage py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <AnimateIn animation="animate-slide-left">
              <div className="relative">
                <div className="absolute -inset-4 bg-sage-dark rounded-[40px] -rotate-2" aria-hidden />
                <div className="relative bg-sage-dark rounded-3xl overflow-hidden aspect-square">
                  <Image
                    src="/sanaia-images/IMG_9214%202.JPG.jpeg"
                    alt="SANAÏA Weight Boost"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>
            </AnimateIn>

            {/* Text */}
            <AnimateIn animation="animate-slide-right" delay="delay-200" className="space-y-6">
              <p className="text-forest-mid text-xs font-bold tracking-widest uppercase">
                {t.problem.solutionTag}
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-tight">
                {t.problem.solutionHeading}
              </h2>
              <p className="text-body text-base leading-relaxed">
                {t.problem.solutionText}
              </p>
              <ul className="space-y-3">
                {t.problem.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    {CHECK_ICON}
                    <span className="text-body text-sm font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
