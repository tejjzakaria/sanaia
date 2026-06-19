"use client";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";
import { useLanguage } from "../context/LanguageContext";
import { PRODUCTS } from "../data/products";

const DELAYS = ["delay-100", "delay-200", "delay-300", "delay-400"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.round(Math.min(100, Math.max(0, (rating - star + 1) * 100)));
        const id = `hp-star-${star}-${Math.round(rating * 10)}`;
        return (
          <svg key={star} className="w-3 h-3" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
                <stop offset={`${fill}%`} stopColor="#FBBF24" />
                <stop offset={`${fill}%`} stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#${id})`}
              d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function Products() {
  const { t, lang } = useLanguage();

  return (
    <section id="produits" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <AnimateIn animation="animate-fade-up" className="text-center mb-16 space-y-4">
          <p className="text-forest-mid text-xs font-bold tracking-widest uppercase">
            {t.products.tag}
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-tight">
            {t.products.title}
          </h2>
          <p className="text-muted text-base max-w-lg mx-auto">{t.products.description}</p>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {PRODUCTS.map((product, i) => {
            const item = lang === "ar" ? product.ar : product.fr;
            return (
              <AnimateIn key={product.id} animation="animate-fade-up" delay={DELAYS[i]}>
                <Link
                  href={`/shop/${product.id}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full border border-transparent hover:border-white"
                >
                  {/* Colored top strip + image */}
                  <div className="relative" style={{ backgroundColor: `${product.color}18` }}>
                    {/* Accent bar */}
                    <div className="h-1.5 w-full" style={{ backgroundColor: product.color }} />

                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-4 sm:p-5 gap-3 bg-white">
                    {/* Name */}
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink leading-tight">
                      {product.fr.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-muted text-xs leading-snug flex-1">{item.tagline}</p>

                    {/* Rating + price + arrow */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="space-y-1">
                        <StarRating rating={product.rating} />
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[10px] text-muted font-medium">
                            {lang === "ar" ? "ابتداءً من" : "Dès"}
                          </span>
                          <span className="text-xs text-muted line-through tabular-nums">299 DH</span>
                          <span
                            className="font-black text-base tabular-nums"
                            style={{ color: product.color }}
                          >
                            {product.packs[0].price}
                          </span>
                        </div>
                      </div>

                      <span
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                        style={{ backgroundColor: product.color, color: "white" }}
                      >
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
