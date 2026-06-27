import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function CategoryTiles() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="pb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold-deep">
            Shop by Category
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light tracking-tight text-espresso md:text-5xl">
            Find your everyday.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-cream-soft"
            >
              <img
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={cat.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent transition-opacity duration-500 group-hover:from-ink/85" />
              <div className="absolute inset-x-6 bottom-7">
                <p className="text-[11px] uppercase tracking-[0.32em] text-gold-light">
                  {cat.tagline}
                </p>
                <h3 className="mt-2 font-serif text-4xl font-light text-cream md:text-5xl">
                  {cat.label}
                </h3>
                <span className="mt-3 inline-block border-b border-cream/60 pb-1 text-[11px] uppercase tracking-[0.28em] text-cream transition-colors duration-300 group-hover:border-gold-light group-hover:text-gold-light">
                  Shop {cat.label} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
