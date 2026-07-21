import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import StrkImage from "@/components/ui/StrkImage";

const TILES = [
  {
    id: "cat-earrings",
    label: "Earrings",
    to: "/shop?category=earrings",
    query: "velmora gold earrings collection on model",
    ratio: "4x5",
    width: 800,
  },
  {
    id: "cat-necklaces",
    label: "Necklaces",
    to: "/shop?category=necklaces",
    query: "velmora gold necklace crystal pendant editorial",
    ratio: "4x5",
    width: 800,
  },
  {
    id: "cat-huggies",
    label: "Huggies",
    to: "/shop?category=huggies",
    query: "velmora gold huggie hoop earrings chunky",
    ratio: "4x5",
    width: 800,
  },
];

export default function CategoryTiles() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      id="categories"
      className="py-20 sm:py-24 lg:py-28 bg-ivory"
    >
      <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-10 sm:mb-14">
          <p className="eyebrow mb-3">Shop by Category</p>
          <h2
            id="category-title"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso"
          >
            Begin somewhere
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={tile.to}
              className="group relative block overflow-hidden bg-espresso"
              aria-label={`Shop ${tile.label}`}
            >
              <div className="aspect-[4/5] sm:aspect-[3/4]">
                <div className="absolute inset-0 transition-transform duration-[1200ms] ease-velmora group-hover:scale-[1.04]">
                  <StrkImage
                    id={tile.id}
                    query={`[category-title] [cat-section-subtitle] ${tile.query}`}
                    ratio={tile.ratio}
                    width={tile.width}
                    tone="dark"
                    className="h-full w-full"
                  />
                </div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(21,16,13,0.75) 100%)",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex items-end justify-between text-ivory">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl">
                      {tile.label}
                    </h3>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-ivory/70">
                      Discover the edit
                    </p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/40 group-hover:bg-ivory group-hover:text-espresso transition-colors">
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
