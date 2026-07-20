import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const ugcItems = [
  {
    id: "ugc-1",
    caption: "My everyday gold",
    sub: "Vivid Aura Ear Cuff",
    imgId: "ugc-img-1-a1b2c3",
    titleId: "ugc-title-1",
    captionId: "ugc-caption-1",
  },
  {
    id: "ugc-2",
    caption: "The perfect gift",
    sub: "Royal Heirloom Set",
    imgId: "ugc-img-2-d4e5f6",
    titleId: "ugc-title-2",
    captionId: "ugc-caption-2",
  },
  {
    id: "ugc-3",
    caption: "Stacked & styled",
    sub: "Golden Sphere Huggies",
    imgId: "ugc-img-3-g7h8i9",
    titleId: "ugc-title-3",
    captionId: "ugc-caption-3",
  },
  {
    id: "ugc-4",
    caption: "Florals forever",
    sub: "Majestic Flora Nectar",
    imgId: "ugc-img-4-j1k2l3",
    titleId: "ugc-title-4",
    captionId: "ugc-caption-4",
  },
  {
    id: "ugc-5",
    caption: "Lace & gold",
    sub: "Amber Lace Earrings",
    imgId: "ugc-img-5-m4n5o6",
    titleId: "ugc-title-5",
    captionId: "ugc-caption-5",
  },
  {
    id: "ugc-6",
    caption: "Effortless elegance",
    sub: "Vivid Aura Jewels",
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
    <section className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="font-inter text-xs uppercase tracking-[0.12em] text-stone border-b border-stone pb-0.5 hover:text-espresso hover:border-espresso transition-colors hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-12 pb-2"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] [${item.titleId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.sub}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.captionId}
                className="font-cormorant text-base italic text-ivory leading-tight"
              >
                {item.caption}
              </p>
              <p
                id={item.titleId}
                className="font-inter text-[10px] uppercase tracking-[0.12em] text-ivory/70 mt-1"
              >
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
