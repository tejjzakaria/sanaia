"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { PRODUCTS } from "../data/products";

export default function ShopContent() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Page hero */}
      <section className="bg-sage pt-[68px]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-24 text-center">
          <p className="text-forest-mid text-xs font-bold tracking-widest uppercase mb-4">
            + SANAÏA
          </p>
          <h1
            className="font-display font-black text-ink leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {t.shop.heading}
          </h1>
          <p className="text-body text-lg mt-4 max-w-md mx-auto">{t.shop.sub}</p>

          {/* Product quick-jump pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {PRODUCTS.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="text-xs font-semibold px-5 py-2 rounded-full border-2 transition-all duration-200"
                style={{ borderColor: p.color, color: p.color, backgroundColor: "transparent" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = p.color;
                  el.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "transparent";
                  el.style.color = p.color;
                }}
              >
                {p.fr.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product card grid */}
      <section id="products-grid" className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => {
              const item = lang === "ar" ? product.ar : product.fr;
              return (
                <Link
                  key={product.id}
                  id={product.id}
                  href={`/shop/${product.id}`}
                  className="group flex flex-col rounded-3xl overflow-hidden border border-edge hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white"
                >
                  {/* Image area */}
                  <div className="relative h-72 w-full overflow-hidden bg-white">
                    <Image
                      src={product.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-5 gap-3">
                    {/* Names */}
                    <div>
                      <h2 className="font-display font-black text-ink text-lg leading-tight">
                        {product.fr.name}
                      </h2>
                      <p className="font-arabic text-muted text-sm font-semibold mt-0.5">
                        {product.ar.name}
                      </p>
                    </div>

                    {/* Tagline */}
                    <p className="text-body text-xs leading-snug flex-1">
                      {item.tagline}
                    </p>

                    {/* Price badge + arrow */}
                    <div className="flex items-center justify-between pt-2 border-t border-edge mt-auto">
                      <div className="flex flex-col leading-tight">
                        <span className="text-muted text-[10px] font-semibold uppercase tracking-wide">
                          {lang === "ar" ? "ابتداءً من" : "Dès"}
                        </span>
                        <span
                          className="font-black text-xl tabular-nums"
                          style={{ color: product.color }}
                        >
                          {product.packs[0].price}
                        </span>
                      </div>
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1"
                        style={{ backgroundColor: `${product.color}18`, color: product.color }}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Certification bar */}
      <div className="bg-white border-t border-edge py-8 flex justify-center">
        <Image
          src="/labs.webp"
          alt="Certifié ONSSA · ISO · GMP · SGS · FDA"
          width={480}
          height={113}
          className="w-full max-w-[420px] h-auto"
        />
      </div>
    </>
  );
}
