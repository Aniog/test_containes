import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const REELS_DATA = [
  { id: "ugc-1", caption: "Golden hour with Velvet Aura", query: "warm aesthetic woman wearing gold earrings ear stack close up vertical" },
  { id: "ugc-2", caption: "Everyday essentials", query: "woman neck with delicate gold necklaces layers lifestyle vertical" },
  { id: "ugc-3", caption: "The perfect gift", query: "opening jewelry box with gold huggie earrings aesthetic vertical" },
  { id: "ugc-4", caption: "Sunlight & Spheres", query: "model portrait with gold sphere huggies sunlight aesthetic vertical" },
  { id: "ugc-5", caption: "Editorial dreams", query: "high end jewelry photography gold necklace model vogue style vertical" },
  { id: "ugc-6", caption: "Minimal details", query: "hand holding gold filigree earrings delicate lighting vertical" },
];

const UGCReels = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 bg-secondary/50 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-xs uppercase tracking-[0.3em] font-sans font-medium text-muted-foreground mb-4">Seen on you</h2>
          <h3 className="text-3xl font-serif italic">Velmora Journal</h3>
        </div>
        <a href="#" className="hidden md:block text-xs uppercase tracking-widest border-b border-muted-foreground pb-1">Follow @Velmora</a>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 px-6 lg:px-12 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {REELS_DATA.map((reel) => (
          <div key={reel.id} className="relative min-w-[200px] md:min-w-[280px] aspect-[9/16] overflow-hidden group">
            <img
              data-strk-img-id={reel.id}
              data-strk-img={reel.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-serif italic text-white/90 leading-snug">
                  {reel.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
