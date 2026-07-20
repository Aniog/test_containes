import React, { useRef, useEffect } from "react";
import Hero from "../components/home/Hero.jsx";
import TrustBar from "../components/home/TrustBar.jsx";
import ProductGrid from "../components/home/ProductGrid.jsx";
import UGCReel from "../components/home/UGCReel.jsx";
import CategoryTiles from "../components/home/CategoryTiles.jsx";
import BrandStory from "../components/home/BrandStory.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Newsletter from "../components/home/Newsletter.jsx";
import { products } from "../data/products.js";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  });

  const bestsellers = products.filter(p => [
    "vivid-aura-jewels",
    "majestic-flora-nectar",
    "golden-sphere-huggies",
    "amber-lace-earrings",
    "royal-heirloom-set"
  ].includes(p.id));

  return (
    <div ref={containerRef} className="overflow-hidden">
      <Hero />
      <TrustBar />
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4 block">Selected Pieces</span>
            <h2 className="text-4xl font-serif">The Bestsellers</h2>
          </div>
          <a href="/shop" className="text-xs uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-all mt-4 md:mt-0">
            View All
          </a>
        </div>
        <ProductGrid products={bestsellers} />
      </section>
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
