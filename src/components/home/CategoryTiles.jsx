import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const TILES = [
  {
    id: "earrings",
    to: "/shop/earrings",
    label: "Earrings",
    imgId: "category-earrings-3a7e1f",
    query:
      "gold drop earrings on warm neutral background editorial jewelry photography closeup",
  },
  {
    id: "necklaces",
    to: "/shop/necklaces",
    label: "Necklaces",
    imgId: "category-necklaces-9b2d44",
    query:
      "gold crystal pendant necklace on dark background editorial closeup warm lighting",
  },
  {
    id: "huggies",
    to: "/shop/huggies",
    label: "Huggies",
    imgId: "category-huggies-6f81ca",
    query:
      "chunky gold huggie hoop earrings pair on warm neutral background editorial",
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-bone text-ink py-20 md:py-28 lg:py-32"
    >
      <div className="container-editorial">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow">Shop the Edit</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light leading-[1.05]">
            By category
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TILES.map((tile) => (
            <li key={tile.id}>
              <Link
                to={tile.to}
                className="group relative block aspect-[4/5] overflow-hidden bg-warm-radial"
              >
                <img
                  alt={tile.label}
                  data-strk-img-id={tile.imgId}
                  data-strk-img={tile.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.05]"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/0 to-ink/0 transition-opacity duration-500 group-hover:from-ink/80" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
                  <h3 className="font-serif text-2xl md:text-3xl text-bone tracking-[0.12em] uppercase">
                    {tile.label}
                  </h3>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-bone/70 text-bone opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-editorial">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
