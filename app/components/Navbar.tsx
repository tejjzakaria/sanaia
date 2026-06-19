"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Pages whose first section has a dark background — navbar text flips white when unscrolled
  const darkHero = !scrolled && pathname === "/about";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.products, href: "/shop" },
    { label: t.nav.about, href: "/about" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Announcement bar */}
      <div className="bg-forest h-8 overflow-hidden">
        {/* w-max keeps the track at content width so translateX(-50%) = exactly one half */}
        <div className="flex w-max h-full animate-marquee">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center shrink-0" aria-hidden={half === 1 ? true : undefined}>
              {Array.from({ length: 4 }).flatMap((_, r) =>
                ["Livraison gratuite au Maroc", "توصيل مجاني في المغرب", "Paiement à la livraison", "الدفع عند الاستلام"].map((item, i) => (
                  <span key={`${r}-${i}`} className="inline-flex items-center gap-3 text-white text-xs font-semibold px-6 whitespace-nowrap">
                    {item}
                    <svg className="w-2 h-2 text-white/40 flex-shrink-0" viewBox="0 0 10 10" fill="currentColor">
                      <path d="M5 0l1.12 3.45H9.5L6.69 5.58l1.07 3.3L5 6.9l-2.76 1.97 1.07-3.3L.5 3.45h3.38L5 0z"/>
                    </svg>
                  </span>
                ))
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/sanaia-images/sanaia-logo-without-bg-fav.png"
              alt="SANAÏA"
              width={55}
              height={55}
              className="object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  className={`relative text-sm font-medium transition-colors duration-200 group pb-0.5 ${
                    darkHero
                      ? "text-white/80 hover:text-white"
                      : isActive
                      ? "text-forest"
                      : "text-body hover:text-forest"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                      darkHero ? "bg-white" : "bg-forest"
                    } ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right: lang + CTA */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center rounded-full overflow-hidden shadow-md ring-1 ring-black/15">
              <button
                onClick={() => setLang("fr")}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-xs text-white transition-all duration-300 ${lang === "fr" ? "font-black" : "font-light"}`}
                style={{ background: "linear-gradient(160deg,#2D7848 0%,#1B5430 55%,#103520 100%)" }}
              >
                <span className={`w-1 h-1 rounded-full bg-white transition-all duration-300 ${lang === "fr" ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
                FR
              </button>
              <div className="w-px self-stretch bg-white/20" />
              <button
                onClick={() => setLang("ar")}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-xs text-white transition-all duration-300 ${lang === "ar" ? "font-black" : "font-light"}`}
                style={{ background: "linear-gradient(160deg,#2a2a2a 0%,#0C190E 55%,#000 100%)" }}
              >
                ع
                <span className={`w-1 h-1 rounded-full bg-white transition-all duration-300 ${lang === "ar" ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
              </button>
            </div>

            {/* Hamburger */}
            <button
              className={`lg:hidden p-1.5 transition-colors ${darkHero ? "text-white" : "text-ink"}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-white rounded-2xl mb-4 p-4 space-y-1 shadow-xl border border-edge">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  className={`flex items-center gap-2 px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-forest bg-sage font-semibold"
                      : "text-body hover:text-forest hover:bg-sage"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0" />
                  )}
                  {l.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="#produits"
                className="flex items-center justify-center bg-forest text-white px-6 py-3 rounded-full text-sm font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
