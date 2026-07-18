import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { REELS } from "@/data/products";

export default function HomeReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-28 bg-background border-t border-hairline"
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 mb-10 lg:mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <p className="eyebrow mb-3">As Seen On</p>
            <h2 id="home-reel-title" className="font-serif text-4xl sm:text-5xl text-ivory">
              Worn by you
            </h2>
          </div>
          <p id="home-reel-subtitle" className="text-sm text-ivory-muted max-w-sm">
            Tag <span className="text-ivory">@velmora.fine</span> for a chance to be featured.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hidden -mx-6 lg:-mx-10">
        <div className="flex gap-4 lg:gap-6 px-6 lg:px-10 pb-4">
          {REELS.map((reel) => (
            <figure
              key={reel.id}
              className="relative shrink-0 w-[230px] sm:w-[260px] lg:w-[300px] aspect-[9/16] overflow-hidden bg-surface group"
            >
              <img
                alt={`${reel.handle} — ${reel.caption}`}
                data-strk-img-id={`reel-${reel.id}`}
                data-strk-img={`[${reel.id}-caption] ${reel.imageQuery}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/70" />
              <figcaption
                id={`${reel.id}-caption`}
                className="absolute bottom-0 left-0 right-0 p-5 text-ivory"
              >
                <p className="font-serif text-xl leading-tight mb-1 italic">
                  "{reel.caption}"
                </p>
                <p className="text-[11px] font-sans uppercase tracking-button text-ivory-muted">
                  {reel.handle}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
