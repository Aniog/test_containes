import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReel = () => {
  const containerRef = useRef(null);

  const posts = [
    { id: 1, caption: "Golden Hour Glow", query: "woman wearing gold earrings sunlight" },
    { id: 2, caption: "The Perfect Layer", query: "woman wearing layered gold necklaces editorial" },
    { id: 3, caption: "Effortless Elegance", query: "woman wearing gold huggies lifestyle" },
    { id: 4, caption: "Treasured Moments", query: "hand holding gold necklace aesthetic" },
    { id: 5, caption: "Daily Luxuries", query: "jewelry box gold pieces closeup" },
    { id: 6, caption: "Statement Details", query: "woman profile wearing gold jewelry" },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-parchment overflow-hidden">
      <div className="container-custom mb-12">
        <h2 className="text-3xl font-serif">As Seen on You</h2>
        <p className="text-stone-500 text-sm mt-2">Tag @VELMORA for a chance to be featured.</p>
      </div>

      <div className="flex gap-4 px-4 md:px-8 lg:px-12 overflow-x-auto no-scrollbar pb-8">
        {posts.map((post) => (
          <div key={post.id} className="relative w-72 md:w-80 shrink-0 aspect-[9/16] bg-stone-muted group overflow-hidden">
            <img
              data-strk-img-id={`ugc-${post.id}`}
              data-strk-img={post.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-serif italic text-lg leading-tight animate-[fade-in_1s_ease-out]">
                "{post.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
