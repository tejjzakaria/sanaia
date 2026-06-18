"use client";
import { useState } from "react";
import AnimateIn from "./AnimateIn";
import { useLanguage } from "../context/LanguageContext";

function FaqItem({ q, a, open, toggle }: {
  q: string; a: string; open: boolean; toggle: () => void;
}) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? "border-forest/30 bg-white shadow-sm" : "border-edge bg-white hover:border-forest/20"}`}>
      <button
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
        onClick={toggle}
        aria-expanded={open}
      >
        <span className={`font-semibold text-base transition-colors duration-200 ${open ? "text-forest" : "text-ink"}`}>
          {q}
        </span>
        <span className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${open ? "bg-forest text-white rotate-45" : "bg-sage text-forest"}`}>
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M8 3v10M3 8h10" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <p className="text-body text-sm leading-relaxed px-7 pb-6">{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sage py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <AnimateIn animation="animate-fade-up" className="text-center mb-14 space-y-4">
          <p className="text-forest-mid text-xs font-bold tracking-widest uppercase">
            {t.faq.tag}
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-tight">
            {t.faq.heading}
          </h2>
        </AnimateIn>

        <AnimateIn animation="animate-fade-up" delay="delay-200" className="space-y-3">
          {t.faq.items.map((item, i) => (
            <FaqItem
              key={i}
              q={item.q}
              a={item.a}
              open={openIdx === i}
              toggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
