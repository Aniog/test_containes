import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Capabilities from "@/components/sections/Capabilities";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-canvas text-[#0E1726] font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Capabilities />
        <Industries />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;