import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReels = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const reels = [
    { id: 1, caption: 'Everyday Essentials' },
    { id: 2, caption: 'Golden Hour Glow' },
    { id: 3, caption: 'The Perfect Gift' },
    { id: 4, caption: 'Minimalist Magic' },
    { id: 5, caption: 'Layered Luxury' },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-xl font-serif tracking-widest uppercase border-l-2 border-gold-400 pl-4">As Seen On You</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-8 no-scrollbar snap-x">
        {reels.map((reel) => (
          <div key={reel.id} className="flex-none w-[280px] aspect-[9/16] bg-gray-200 relative group overflow-hidden snap-start">
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] jewelry worn on model lifestyle`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              alt="UGC Content"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6">
              <p id={`ugc-caption-${reel.id}`} className="text-white font-serif italic text-lg tracking-wide">
                "{reel.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
