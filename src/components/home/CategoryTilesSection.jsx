import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const tiles = [
  {
    id: "cat-earrings",
    label: "Earrings",
    slug: "earrings",
    labelId: "cat-label-earrings",
  },
  {
    id: "cat-necklaces",
    label: "Necklaces",
    slug: "necklaces",
    labelId: "cat-label-necklaces",
  },
  {
    id: "cat-huggies",
    label: "Huggies",
    slug: "huggies",
    labelId: "cat-label-huggies",
  },
];

export function CategoryTilesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 bg-velmora-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-widest text-velmora-gold mb-2">
            Shop by Category
          </p>
          <h2
            id="categories-title"
            className="font-serif text-3xl md:text-4xl text-velmora-base"
          >
            Find Your Signature
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-velmora-sand"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-cover bg-center"
                data-strk-bg-id={tile.id}
                data-strk-bg={`[${tile.labelId}] [categories-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-velmora-base/20 group-hover:bg-velmora-base/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={tile.labelId}
                  className="font-serif text-2xl md:text-3xl text-white tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  {tile.label}
                </h3>
              </div>
              <div className="absolute bottom-5 left-0 right-0 text-center md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-300">
                <span className="inline-block text-white text-xs uppercase tracking-widest border-b border-white/60 pb-0.5">
                  {tile.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
