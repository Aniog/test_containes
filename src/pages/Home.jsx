import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ProductRange from "@/components/home/ProductRange";
import FeaturedMachine from "@/components/home/FeaturedMachine";
import Capabilities from "@/components/home/Capabilities";
import Industries from "@/components/home/Industries";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import QuoteSection from "@/components/home/QuoteSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProductRange />
        <FeaturedMachine />
        <Capabilities />
        <Industries />
        <Process />
        <Testimonials />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
