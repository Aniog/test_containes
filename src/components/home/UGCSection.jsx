import React, { useRef } from "react";
import { ugcItems } from "@/data/products";
import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function UGCSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-14 sm:py-20 bg-velmora-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl text-center">
          Styled by You
        </h2>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 w-max mx-auto">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-40 sm:w-48 h-[280px] sm:h-[340px] flex-shrink-0 rounded-lg overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-stone-200"
                data-strk-bg-id={`ugc-bg-${item.id}`}
                data-strk-bg={`[ugc-caption-${item.id}] [ugc-author-${item.id}] gold jewelry ear neck close up warm`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                <p
                  id={`ugc-caption-${item.id}`}
                  className="font-serif text-sm sm:text-base italic mb-1"
                >
                  {item.caption}
                </p>
                <p
                  id={`ugc-author-${item.id}`}
                  className="text-[10px] sm:text-xs opacity-80 tracking-wide"
                >
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
