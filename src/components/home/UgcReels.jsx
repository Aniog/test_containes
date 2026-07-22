import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const reels = [
  {
    id: "golden-hour",
    caption: "Golden hour, always",
    query: "gold huggie earrings worn on ear close up warm sunlight editorial",
  },
  {
    id: "layered-love",
    caption: "Layered with love",
    query: "layered gold necklaces on neck décolletage soft light editorial",
  },
  {
    id: "everyday-ritual",
    caption: "The everyday ritual",
    query: "woman putting on gold ear cuff jewelry morning ritual warm tones",
  },
  {
    id: "heirloom-moments",
    caption: "Heirloom moments",
    query: "gold filigree drop earrings elegant evening look dark background",
  },
  {
    id: "gifted-kept",
    caption: "Gifted, then kept",
    query: "hands opening luxury jewelry gift box gold necklace ribbon",
  },
  {
    id: "stacked-glow",
    caption: "Stacked to glow",
    query: "stacked gold rings and earrings on model warm studio light",
  },
];

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function UgcReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="border-y border-ink/10 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-luxe text-gold">
            @velmora
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink md:text-5xl">
            Worn & <span className="italic">Adored</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-taupe">
            Real moments from our community — tag @velmora to be featured.
          </p>
        </div>
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-5 pb-2 md:gap-6 md:px-10">
        {reels.map((reel) => (
          <figure
            key={reel.id}
            className="group relative w-44 shrink-0 overflow-hidden md:w-56"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={`reel-${reel.id}`}
              data-strk-img={reel.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="450"
              src={SVG_PLACEHOLDER}
              className="aspect-[9/16] w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-serif text-lg italic leading-snug text-ivory">
                “{reel.caption}”
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
