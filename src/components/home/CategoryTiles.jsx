import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const TILE_IMAGES = {
  earrings: "gold earrings on model close-up editorial warm light",
  necklaces: "gold necklace on woman portrait warm light editorial",
  huggies: "gold huggie earrings on ear close-up editorial",
  sets: "gold jewelry set gift box on warm linen",
};

export default function CategoryTiles() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  const visible = CATEGORIES.filter((c) => ["earrings", "necklaces", "huggies"].includes(c.id));

  return (
    <section ref={ref} className="container-page py-20 sm:py-28" id="shop-by-category">
      <div className="mb-12 sm:mb-16 text-center sm:text-left">
        <span className="eyebrow">Shop by category</span>
        <h2
          id="cat-title"
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light mt-3 text-sable"
        >
          Begin with a piece you'll never take off
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {visible.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative block aspect-[3/4] sm:aspect-[2/3] overflow-hidden bg-sable"
          >
            <img
              alt={cat.label}
              data-strk-img-id={`cat-${cat.id}`}
              data-strk-img={`[cat-${cat.id}-label] [cat-title] ${TILE_IMAGES[cat.id]}`}
              data-strk-img-ratio="2x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sable/70 via-sable/10 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <div className="flex items-end justify-between gap-4">
                <h3
                  id={`cat-${cat.id}-label`}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-light"
                >
                  {cat.label}
                </h3>
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-ivory/15 backdrop-blur-sm flex items-center justify-center text-ivory border border-ivory/25 transition-all duration-300 group-hover:bg-ivory group-hover:text-sable">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </div>
              <span className="mt-2 inline-block text-[11px] tracking-widest2 uppercase text-ivory/70 font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Shop {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
