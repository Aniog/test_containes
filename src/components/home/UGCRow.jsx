import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Play } from 'lucide-react';

const ugcContent = [
  { id: '1', handle: '@emily_styles', caption: 'Everyday golden hour.' },
  { id: '2', handle: '@sarah.wears', caption: 'The perfect dainty stack.' },
  { id: '3', handle: '@jessicamoore', caption: 'Elevating the basics.' },
  { id: '4', handle: '@luxurylens', caption: 'Catching the light just right.' },
  { id: '5', handle: '@styledbyami', caption: 'My new signature pieces.' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-muted/30 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 mb-10">
        <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-center">Spotted in Velmora</h2>
        <p className="text-center text-muted-foreground mt-2">Tag us on Instagram @VelmoraJewelry</p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-4 px-4 md:px-8 pb-8 snap-x snap-mandatory hide-scrollbar">
        {ugcContent.map((post) => (
          <div 
            key={post.id} 
            className="relative flex-none w-[260px] md:w-[300px] aspect-[9/16] rounded-xl overflow-hidden snap-center group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-${post.id}`}
              data-strk-img={`[ugc-caption-${post.id}] [ugc-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={post.handle}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none" />
            
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="w-4 h-4 text-white fill-white" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-shadow-sm">
              <p className="font-medium text-sm mb-1">{post.handle}</p>
              <p id={`ugc-caption-${post.id}`} className="font-serif text-lg italic leading-tight">"{post.caption}"</p>
            </div>
          </div>
        ))}
      </div>
      
      <style dangerouslySetInlineStyle={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}