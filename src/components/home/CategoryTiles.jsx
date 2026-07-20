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
    <section ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="font-sans text-champagne text-xs tracking-widest3 uppercase mb-3">
          Explore
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
          Shop by Category
        </h2>
        <div className="w-12 h-px bg-champagne mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[3/4] md:aspect-[2/3] overflow-hidden bg-champagne-pale block"
          >
            <img
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
              data-strk-img-ratio="2x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={cat.titleId} className="hidden">{cat.label}</span>
            <span id={cat.descId} className="hidden">{cat.desc}</span>

            {/* Overlay */}
            <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/40 transition-colors duration-500" />

            {/* Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
              <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <p className="font-serif text-ivory text-2xl md:text-3xl font-light tracking-widest">
                  {cat.label}
                </p>
                <div className="w-8 h-px bg-champagne mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <p className="font-sans text-ivory/80 text-xs tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  Shop Now
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
