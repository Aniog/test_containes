import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const ugcItems = [
  {
    id: "ugc-1",
    imgId: "ugc-reel-1-a1b2c3",
    titleId: "ugc-caption-1",
    caption: "Golden hour, golden ears",
    handle: "@sofia.m",
  },
  {
    id: "ugc-2",
    imgId: "ugc-reel-2-d4e5f6",
    titleId: "ugc-caption-2",
    caption: "My everyday stack",
    handle: "@claire.w",
  },
  {
    id: "ugc-3",
    imgId: "ugc-reel-3-g7h8i9",
    titleId: "ugc-caption-3",
    caption: "Gift from myself",
    handle: "@natalie.r",
  },
  {
    id: "ugc-4",
    imgId: "ugc-reel-4-j1k2l3",
    titleId: "ugc-caption-4",
    caption: "Layered & luminous",
    handle: "@emma.t",
  },
  {
    id: "ugc-5",
    imgId: "ugc-reel-5-m4n5o6",
    titleId: "ugc-caption-5",
    caption: "Brunch-ready always",
    handle: "@julia.k",
  },
  {
    id: "ugc-6",
    imgId: "ugc-reel-6-p7q8r9",
    titleId: "ugc-caption-6",
    caption: "The heirloom set arrived",
    handle: "@anna.b",
  },
];

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-warm-gray-pale py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <p className="font-inter text-xs tracking-widest uppercase text-gold mb-2">
          As Worn
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl text-espresso font-light">
          The Velmora Edit
        </h2>
        <p className="font-inter text-xs text-warm-gray mt-2 tracking-wide">
          Tag us @velmora to be featured
        </p>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 snap-start overflow-hidden group cursor-pointer"
            style={{ aspectRatio: "9/16" }}
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry worn on model close up`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={item.titleId}
                className="font-cormorant text-sm italic text-cream leading-tight"
              >
                {item.caption}
              </p>
              <p className="font-inter text-[10px] text-cream/60 mt-0.5 tracking-wide">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
