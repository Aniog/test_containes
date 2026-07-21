import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import StrkImage from "@/components/ui/StrkImage";

const REELS = [
  {
    id: "reel-ear-stack-1",
    query: "velmora gold ear stack on model",
    ratio: "9x16",
    width: 600,
    caption: "Morning rituals · The ear stack",
    handle: "@noor.habibi",
  },
  {
    id: "reel-necklace-1",
    query: "velmora floral crystal necklace on neck",
    ratio: "9x16",
    width: 600,
    caption: "Flora Nectar, in daylight",
    handle: "@livia.jae",
  },
  {
    id: "reel-huggies-1",
    query: "velmora gold huggie hoop earrings close up",
    ratio: "9x16",
    width: 600,
    caption: "The huggie you'll never take off",
    handle: "@maya.rk",
  },
  {
    id: "reel-set-1",
    query: "velmora gold jewelry gift set velvet box",
    ratio: "9x16",
    width: 600,
    caption: "Heirloom, unboxed",
    handle: "@elenavelasquez",
  },
  {
    id: "reel-ear-cuff-1",
    query: "velmora gold ear cuff crystal ear model",
    ratio: "9x16",
    width: 600,
    caption: "Vivid Aura · first look",
    handle: "@aria.ko",
  },
  {
    id: "reel-filigree-1",
    query: "velmora gold filigree drop earrings",
    ratio: "9x16",
    width: 600,
    caption: "Filigree in motion",
    handle: "@sofia.mb",
  },
  {
    id: "reel-stack-2",
    query: "velmora demi fine gold jewelry layered on model",
    ratio: "9x16",
    width: 600,
    caption: "The everyday stack",
    handle: "@rinaaaa.x",
  },
];

export default function UGCReels() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 sm:py-24 bg-ivory-50"
      style={{ backgroundColor: "#F2EBE0" }}
    >
      <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <p className="eyebrow mb-3">@velmora · In the Wild</p>
            <h2
              id="reels-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso"
            >
              Worn by you
            </h2>
          </div>
          <p
            id="reels-subtitle"
            className="max-w-sm text-sm text-mocha"
          >
            Real moments from our community. Tag #velmoramoment to be
            considered for the next edit.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex gap-4 sm:gap-5 px-5 sm:px-8 lg:px-12 pb-2 snap-x snap-mandatory">
          {REELS.map((r) => (
            <li
              key={r.id}
              className="snap-start flex-shrink-0 w-[58vw] sm:w-[220px] md:w-[240px] lg:w-[260px]"
            >
              <div className="relative group">
                <StrkImage
                  id={r.id}
                  query={`[reels-title] [reels-subtitle] ${r.query}`}
                  ratio={r.ratio}
                  width={r.width}
                  tone="dark"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(21,16,13,0.75) 100%)",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-4 text-ivory">
                  <p className="font-serif text-base sm:text-lg leading-snug">
                    {r.caption}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-ivory/70">
                    {r.handle}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
