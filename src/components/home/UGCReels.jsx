import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { UGC_REELS } from "@/lib/products";

export default function UGCReels() {
  const containerRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="section bg-editorial-alt"
      aria-label="Worn by you"
    >
      <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="eyebrow mb-4">Worn by You</p>
          <h2 className="font-display text-cocoa-900 text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em]">
            <em className="italic font-normal">Quiet</em> gold, real lives
          </h2>
          <p className="mt-3 text-taupe-500 text-sm">
            #VelmoraOnYou · Tag your moments
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={stripRef}
        className="no-scrollbar overflow-x-auto overflow-y-hidden pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <ul className="flex gap-3 md:gap-5 px-5 md:px-8 lg:px-12">
          {UGC_REELS.map((reel) => (
            <li
              key={reel.id}
              className="relative flex-shrink-0 w-[180px] sm:w-[210px] md:w-[240px] aspect-[9/16] rounded-sm overflow-hidden bg-ivory-100 group"
              style={{ scrollSnapAlign: "start" }}
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imageId}
                data-strk-img={reel.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              {/* gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(31,26,23,0) 45%, rgba(31,26,23,0.65) 100%)",
                }}
              />
              {/* play indicator */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-ivory-50/20 backdrop-blur-sm flex items-center justify-center">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  className="text-ivory-50 ml-0.5"
                  fill="currentColor"
                >
                  <path d="M2 1.5v7l6-3.5z" />
                </svg>
              </div>
              {/* caption */}
              <p
                id={`ugc-caption-${reel.id}`}
                className="absolute left-3 right-3 bottom-3 font-display text-ivory-50 text-lg leading-tight italic"
              >
                {reel.caption}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
