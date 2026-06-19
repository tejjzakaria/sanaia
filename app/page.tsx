import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import Products from "./components/Products";
import WhySanaia from "./components/WhySanaia";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        {/*<ProblemSection />*/}
        <Products />
        <WhySanaia />
        
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
