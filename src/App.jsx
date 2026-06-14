import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Capabilities from "@/components/sections/Capabilities";
import Products from "@/components/sections/Products";
import Industries from "@/components/sections/Industries";
import Specs from "@/components/sections/Specs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const App = () => {
  return (
    <div className="bg-white text-brand-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Capabilities />
        <Products />
        <Industries />
        <Specs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
