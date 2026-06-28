import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeUGC = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const ugcPosts = [
    { id: 1, caption: "Golden Hour Glow", handle: "@emma.style" },
    { id: 2, caption: "Everyday Layers", handle: "@sarah_j" },
    { id: 3, caption: "Minimalist Dream", handle: "@jewelrylove" },
    { id: 4, caption: "Evening Elegance", handle: "@sophie.m" },
    { id: 5, caption: "Perfect Gift", handle: "@laura_v" },
    { id: 6, caption: "Gold Stacks", handle: "@grace.c" },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-brand-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div className="space-y-2">
          <h2 id="ugc-title" className="text-3xl font-serif">Worn by You</h2>
          <p className="text-xs font-sans uppercase tracking-widest text-muted">Tag #VELMORA to be featured</p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden gap-4 px-6 md:px-12 pb-8 no-scrollbar scroll-smooth"
      >
        {ugcPosts.map((post) => (
          <div 
            key={post.id} 
            className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] relative group overflow-hidden bg-white shadow-sm"
          >
            <img
              data-strk-img-id={`ugc-${post.id}`}
              data-strk-img={`[ugc-title] [ugc-caption-${post.id}] customer wearing gold jewelry lifestyle`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'%3E%3C/svg%3E"
              alt={`UGC content by ${post.handle}`}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p 
                id={`ugc-caption-${post.id}`}
                className="font-serif text-lg mb-1"
              >
                {post.caption}
              </p>
              <p className="font-sans text-[10px] uppercase tracking-widest opacity-80">
                {post.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default HomeUGC;