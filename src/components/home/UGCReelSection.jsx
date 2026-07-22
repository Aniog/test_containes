import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { placeholderSrc } from "@/data/products";

const reels = [
  {
    id: "ugc-1",
    captionId: "ugc-caption-1",
    caption: "Morning light, golden hoops",
  },
  {
    id: "ugc-2",
    captionId: "ugc-caption-2",
    caption: "Layered necklaces for brunch",
  },
  {
    id: "ugc-3",
    captionId: "ugc-caption-3",
    caption: "Ear cuff stack of the day",
  },
  {
    id: "ugc-4",
    captionId: "ugc-caption-4",
    caption: "Gift-wrapped and ready",
  },
  {
    id: "ugc-5",
    captionId: "ugc-caption-5",
    caption: "Minimal huggies, maximum shine",
  },
  {
    id: "ugc-6",
    captionId: "ugc-caption-6",
    caption: "Date night sparkle",
  },
];

export function UGCReelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-10 md:py-14 bg-velmora-sand overflow-hidden" ref={containerRef}>
      <div className="px-4 sm:px-6 lg:px-10 mb-5 md:mb-7">
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-base">
          #VelmoraWomen
        </h2>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 sm:px-6 lg:px-10 pb-2 hide-scrollbar snap-x snap-mandatory">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[170px] md:w-[220px] aspect-[9/16] snap-start overflow-hidden group"
          >
            <img
              alt="Customer wearing Velmora jewelry"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id={reel.id}
              data-strk-img={`[${reel.captionId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={placeholderSrc}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-base/60 via-transparent to-transparent" />
            <p
              id={reel.captionId}
              className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm md:text-base leading-snug"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
