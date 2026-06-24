import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import "./App.css";

import Navbar from "@/components/microcosmos/Navbar";
import Hero from "@/components/microcosmos/Hero";
import About from "@/components/microcosmos/About";
import Features from "@/components/microcosmos/Features";
import Gallery from "@/components/microcosmos/Gallery";
import Specimens from "@/components/microcosmos/Specimens";
import Journal from "@/components/microcosmos/Journal";
import CTA from "@/components/microcosmos/CTA";
import Footer from "@/components/microcosmos/Footer";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ImageHelper && typeof ImageHelper.loadImages === "function") {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-cosmos-bg text-cosmos-fg font-sans antialiased selection:bg-cosmos-accent/30"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Specimens />
        <Journal />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
