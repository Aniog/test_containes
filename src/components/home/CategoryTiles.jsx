import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categories } from "@/data/products";

function CategoryTile({ cat }) {
  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="relative overflow-hidden group aspect-[3/4] block bg-parchment"
    >
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        alt={cat.label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/50 transition-colors duration-300" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
        <h3
          id={cat.titleId}
          className="font-cormorant text-2xl md:text-3xl font-light text-cream uppercase tracking-[0.2em] text-center"
        >
          {cat.label}
        </h3>
        <p id={cat.descId} className="font-inter text-[10px] text-cream/70 uppercase tracking-[0.15em] mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {cat.description}
        </p>
        <div className="mt-4 w-8 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
}

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">Explore</p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
