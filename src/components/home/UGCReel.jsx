import React, { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  // Simulated UGC content - in real app would come from backend
  const ugcItems = [
    { id: 1, caption: 'My new favorite earrings! 💫', location: 'New York', likes: 234 },
    { id: 2, caption: 'Golden hour with my Velmora set', location: 'Paris', likes: 567 },
    { id: 3, caption: 'Everyday luxury ✨', location: 'London', likes: 189 },
    { id: 4, caption: 'Gifted myself and I’m obsessed', location: 'Tokyo', likes: 423 },
    { id: 5, caption: 'Date night ready 💕', location: 'Milan', likes: 312 },
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Worn With Love</h2>
          <p className="text-charcoal-600 max-w-2xl mx-auto">
            Real moments, real women. See how Velmora becomes part of your story.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[280px] md:w-[320px] relative group cursor-pointer"
            >
              {/* 9:16 Vertical Card */}
              <div className="relative aspect-[9/16] overflow-hidden rounded-sm shadow-soft">
                {/* Placeholder for UGC image */}
                <div
                  className="w-full h-full bg-gradient-to-b from-gold-100 to-gold-300 flex items-center justify-center"
                  data-strk-bg-id={`ugc-${item.id}-bg`}
                  data-strk-bg={`[ugc-caption-${item.id}] Velmora jewelry fashion`}
                  data-strk-bg-ratio="9x16"
                  data-strk-bg-width="720"
                >
                  <span className="text-gold-600/30 text-4xl">📸</span>
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p
                    id={`ugc-caption-${item.id}`}
                    className="text-white text-sm font-serif italic mb-1"
                  >
                    {item.caption}
                  </p>
                  <div className="flex items-center justify-between text-white/80 text-xs">
                    <span>{item.location}</span>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3 fill-current" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;