import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";


export function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Shop by Category</p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">Find Your Perfect Piece</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Link
            to="/shop?category=earrings"
            className="group relative aspect-[4/5] overflow-hidden bg-espresso"
          >
            <img
              data-strk-img-id="category-earrings"
              data-strk-img="gold earrings demi fine jewelry"
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Earrings"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-serif text-2xl md:text-3xl uppercase tracking-widest-xl border-b border-transparent group-hover:border-gold pb-1 transition-all duration-300">
                Earrings
              </span>
            </div>
          </Link>

          <Link
            to="/shop?category=necklaces"
            className="group relative aspect-[4/5] overflow-hidden bg-espresso"
          >
            <img
              data-strk-img-id="category-necklaces"
              data-strk-img="gold necklaces demi fine jewelry"
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Necklaces"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-serif text-2xl md:text-3xl uppercase tracking-widest-xl border-b border-transparent group-hover:border-gold pb-1 transition-all duration-300">
                Necklaces
              </span>
            </div>
          </Link>

          <Link
            to="/shop?category=huggies"
            className="group relative aspect-[4/5] overflow-hidden bg-espresso"
          >
            <img
              data-strk-img-id="category-huggies"
              data-strk-img="gold huggie earrings demi fine jewelry"
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Huggies"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-serif text-2xl md:text-3xl uppercase tracking-widest-xl border-b border-transparent group-hover:border-gold pb-1 transition-all duration-300">
                Huggies
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
