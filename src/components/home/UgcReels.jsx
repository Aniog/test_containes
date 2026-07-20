import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

const UgcReels = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      import('@/strk-img-config.json').then(config => {
        window.ImageHelper.loadImages(config.default || config, containerRef.current);
      }).catch(() => {});
    }
  }, []);

  const reels = [
    { id: 1, caption: "Everyday elegance with the Golden Sphere Huggies." },
    { id: 2, caption: "Layering the Majestic Flora necklace. ✨" },
    { id: 3, caption: "Ear cuff obsession: Vivid Aura Jewels." },
    { id: 4, caption: "Unboxing the Royal Heirloom Set." },
    { id: 5, caption: "Coffee dates and Amber Lace Earrings." },
  ];

  return (
    <section ref={containerRef} className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-10 text-center">
        <h2 className="text-2xl font-serif tracking-widest uppercase mb-3">Styled By You</h2>
        <p className="text-muted text-sm">Tag @velmorajewelry to be featured.</p>
      </div>

      <div className="flex overflow-x-auto gap-4 px-6 lg:px-12 pb-8 no-scrollbar snap-x">
        {reels.map((reel) => (
          <div 
            key={reel.id} 
            className="relative min-w-[240px] md:min-w-[280px] aspect-[9/16] bg-secondary rounded-lg overflow-hidden snap-start cursor-pointer group"
          >
            <img 
              src={`https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=1066&q=80`}
              alt="UGC Reel"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 pointer-events-none" />
            
            <div className="absolute top-4 right-4 text-white opacity-80 group-hover:opacity-100 transition-opacity">
              <Play className="w-6 h-6 fill-white" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif text-lg leading-snug drop-shadow-md">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcReels;
