import React, { useRef, useEffect } from 'react';
import { Play, Heart } from 'lucide-react';

export default function UGCReelRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      const { ImageHelper } = await import('@strikingly/sdk');
      const config = await import('../../strk-img-config.json');
      if (containerRef.current) {
        ImageHelper.loadImages(config.default, containerRef.current);
      }
    };
    loadImages();
  }, []);

  const ugcItems = [
    { id: 'ugc-1', caption: 'Everyday elegance', query: 'gold jewelry worn on ear elegant style' },
    { id: 'ugc-2', caption: 'Layered perfection', query: 'gold necklace layered on neck' },
    { id: 'ugc-3', caption: 'Minimalist vibes', query: 'delicate gold huggie earrings' },
    { id: 'ugc-4', caption: 'Golden hour glow', query: 'gold jewelry warm lighting model' },
    { id: 'ugc-5', caption: 'Stacked & styled', query: 'multiple gold rings stacked elegant' },
    { id: 'ugc-6', caption: 'Timeless beauty', query: 'vintage style gold earrings model' },
  ];

  return (
    <section className="py-16 bg-velmora-cream" ref={containerRef}>
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">
            #VelmoraStyle
          </h2>
          <p className="text-velmora-warmGray text-sm uppercase tracking-widest">
            Shop the look
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Row */}
      <div className="overflow-x-auto scrollbar-hide pb-6">
        <div className="flex gap-4 px-4 md:px-8" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-64 h-96 rounded-lg overflow-hidden cursor-pointer group"
              style={{ aspectRatio: '9/16' }}
            >
              <img
                data-strk-img-id={`ugc-${index + 1}`}
                data-strk-img={item.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/70 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-serif text-lg italic">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Play Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                            w-12 h-12 bg-white/80 rounded-full flex items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Play size={20} className="text-velmora-charcoal ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
