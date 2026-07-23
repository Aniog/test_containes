import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categories } from "@/data/products";

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Tiles */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[4/5] bg-parchment block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
                <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p
                    id={cat.titleId}
                    className="font-serif text-2xl md:text-3xl text-cream font-light tracking-wide"
                  >
                    {cat.label}
                  </p>
                  <p
                    id={cat.descId}
                    className="text-xs font-sans text-cream/70 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {cat.description}
                  </p>
                  <div className="w-8 h-px bg-gold mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
