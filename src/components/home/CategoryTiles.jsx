import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categories } from "../../data/products";

function CategoryTile({ cat }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="relative overflow-hidden group block aspect-[3/4]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
          hovered ? "scale-110" : "scale-100"
        }`}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-400 ${
          hovered ? "bg-obsidian/50" : "bg-obsidian/25"
        }`}
      />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 text-center">
        <h3
          id={cat.titleId}
          className="font-serif text-2xl md:text-3xl font-light text-ivory"
        >
          {cat.label}
        </h3>
        <p
          id={cat.descId}
          className={`font-sans text-xs tracking-wider text-ivory/80 mt-2 transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {cat.description}
        </p>
        <span
          className={`mt-4 font-sans text-[11px] tracking-widest uppercase text-gold border-b border-gold pb-0.5 transition-all duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
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
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-[11px] tracking-widest uppercase text-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">
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
