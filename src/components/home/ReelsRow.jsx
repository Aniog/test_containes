import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const REELS = [
  {
    id: "reel-1",
    query: "woman ear gold hoop earrings closeup warm tone",
    caption: "Golden hours",
    handle: "@noor.styles",
  },
  {
    id: "reel-2",
    query: "woman neck gold necklace pendant on bare skin",
    caption: "Worn close",
    handle: "@aria.daily",
  },
  {
    id: "reel-3",
    query: "stack of gold rings on hand warm soft light",
    caption: "Layered, never loud",
    handle: "@maeve.co",
  },
  {
    id: "reel-4",
    query: "gold bracelet on wrist linen background minimal",
    caption: "The everyday cuff",
    handle: "@thevelmoraedit",
  },
  {
    id: "reel-5",
    query: "gold drop earrings on model warm closeup editorial",
    caption: "Soft, but present",
    handle: "@june.studio",
  },
  {
    id: "reel-6",
    query: "woman gold jewelry portrait warm light film grain",
    caption: "Quiet gold",
    handle: "@noor.styles",
  },
];

function ReelCard({ reel, index }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [reel.id, reel.query]);

  return (
    <div className="snap-start flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px]">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-ink"
        style={{ aspectRatio: "9 / 16" }}
      >
        <img
          alt={reel.caption}
          data-strk-img-id={reel.id}
          data-strk-img={reel.query}
          data-strk-img-ratio="9x16"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/70" />
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-ivory">
          <span className="text-[10px] tracking-eyebrow uppercase opacity-90">
            0{index + 1}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] tracking-eyebrow uppercase opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-ivory" />
            Reel
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-ivory">
          <p className="font-serif text-2xl leading-tight">{reel.caption}</p>
          <p className="mt-1 text-[11px] tracking-eyebrow uppercase text-ivory/80">
            {reel.handle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ReelsRow() {
  return (
    <section className="bg-ivory-soft border-y border-hairline">
      <div className="container-page py-16 md:py-20">
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <p className="eyebrow text-taupe mb-3">From the Community</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] text-ink">
              Worn by you, beautifully
            </h2>
          </div>
          <p className="text-sm text-taupe max-w-sm">
            Tag <span className="text-ink">@velmora</span> for a chance to be
            featured.
          </p>
        </div>

        <div className="-mx-6 md:-mx-10 lg:-mx-16">
          <div className="flex gap-4 overflow-x-auto px-6 md:px-10 lg:px-16 no-scrollbar snap-x snap-mandatory pb-4">
            {REELS.map((reel, i) => (
              <ReelCard key={reel.id} reel={reel} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
