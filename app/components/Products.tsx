"use client";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";
import { useLanguage } from "../context/LanguageContext";
import { PRODUCTS } from "../data/products";

const DELAYS = ["delay-100", "delay-200", "delay-300", "delay-400"];

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
                  className="group bg-white border border-sage-dark hover:border-transparent rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <Image
                      src={product.image}
                      alt={item.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col gap-2 flex-1">
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink leading-tight">{product.fr.name}</h3>
                      <p className="font-arabic text-muted text-sm font-medium mt-0.5">{product.ar.name}</p>
                    </div>
                    <p className="text-muted text-sm leading-snug flex-1">{item.tagline}</p>
                    <span
                      className="mt-3 block text-center py-3 rounded-full text-sm font-bold text-white transition-all duration-200 group-hover:opacity-90 group-hover:shadow-md"
                      style={{ backgroundColor: product.color }}
                    >
                      {t.products.cta}
                    </span>
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
