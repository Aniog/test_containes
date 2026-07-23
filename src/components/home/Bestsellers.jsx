import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ProductCardById } from "@/components/ui/ProductCardById";

export function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Most Loved</p>
            <h2
              id="bestsellers-title"
              className="font-serif text-3xl md:text-4xl text-espresso"
            >
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-block text-xs uppercase tracking-widest text-stone hover:text-espresso border-b border-transparent hover:border-espresso transition-all"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          <ProductCardById productId="vivid-aura-jewels" />
          <ProductCardById productId="majestic-flora-nectar" />
          <ProductCardById productId="golden-sphere-huggies" />
          <ProductCardById productId="amber-lace-earrings" />
          <ProductCardById productId="royal-heirloom-set" />
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-widest text-stone hover:text-espresso border-b border-transparent hover:border-espresso transition-all"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
