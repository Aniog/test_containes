import { useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const tiles = [
  { id: "earrings", label: "Earrings", query: "[cat-earrings-label] gold earrings editorial" },
  { id: "necklaces", label: "Necklaces", query: "[cat-necklaces-label] gold necklace editorial" },
  { id: "huggies", label: "Huggies", query: "[cat-huggies-label] gold huggie earrings editorial" },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="bg-[#fbfaf9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-700">
            Shop by Category
          </p>
          <h2 className="mt-2 font-serif text-3xl font-light text-stone-900 md:text-4xl">
            Find Your Signature
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-stone-200"
            >
              <div
                className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105 bg-stone-300"
                data-strk-bg-id={`category-tile-${tile.id}`}
                data-strk-bg={tile.query}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width={800}
              />
              <div className="absolute inset-0 bg-stone-900/20 transition-colors duration-500 group-hover:bg-stone-900/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`cat-${tile.id}-label`}
                  className="border border-white/60 bg-white/10 px-6 py-3 font-serif text-sm font-medium uppercase tracking-[0.22em] text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20"
                >
                  {tile.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
        return null;
      })()}
    </section>
  );
};

export default CategoryTiles;
