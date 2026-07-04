import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_TILES } from "@/data/content";
import { useStrkImages } from "@/hooks/useStrkImages";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function CategoryTiles() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="container-editorial">
        <div className="mb-10 md:mb-12">
          <p className="eyebrow">Shop By Category</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mt-3 tracking-[-0.01em]">
            Find Your Piece
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {CATEGORY_TILES.map((tile) => (
            <Link
              key={tile.slug}
              to={`/shop?category=${tile.slug}`}
              className="group relative block aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-ink"
            >
              <img
                alt={tile.label}
                data-strk-img-id={tile.imgId}
                data-strk-img={`[${tile.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/15 group-hover:bg-ink/30 transition-colors duration-500" />
              <div className="absolute inset-0 ring-1 ring-inset ring-ink/5" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 flex items-end justify-between text-cream">
                <div>
                  <h3
                    id={tile.titleId}
                    className="font-serif text-3xl md:text-4xl tracking-[-0.01em]"
                  >
                    {tile.label}
                  </h3>
                  <p className="text-[12px] uppercase tracking-[0.24em] text-cream/80 mt-2">
                    {tile.blurb}
                  </p>
                </div>
                <span className="w-10 h-10 rounded-full border border-cream/60 flex items-center justify-center transition-transform duration-500 ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
