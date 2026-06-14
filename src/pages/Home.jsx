import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Capabilities from "@/components/home/Capabilities";
import Industries from "@/components/home/Industries";
import Engineering from "@/components/home/Engineering";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-pearl text-graphite">
      <Header />
      <main>
        <Hero />
        <Products />
        <Capabilities />
        <Industries />
        <Engineering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
