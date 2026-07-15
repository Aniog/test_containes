import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function CategoriesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3">
            Shop by Category
          </h2>
          <p className="text-stone-500 text-sm">
            Find your perfect piece, however you wear it.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-stone-100"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`cat-bg-${cat.id}`}
                data-strk-bg={`[cat-name-${cat.id}] gold jewelry ${cat.name.toLowerCase()} on dark background`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-xl sm:text-2xl text-white tracking-[0.15em] uppercase border-b border-transparent group-hover:border-white/70 pb-1 transition-all duration-300"
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
