import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 1, caption: "Everyday gold", query: "woman wearing gold earrings close up warm light" },
  { id: 2, caption: "Layered necklaces", query: "woman layered gold necklaces neck close up" },
  { id: 3, caption: "Huggie love", query: "woman gold huggie earrings profile shot" },
  { id: 4, caption: "Gift moment", query: "hands opening jewelry gift box gold" },
  { id: 5, caption: "Date night", query: "woman gold drop earrings evening look" },
  { id: 6, caption: "Stacking rings", query: "woman hand gold rings stacking minimal" },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 font-light">Worn by You</h2>
          <p className="mt-3 text-sm text-stone-500">Real moments, real gold</p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map((reel) => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer">
              <img
                data-strk-img-id={`ugc-reel-${reel.id}-img-x9k`}
                data-strk-img={`[ugc-reel-${reel.id}-caption]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={`ugc-reel-${reel.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
