import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/ui/Reveal";

const REELS = [
  {
    id: "reel-1",
    handle: "@maya.rose",
    caption: "Ear stack, in gold.",
    imgId: "reel-maya-rose",
    titleId: "reel-title-maya",
    captionId: "reel-cap-maya",
  },
  {
    id: "reel-2",
    handle: "@elenavint",
    caption: "First date huggies.",
    imgId: "reel-elena",
    titleId: "reel-title-elena",
    captionId: "reel-cap-elena",
  },
  {
    id: "reel-3",
    handle: "@noa.studio",
    caption: "Layered, never loud.",
    imgId: "reel-noa",
    titleId: "reel-title-noa",
    captionId: "reel-cap-noa",
  },
  {
    id: "reel-4",
    handle: "@aria.sundays",
    caption: "The everyday necklace.",
    imgId: "reel-aria",
    titleId: "reel-title-aria",
    captionId: "reel-cap-aria",
  },
  {
    id: "reel-5",
    handle: "@june.franklin",
    caption: "Gifted, kept forever.",
    imgId: "reel-june",
    titleId: "reel-title-june",
    captionId: "reel-cap-june",
  },
  {
    id: "reel-6",
    handle: "@sofia.daily",
    caption: "A cuff, day to night.",
    imgId: "reel-sofia",
    titleId: "reel-title-sofia",
    captionId: "reel-cap-sofia",
  },
  {
    id: "reel-7",
    handle: "@the.mirae",
    caption: "Quiet gold, big feeling.",
    imgId: "reel-mirae",
    titleId: "reel-title-mirae",
    captionId: "reel-cap-mirae",
  },
];

function ReelCard({ reel, idx }) {
  return (
    <Reveal delay={idx * 60} className="snap-start flex-shrink-0">
      <div className="relative w-[220px] sm:w-[240px] md:w-[260px] aspect-[9/16] overflow-hidden bg-ivory-200 group cursor-pointer">
        <img
          alt={`${reel.handle} — ${reel.caption}`}
          data-strk-img-id={reel.imgId}
          data-strk-img={`[${reel.captionId}] [${reel.titleId}] [reel-strip-heading]`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="540"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-elegant group-hover:scale-[1.04]"
        />
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-espresso-900/85 via-espresso-900/30 to-transparent pointer-events-none" aria-hidden="true" />
        {/* Reel play marker */}
        <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2 py-1 bg-ivory-50/15 backdrop-blur-sm border border-ivory-50/20 text-ivory-50 text-[10px] uppercase tracking-[0.22em]">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          Reel
        </div>
        {/* Caption */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p
            id={reel.captionId}
            className="font-serif italic text-ivory-50 text-xl leading-snug text-balance"
          >
            "{reel.caption}"
          </p>
          <p
            id={reel.titleId}
            className="mt-2 text-[10px] uppercase tracking-[0.28em] text-ivory-50/80"
          >
            {reel.handle}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function ReelStrip() {
  const sectionRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-ivory-50 border-y border-hairline"
      aria-labelledby="reel-strip-heading"
    >
      <div className="container-x pt-20 md:pt-28 pb-12">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 max-w-3xl md:max-w-none">
          <div>
            <p className="eyebrow">Worn by you</p>
            <h2
              id="reel-strip-heading"
              className="h-display mt-3 text-display-md text-espresso-900"
            >
              From the studio to your day.
            </h2>
          </div>
          <p className="text-espresso-500 text-[15px] leading-relaxed md:max-w-sm">
            Real wear, real light — a scroll of how our community styles Velmora.
            Tag <span className="text-espresso-900">@velmora</span> to be featured.
          </p>
        </Reveal>
      </div>

      {/* Horizontal scroller — bleeds off the page edges */}
      <div className="overflow-x-auto no-scrollbar pb-20">
        <div className="flex gap-5 md:gap-6 px-5 sm:px-8 lg:px-12 snap-x snap-mandatory">
          {REELS.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} idx={i} />
          ))}
          <div className="flex-shrink-0 w-2" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
