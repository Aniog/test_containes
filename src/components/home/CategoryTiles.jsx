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
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle mx-auto mt-3">
            Find your perfect piece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-surface-elevated"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-title-${cat.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-velmora-bg/40 transition-opacity duration-300 group-hover:bg-velmora-bg/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-title-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-velmora-text-primary tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {cat.name}
                </h3>
              </div>
              <div className="absolute bottom-6 left-6">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-text-primary">
                  {cat.count} Pieces
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}