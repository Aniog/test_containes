import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import NavBar from "@/components/microcosmos/NavBar";
import Hero from "@/components/microcosmos/Hero";
import FeaturedGallery from "@/components/microcosmos/FeaturedGallery";
import Realms from "@/components/microcosmos/Realms";
import Mosaic from "@/components/microcosmos/Mosaic";
import ExhibitionStrip from "@/components/microcosmos/ExhibitionStrip";
import Stories from "@/components/microcosmos/Stories";
import ContactCTA from "@/components/microcosmos/ContactCTA";
import Footer from "@/components/microcosmos/Footer";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-cosmos-bg text-cosmos-text font-sans antialiased"
    >
      <NavBar />
      <main>
        <Hero />
        <FeaturedGallery />
        <Realms />
        <Mosaic />
        <ExhibitionStrip />
        <Stories />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
