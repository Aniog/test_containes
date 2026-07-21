import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { reelCards, productById } from "@/data/products";
import strkImgConfig from "@/strk-img-config.json";


/**
 * Reel-style UGC row. The user scrolls horizontally through vertical 9:16
 * cards. Each card references its product for the image query so the
 * image content matches the worn piece.
 */
export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      className="py-20 sm:py-28 lg:py-32 bg-ivory-50"
      id="ugc"
      aria-labelledby="ugc-title"
    >
      <div className="max-w-9xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <p className="eyebrow text-taupe-500">Worn by you</p>
            <h2
              id="ugc-title"
              className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-espresso"
            >
              On them, every day.
            </h2>
          </div>
          <Link
            to="/journal"
            className="self-start md:self-end inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-espresso border-b border-espresso pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors"
          >
            See more
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      <div
        ref={containerRef}
        className="overflow-x-auto no-scrollbar"
        role="region"
        aria-label="Customer reel"
      >
        <ul className="flex gap-3 sm:gap-5 px-5 sm:px-8 lg:px-12 pb-4 snap-x snap-mandatory">
          {reelCards.map((card) => {
            const product = productById(card.productId);
            return (
              <li
                key={card.id}
                className="snap-start shrink-0 w-[180px] sm:w-[220px] md:w-[240px]"
              >
                <Link
                  to={product ? `/product/${product.id}` : "/shop"}
                  className="block relative aspect-[9/16] bg-espresso overflow-hidden group"
                  aria-label={`${card.handle} — ${card.caption}`}
                >
                  <img
                    alt={`${card.handle} wearing ${product?.name || "Velmora jewelry"}`}
                    data-strk-img-id={`reel-${card.id}`}
                    data-strk-img={`[reel-cap-${card.id}] [velmora-tagline]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-espresso/0 via-espresso/0 to-espresso/70" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <p
                      id={`reel-cap-${card.id}`}
                      className="font-serif text-ivory-50 text-base sm:text-lg leading-snug italic"
                    >
                      {card.caption}
                    </p>
                    <p className="mt-2 font-sans text-[10px] uppercase tracking-widest2 text-ivory-100/80">
                      {card.handle}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
