import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categories } from "@/data/products";

function CategoryTile({ cat }) {
  return (
    <Link to={cat.href} className="group relative overflow-hidden block aspect-[3/4]">
      {/* Background image */}
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Base overlay */}
      <div className="absolute inset-0 bg-velmora-obsidian/30 group-hover:bg-velmora-obsidian/50 transition-colors duration-500" />

      {/* Label — always visible */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 text-center">
        <h3
          id={cat.titleId}
          className="font-cormorant text-2xl lg:text-3xl font-light text-velmora-text-light tracking-widest-sm uppercase"
        >
          {cat.label}
        </h3>
        <p
          id={cat.descId}
          className="font-manrope text-xs text-velmora-text-light/70 mt-1.5 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {cat.description}
        </p>
        <span className="mt-4 font-manrope text-[10px] tracking-widest-xl uppercase text-velmora-gold border-b border-velmora-gold pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Shop Now
        </span>
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
    <section ref={containerRef} className="bg-velmora-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-obsidian">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
