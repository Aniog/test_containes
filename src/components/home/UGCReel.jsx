import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";

export default function UGCReel() {
  const containerRef = useRef(null);

  // Trigger image loading
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const items = [
    { id: "ugc-1", caption: "Everyday effortless.", keyword: "gold huggie earrings worn on model" },
    { id: "ugc-2", caption: "The perfect stack.", keyword: "layered gold necklaces worn" },
    { id: "ugc-3", caption: "Morning light.", keyword: "gold rings hands coffee" },
    { id: "ugc-4", caption: "Golden hour glow.", keyword: "gold drop earrings worn sunset" },
    { id: "ugc-5", caption: "Subtle statements.", keyword: "minimalist gold jewelry worn aesthetic" },
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
        <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-[#2D2A26] mb-4">Seen on You</h2>
        <p className="font-sans text-[#8B857D] font-light text-sm">@velmorajewelry</p>
      </div>

      {/* Reel container - horizontal scroll */}
      <div className="flex overflow-x-auto gap-4 px-4 md:px-8 pb-8 hide-scrollbar snap-x snap-mandatory">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className="relative flex-none w-[70vw] sm:w-[40vw] md:w-[25vw] max-w-sm aspect-[9/16] rounded-sm overflow-hidden snap-center group cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
            <img
              src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
              alt="Customer photo"
              data-strk-img-id={`ugc-img-${item.id}`}
              data-strk-img={`[ugc-title] ${item.keyword}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
              <p className="font-serif text-white text-lg lg:text-xl drop-shadow-md">
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
