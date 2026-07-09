import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ugcItems } from "@/data/products";

const P = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";
const imgCls = "w-full h-full object-cover";

// Static per-item images — literal data-strk-img-id required by the strk-img plugin
function UGCItemImage({ itemId, caption }) {
  if (itemId === "ugc-1")
    return <img data-strk-img-id="ugc-img-1-y7z8a9" data-strk-img="My everyday stack gold jewelry worn woman" data-strk-img-ratio="9x16" data-strk-img-width="400" src={P} alt={caption} className={imgCls} />;
  if (itemId === "ugc-2")
    return <img data-strk-img-id="ugc-img-2-b1c2d3" data-strk-img="The perfect gift gold jewelry present woman" data-strk-img-ratio="9x16" data-strk-img-width="400" src={P} alt={caption} className={imgCls} />;
  if (itemId === "ugc-3")
    return <img data-strk-img-id="ugc-img-3-e4f5g6" data-strk-img="Wearing the Aura cuff gold ear cuff woman" data-strk-img-ratio="9x16" data-strk-img-width="400" src={P} alt={caption} className={imgCls} />;
  if (itemId === "ugc-4")
    return <img data-strk-img-id="ugc-img-4-h7i8j9" data-strk-img="Flora Nectar moment floral necklace woman" data-strk-img-ratio="9x16" data-strk-img-width="400" src={P} alt={caption} className={imgCls} />;
  if (itemId === "ugc-5")
    return <img data-strk-img-id="ugc-img-5-k1l2m3" data-strk-img="Golden hour huggies gold earrings woman" data-strk-img-ratio="9x16" data-strk-img-width="400" src={P} alt={caption} className={imgCls} />;
  return null;
}

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-[11px] tracking-widest3 uppercase text-gold mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso">
              Real Women, Real Jewelry
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs tracking-widest uppercase text-stone border-b border-stone pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 rounded-none overflow-hidden"
            style={{ aspectRatio: "9/16", scrollSnapAlign: "start" }}
          >
            {/* UGC image */}
            <UGCItemImage itemId={item.id} caption={item.caption} />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={item.titleId}
                className="font-serif italic text-sm text-cream/90 leading-snug"
              >
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
