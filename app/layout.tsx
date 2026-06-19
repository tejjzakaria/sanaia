import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SANAÏA – Compléments Alimentaires 100% Naturels",
  description:
    "Découvrez nos compléments alimentaires bio, certifiés ONSSA et formulés avec les meilleurs extraits naturels pour votre santé.",
  icons: {
    icon: "/sanaia-images/sanaia-logo-without-bg-fav.png",
    apple: "/sanaia-images/sanaia-logo-without-bg-fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${ibmPlexSans.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body className="min-h-screen bg-sage text-body antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
