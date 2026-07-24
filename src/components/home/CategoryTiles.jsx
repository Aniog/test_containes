import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categories } from "@/data/products";

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const tiles = categories.filter((c) => c.id !== "sets").slice(0, 3);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-square overflow-hidden group"
            >
              <img
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-label-${cat.id}] ${cat.name} jewelry gold elegant collection`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span id={`cat-label-${cat.id}`} className="sr-only">
                {cat.name}
              </span>
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-xl md:text-2xl tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.label}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 md:opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <span className="font-serif text-white text-lg md:text-xl tracking-widest uppercase">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
