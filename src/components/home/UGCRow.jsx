import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const ugcItems = [
  {
    id: "ugc-1",
    caption: "My everyday stack",
    handle: "@sofia.m",
    imgId: "ugc-img-1-a1b2c3",
    titleId: "ugc-title-1",
    captionId: "ugc-caption-1",
  },
  {
    id: "ugc-2",
    caption: "The perfect gift",
    handle: "@claire.w",
    imgId: "ugc-img-2-d4e5f6",
    titleId: "ugc-title-2",
    captionId: "ugc-caption-2",
  },
  {
    id: "ugc-3",
    caption: "Obsessed with these huggies",
    handle: "@nadia.k",
    imgId: "ugc-img-3-g7h8i9",
    titleId: "ugc-title-3",
    captionId: "ugc-caption-3",
  },
  {
    id: "ugc-4",
    caption: "Wearing it everywhere",
    handle: "@emma.r",
    imgId: "ugc-img-4-j1k2l3",
    titleId: "ugc-title-4",
    captionId: "ugc-caption-4",
  },
  {
    id: "ugc-5",
    caption: "Gold is always the answer",
    handle: "@luna.b",
    imgId: "ugc-img-5-m4n5o6",
    titleId: "ugc-title-5",
    captionId: "ugc-caption-5",
  },
  {
    id: "ugc-6",
    caption: "Gifted myself, no regrets",
    handle: "@zoe.t",
    imgId: "ugc-img-6-p7q8r9",
    titleId: "ugc-title-6",
    captionId: "ugc-caption-6",
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-ivory-dark py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">
          As Seen On
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light">
          The Velmora Community
        </h2>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: "9/16" }}
          >
            {/* Image */}
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] [${item.titleId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p id={item.captionId} className="font-serif text-sm text-ivory italic font-light leading-snug mb-1">
                "{item.caption}"
              </p>
              <span id={item.titleId} className="font-sans text-[10px] text-ivory/60 uppercase tracking-widest">
                {item.handle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
