import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "À propos – SANAÏA",
  description:
    "Découvrez l'histoire de SANAÏA, nos valeurs, et notre engagement envers des compléments alimentaires 100% naturels, certifiés ONSSA et fabriqués au Maroc.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
