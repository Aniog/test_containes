import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { Heart, Play } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

const REELS = [
  {
    id: "r1",
    handle: "@velmora",
    caption: "Stacked, layered, made for everyday.",
    query: "close-up of woman wearing gold huggie earrings and tiny studs editorial portrait vertical",
  },
  {
    id: "r2",
    handle: "@marigold",
    caption: "The Golden Sphere huggies, in the wild.",
    query: "side profile of woman with chunky gold dome huggie earring on ear editorial portrait vertical",
  },
  {
    id: "r3",
    handle: "@ainsley.r",
    caption: "Three ways to wear the Lace drops.",
    query: "woman with gold filigree drop earrings hair pulled back editorial portrait vertical",
  },
  {
    id: "r4",
    handle: "@velmora",
    caption: "Flora Nectar, in golden hour.",
    query: "close-up of floral crystal necklace on warm skin editorial golden hour portrait vertical",
  },
  {
    id: "r5",
    handle: "@noor.rae",
    caption: "Layering the Vivid Aura ear cuff.",
    query: "woman with single gold ear cuff on helix editorial portrait warm light vertical",
  },
  {
    id: "r6",
    handle: "@velmora",
    caption: "The Royal Heirloom, gift-ready.",
    query: "open suede gift box with gold jewelry set editorial top-down soft warm light vertical",
  },
  {
    id: "r7",
    handle: "@esther.k",
    caption: "Demi-fine, for every day.",
    query: "woman wearing layered gold necklaces smiling softly editorial portrait warm light vertical",
  },
];

function ReelCard({ reel, idx }) {
  return (
    <article className="relative aspect-[9/16] w-[200px] flex-shrink-0 overflow-hidden bg-bone sm:w-[230px] md:w-[260px]">
      <img
        alt={reel.caption}
        data-strk-img-id={`reel-${reel.id}-${idx}`}
        data-strk-img={`[${reel.caption}] ${reel.query}`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="520"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/80"
      />
      <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-cream/85 px-2.5 py-1 backdrop-blur">
        <Play className="h-2.5 w-2.5 fill-espresso text-espresso" />
        <span className="font-sans text-[9px] tracking-[0.28em] uppercase text-espresso">
          Reel
        </span>
      </div>
      <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-cream/15 text-cream backdrop-blur-sm">
        <Heart className="h-3.5 w-3.5" strokeWidth={1.25} />
      </div>
      <div className="absolute inset-x-4 bottom-4">
        <p className="font-serif text-[15px] italic leading-snug text-cream">
          &ldquo;{reel.caption}&rdquo;
        </p>
        <p className="mt-1.5 font-sans text-[10px] tracking-[0.28em] uppercase text-cream/70">
          {reel.handle}
        </p>
      </div>
    </article>
  );
}

export default function ReelStrip() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-espresso py-20 md:py-24">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p id="reel-eyebrow" className="eyebrow text-gold-soft">
              From the Community
            </p>
            <h2
              id="reel-title"
              className="display-lg mt-4 text-cream"
            >
              Worn by you
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hidden font-sans text-[12px] tracking-[0.28em] uppercase text-cream/80 underline underline-offset-[6px] decoration-cream/30 transition-colors hover:text-cream hover:decoration-gold-soft md:inline-block"
          >
            Follow @velmora
          </a>
        </div>
        <p
          id="reel-subtitle"
          className="mt-3 max-w-md font-serif text-[15px] italic text-cream/65"
        >
          Tag <span className="text-gold-soft">#velmoraworn</span> for a chance to be featured.
        </p>
      </div>

      <div className="mt-10 flex gap-4 overflow-x-auto px-6 pb-4 md:gap-5 md:px-10 lg:px-16 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {REELS.map((r, i) => (
          <ReelCard key={r.id} reel={r} idx={i} />
        ))}
      </div>
    </section>
  );
}
