import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useReveal } from "@/lib/useReveal.js";

const reels = [
  {
    id: "reel-1",
    imgId: "reel-ear-1-7a91",
    caption: "Sundown Stack",
    titleId: "reel-1-title",
    handle: "@maya.k",
  },
  {
    id: "reel-2",
    imgId: "reel-ear-2-5b21",
    caption: "First Pearl",
    titleId: "reel-2-title",
    handle: "@ines.w",
  },
  {
    id: "reel-3",
    imgId: "reel-neck-1-9c12",
    caption: "Flora, Layered",
    titleId: "reel-3-title",
    handle: "@noor.e",
  },
  {
    id: "reel-4",
    imgId: "reel-ear-3-3a4d",
    caption: "Sunday Huggies",
    titleId: "reel-4-title",
    handle: "@cleo.r",
  },
  {
    id: "reel-5",
    imgId: "reel-neck-2-2f8e",
    caption: "Quiet Gold",
    titleId: "reel-5-title",
    handle: "@ada.m",
  },
  {
    id: "reel-6",
    imgId: "reel-ear-4-8c7b",
    caption: "Brunch, Always",
    titleId: "reel-6-title",
    handle: "@lila.b",
  },
];

export default function ReelsStrip() {
  const ref = useReveal();
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, scrollerRef.current);
  }, []);

  return (
    <section className="bg-ink-900 text-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
        <div ref={ref} className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p className="eyebrow text-cream-200/60">@velmora · As Worn By You</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-cream-100">
              In the Quiet Hours
            </h2>
          </div>
          <p className="text-sm text-cream-200/65 max-w-md">
            Tag <span className="text-gold-300">@velmora</span> for a chance to be featured — or simply to share how you wear yours.
          </p>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="overflow-x-auto no-scrollbar pl-4 sm:pl-6 lg:pl-10"
        aria-label="Customer photos"
      >
        <ul className="flex gap-4 sm:gap-5 pr-4 sm:pr-6 lg:pr-10">
          {reels.map((r) => (
            <li
              key={r.id}
              className="relative flex-none w-[58vw] sm:w-[260px] md:w-[280px] aspect-[9/16] overflow-hidden bg-ink-800 group"
            >
              <img
                alt={r.caption}
                data-strk-img-id={r.imgId}
                data-strk-img={`[${r.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* Gradient overlay */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,11,8,0) 40%, rgba(15,11,8,0.55) 80%, rgba(15,11,8,0.85) 100%)",
                }}
              />
              {/* Play icon */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream-100/15 backdrop-blur-sm border border-cream-100/30 flex items-center justify-center text-cream-100">
                <Play className="w-3.5 h-3.5 fill-cream-100" strokeWidth={0} />
              </div>
              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3
                  id={r.titleId}
                  className="font-serif text-2xl sm:text-[28px] leading-tight text-cream-100"
                >
                  {r.caption}
                </h3>
                <p className="mt-1 text-[11px] tracking-[0.22em] uppercase text-cream-200/70">
                  {r.handle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
