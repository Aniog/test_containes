import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const categories = [
  {
    id: "cat-earrings",
    label: "Earrings",
    href: "/shop?category=Earrings",
    imgId: "cat-earrings-bg-a1b2c3",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    desc: "gold earrings editorial jewelry photography dark background",
  },
  {
    id: "cat-necklaces",
    label: "Necklaces",
    href: "/shop?category=Necklaces",
    imgId: "cat-necklaces-bg-b2c3d4",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    desc: "gold necklace pendant editorial jewelry photography",
  },
  {
    id: "cat-huggies",
    label: "Huggies",
    href: "/shop?category=Huggies",
    imgId: "cat-huggies-bg-c3d4e5",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    desc: "huggie hoop earrings gold close up ear jewelry",
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative overflow-hidden block"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-obsidian transition-transform duration-500 group-hover:scale-105"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
                style={{ backgroundSize: "cover", backgroundPosition: "center" }}
              />

              {/* Hidden text for query */}
              <span id={cat.titleId} className="sr-only">{cat.label}</span>
              <span id={cat.descId} className="sr-only">{cat.desc}</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <p className="font-cormorant text-2xl md:text-3xl font-light text-cream uppercase tracking-[0.2em] mb-3">
                  {cat.label}
                </p>
                <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-cream/70 border-b border-cream/40 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
