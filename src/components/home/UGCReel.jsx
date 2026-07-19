import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ugcCards, products } from "@/data/products";
import { Link } from "react-router-dom";

/**
 * UGCReel — horizontal scroll of vertical (9:16) cards, styled like an
 * Instagram Reels strip. Each card has a soft serif caption overlay.
 */
export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="As seen on you"
      className="bg-cream-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-editorial px-5 md:px-10 lg:px-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow eyebrow-gold">As Seen On You</p>
            <h2 className="mt-3 font-serif text-3xl text-ink-300 md:text-4xl">
              Worn & loved
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-ink-50 md:block">
            Tag <span className="text-ink-300">@velmora</span> for a chance to be
            featured.
          </p>
        </div>
      </div>

      <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:gap-5 md:px-10 lg:px-14">
        {ugcCards.map((card, idx) => {
          const product = products.find((p) => p.id === card.product);
          return (
            <Link
              key={card.id}
              to={product ? `/product/${product.id}` : "/shop"}
              className="group relative aspect-[9/16] w-[58vw] max-w-[280px] flex-shrink-0 snap-start overflow-hidden bg-cream-200 sm:w-[230px] md:w-[240px] lg:w-[260px]"
              aria-label={`${card.caption} — shop the look`}
            >
              <img
                alt={card.caption}
                loading={idx < 2 ? "eager" : "lazy"}
                data-strk-img-id={card.imgId}
                data-strk-img={`[${card.captionId}] gold jewelry on model editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-300/55" />
              {/* Editorial caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-cream-100">
                <p
                  id={card.captionId}
                  className="font-serif text-2xl italic md:text-3xl"
                >
                  {card.caption}
                </p>
                {product && (
                  <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-cream-100/75">
                    Shop the look
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
