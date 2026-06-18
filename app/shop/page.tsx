import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopContent from "./ShopContent";

export const metadata: Metadata = {
  title: "Boutique – SANAÏA",
  description:
    "Découvrez notre gamme complète de compléments alimentaires naturels certifiés ONSSA, fabriqués au Maroc par Beauty Pharmacos.",
};

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main>
        <ShopContent />
      </main>
      <Footer />
    </>
  );
}
