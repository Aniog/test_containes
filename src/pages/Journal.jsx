import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
const Journal = () => {
  const containerRef = useRef(null);
  useEffect(() => {
     return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);
  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif mb-12 uppercase tracking-wider text-center">The Journal</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {[1, 2].map(i => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[16/9] mb-6 bg-stone-100 overflow-hidden">
                <img 
                  data-strk-img-id={`journal-img-${i}`}
                  data-strk-img="gold jewelry lifestyle aesthetic editorial"
                  data-strk-img-ratio="16/9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Journal Post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gold mb-2">Summer 2026</p>
              <h2 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors">How to Layer Your Golden Essentials</h2>
              <p className="font-light text-stone-500 leading-relaxed">Discover the art of effortless layering with our signature necklaces and charms.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Journal;
