import React from "react";
import { PRODUCTS } from "@/data/products";
import { Eyebrow } from "@/components/ui/primitives";
import { getStrkImageUrl } from "@/hooks/useStrkImages";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const REELS = [
  { id: "reel-morning", caption: "Morning light, golden hour", productIdx: 2 },
  { id: "reel-layered", caption: "Layered, never loud", productIdx: 1 },
  { id: "reel-cuff", caption: "The cuff that needs no piercing", productIdx: 0 },
  { id: "reel-heirloom", caption: "For the ones you love", productIdx: 4 },
  { id: "reel-lace", caption: "Lace, woven in gold", productIdx: 3 },
  { id: "reel-everyday", caption: "Every day, elevated", productIdx: 2 },
];

export default function ReelRow() {
  const sectionRef = React.useRef(null);
  React.useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, sectionRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-stone bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>@velmora.jewelry</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-medium text-ink md:text-4xl">
              Worn by You
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-ink-soft">
            Real pieces on real skin. Tag <span className="font-semibold text-gold-deep">#MyVelmora</span> to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:px-8 lg:px-12 md:gap-5">
        {REELS.map((reel, i) => {
          const product = PRODUCTS[reel.productIdx];
          return (
            <figure
              key={reel.id}
              className="group relative w-[62vw] max-w-[240px] shrink-0 snap-start overflow-hidden bg-espresso sm:w-[38vw] md:w-[220px] lg:w-[240px]"
            >
              <img
                data-strk-img-id={`${reel.id}-4f5a6b${i}`}
                data-strk-img={`[${reel.id}-cap] ${product.tagline} worn on ear neck close-up warm light vertical reel photography`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="480"
                src={getStrkImageUrl(`${reel.id}-4f5a6b${i}`)}
                alt={reel.caption}
                className="aspect-[9/16] w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <figcaption
                id={`${reel.id}-cap`}
                className="absolute inset-x-0 bottom-0 p-4 font-serif text-lg italic leading-snug text-cream"
              >
                “{reel.caption}”
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
