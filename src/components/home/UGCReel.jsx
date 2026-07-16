import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const ugcItems = [
  {
    id: "ugc-1",
    caption: "My everyday stack",
    handle: "@sofia.m",
    imgId: "ugc-reel-1-a1b2c3",
    titleId: "ugc-title-1",
    descId: "ugc-desc-1",
    desc: "gold huggie earrings stacked on ear close up",
  },
  {
    id: "ugc-2",
    caption: "The perfect gift",
    handle: "@claire.w",
    imgId: "ugc-reel-2-d4e5f6",
    titleId: "ugc-title-2",
    descId: "ugc-desc-2",
    desc: "gold necklace worn on neck editorial portrait",
  },
  {
    id: "ugc-3",
    caption: "Obsessed with these",
    handle: "@maya.r",
    imgId: "ugc-reel-3-g7h8i9",
    titleId: "ugc-title-3",
    descId: "ugc-desc-3",
    desc: "gold ear cuff crystal earring close up portrait",
  },
  {
    id: "ugc-4",
    caption: "Treat yourself",
    handle: "@anna.k",
    imgId: "ugc-reel-4-j1k2l3",
    titleId: "ugc-title-4",
    descId: "ugc-desc-4",
    desc: "gold filigree drop earrings worn woman portrait",
  },
  {
    id: "ugc-5",
    caption: "Gift set unboxing",
    handle: "@priya.s",
    imgId: "ugc-reel-5-m4n5o6",
    titleId: "ugc-title-5",
    descId: "ugc-desc-5",
    desc: "jewelry gift box gold earrings necklace set",
  },
  {
    id: "ugc-6",
    caption: "Layering goals",
    handle: "@emma.t",
    imgId: "ugc-reel-6-p7q8r9",
    titleId: "ugc-title-6",
    descId: "ugc-desc-6",
    desc: "layered gold necklaces worn woman neck close up",
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
              As Seen On
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
              The Velmora Community
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-inter text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Background image */}
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.caption}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-cormorant text-sm italic text-ivory leading-tight mb-0.5">
                "{item.caption}"
              </p>
              <p className="font-inter text-[10px] text-ivory/60 uppercase tracking-wider">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
