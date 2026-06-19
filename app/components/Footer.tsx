"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { PRODUCTS } from "../data/products";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 lg:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/8">
          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/sanaia-images/sanaia-logo-without-bg-fav.png"
                alt="SANAÏA"
                width={42}
                height={42}
                className="object-contain"
              />
              <span className="font-display text-xl font-bold tracking-widest">SANAÏA</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">{t.footer.tagline}</p>
            <Image
              src="/labs.webp"
              alt="Certifié ONSSA · ISO · GMP · SGS · FDA"
              width={480}
              height={113}
              className="w-full max-w-[280px] h-auto"
            />
            <p className="text-white/20 text-xs">{t.footer.onssa}</p>
          </div>

          {/* Products */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="font-display text-sm font-bold text-white/70 uppercase tracking-widest">
              {t.footer.productsTitle}
            </h4>
            <ul className="space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link href="/shop" className="group block text-white/40 hover:text-white transition-colors duration-200">
                    <span className="text-sm block">{p.fr.name}</span>
                    <span className="font-arabic text-xs block mt-0.5 opacity-60">{p.ar.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-display text-sm font-bold text-white/70 uppercase tracking-widest">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-white/40 text-sm">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-forest-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 flex-shrink-0 text-forest-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
                <span>{t.footer.email}</span>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sanaia.ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-forest-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                  </svg>
                  <span>@sanaia.ma</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-white/20 text-xs">
          <span>{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
