import React, { useEffect, useRef } from "react";
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
    <section
      ref={containerRef}
      className="bg-cream py-20 md:py-28"
      aria-labelledby="category-tiles-title"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="eyebrow">Shop By Category</p>
          <h2
            id="category-tiles-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso mt-3"
          >
            Find Your Forever Piece
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?collection=${cat.slug}`}
              className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-sand"
            >
              <img
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] Velmora ${cat.label.toLowerCase()} fine gold jewelry editorial flat lay warm`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-espresso/45" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-ivory">
                <h3
                  id={cat.titleId}
                  className="font-serif text-3xl md:text-4xl tracking-wide"
                >
                  {cat.label}
                </h3>
                <span className="mt-2 text-[11px] tracking-widest2 uppercase border-b border-ivory/70 pb-0.5 opacity-90 group-hover:border-gold group-hover:text-gold transition">
                  Shop {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
