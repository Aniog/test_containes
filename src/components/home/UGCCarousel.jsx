import { useRef, useEffect } from "react";
import { ugcItems } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function UGCCarousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="text-center mb-10 px-5">
        <p className="text-velmora-gold text-xs tracking-[0.3em] uppercase mb-3">
          #VelmoraStyle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream font-light">
          As Seen On You
        </h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto mt-5" />
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-5 md:px-8 pb-4" style={{ minWidth: "max-content" }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-44 md:w-52 aspect-[9/16] flex-shrink-0 overflow-hidden group cursor-pointer"
            >
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}] jewelry on woman`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-base text-velmora-cream/90 italic leading-snug"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
