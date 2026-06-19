import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThankYouContent from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Commande confirmée – SANAÏA",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; value?: string }>;
}) {
  const { product, value } = await searchParams;
  return (
    <>
      <Navbar />
      <main>
        <ThankYouContent product={product} value={value ? parseInt(value) : undefined} />
      </main>
      <Footer />
    </>
  );
}
