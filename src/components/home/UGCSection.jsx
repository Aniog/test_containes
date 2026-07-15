import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const ugcItems = [
  { id: "ugc-1", caption: "Daily gold moment" },
  { id: "ugc-2", caption: "Gifted with love" },
  { id: "ugc-3", caption: "My new favorite" },
  { id: "ugc-4", caption: "Sparkle in every step" },
  { id: "ugc-5", caption: "Layered perfection" },
  { id: "ugc-6", caption: "Minimal luxe" },
];

export default function UGCSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-velmora-bg-dark" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="text-xs tracking-widest uppercase text-velmora-gold">As Seen On</span>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text-light mt-2 font-light">
            Worn in Real Life
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto ugc-scroll pb-4">
        <div className="flex gap-4 px-4 md:px-8" style={{ minWidth: "max-content" }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 aspect-[9/16] bg-velmora-text/30 relative overflow-hidden group cursor-pointer"
            >
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[ugc-caption-${item.id}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-velmora-text-light italic"
              >
                @{item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}