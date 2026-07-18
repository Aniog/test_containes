import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categories } from "@/data/products";

function CategoryTile({ cat }) {
  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="group relative overflow-hidden aspect-[3/4] block bg-parchment"
    >
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Default overlay */}
      <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/50 transition-colors duration-300" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3
            id={cat.titleId}
            className="font-serif text-2xl md:text-3xl font-light text-cream tracking-wider text-center"
          >
            {cat.label}
          </h3>
          <p
            id={cat.descId}
            className="font-sans text-xs tracking-widest uppercase text-cream/70 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Shop Now
          </p>
        </div>
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
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Browse</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">
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
