import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { CATEGORY_TILES } from "@/lib/products";

export default function Categories() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="section bg-editorial"
      aria-label="Shop by category"
    >
      <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-4">Shop by Category</p>
            <h2 className="font-display text-cocoa-900 text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em]">
              Find your <em className="italic font-normal">everyday</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORY_TILES.map((tile, i) => (
            <Link
              key={tile.id}
              to={`/shop?cat=${tile.id}`}
              className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-ivory-100"
            >
              <img
                alt={tile.label}
                data-strk-img-id={tile.imageId}
                data-strk-img={tile.imageQuery}
                data-strk-img-ratio={i === 1 ? "3x4" : "4x5"}
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              {/* Default overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(31,26,23,0.0) 30%, rgba(31,26,23,0.55) 100%)",
                }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(31,26,23,0.15) 0%, rgba(31,26,23,0.6) 100%)",
                }}
              />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 text-center">
                <h3
                  id={`category-tile-label-${tile.id}`}
                  className="font-display text-ivory-50 text-3xl md:text-4xl tracking-[0.06em] uppercase font-medium mb-2"
                >
                  {tile.label}
                </h3>
                <span className="inline-flex items-center gap-2 text-[11px] tracking-button uppercase text-ivory-50/90 group-hover:text-champagne-300 transition-colors">
                  Shop {tile.label}
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.6}
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
