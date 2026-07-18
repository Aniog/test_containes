import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const reels = [
  {
    id: "reel-ear-stack",
    caption: "The Everyday Ear Stack",
    handle: "@maya.k",
    search: "gold ear stack huggies on woman ear editorial close-up",
  },
  {
    id: "reel-floral",
    caption: "Flora at the Collarbone",
    handle: "@noor.e",
    search: "gold floral crystal necklace on model editorial portrait",
  },
  {
    id: "reel-dome",
    caption: "Sundays in the Dome Huggies",
    handle: "@elena.r",
    search: "gold dome huggie earrings on model close-up editorial",
  },
  {
    id: "reel-set",
    caption: "The Heirloom Edit",
    handle: "@jules.m",
    search: "gold jewelry earring and necklace set on model editorial",
  },
  {
    id: "reel-cuff",
    caption: "A Whisper of Crystal",
    handle: "@aria.s",
    search: "gold crystal ear cuff on woman editorial portrait",
  },
  {
    id: "reel-pearl",
    caption: "Pearl Hours",
    handle: "@tessa.l",
    search: "gold pearl drop earrings on woman editorial portrait",
  },
];

export default function ReelStrip() {
  const ref = useRef(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={ref} className="bg-canvas border-y border-dune">
      <div className="max-w-editorial mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
              @velmora · Worn By You
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-espresso tracking-tight">
              In the Light
            </h2>
          </div>
          <p className="text-sm text-taupe max-w-sm">
            Tag <span className="text-espresso">#velmoraworn</span> for a chance to be featured.
          </p>
        </div>

        <div className="overflow-x-auto no-scrollbar -mx-6 md:-mx-10 px-6 md:px-10">
          <div className="flex gap-4 md:gap-5 pb-2">
            {reels.map((r) => (
              <article
                key={r.id}
                className="group relative flex-none w-[200px] md:w-[240px] aspect-[9/16] overflow-hidden bg-surface"
              >
                <img
                  alt={r.caption}
                  data-strk-img-id={`reel-${r.id}`}
                  data-strk-img={`[reel-caption-${r.id}] [reel-handle-${r.id}] gold jewelry on model`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover img-fade group-hover:scale-[1.03] duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/0 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    id={`reel-caption-${r.id}`}
                    className="font-serif text-canvas text-lg md:text-xl leading-snug tracking-tight"
                  >
                    {r.caption}
                  </p>
                  <p
                    id={`reel-handle-${r.id}`}
                    className="text-canvas/70 text-[11px] uppercase tracking-widest2 mt-2"
                  >
                    {r.handle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
