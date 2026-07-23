import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ugcItems } from "@/data/products";

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-10">
        <h2 className="section-title">As Seen On You</h2>
        <p className="section-subtitle mt-3">
          Real styles from the Velmora community
        </p>
      </div>

      <div className="overflow-x-auto pb-4 -mx-6 md:-mx-8 px-6 md:px-8 scrollbar-hide">
        <div className="flex gap-4 w-max">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-40 md:w-52 aspect-[9/16] bg-velmora-surface-elevated flex-shrink-0 overflow-hidden group"
            >
              <img
                alt={item.caption}
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-bg/80 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-3 right-3 font-serif text-sm text-velmora-text-primary italic"
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