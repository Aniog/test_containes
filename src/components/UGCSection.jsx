import React, { useRef } from 'react';
import { ugcPosts } from '../data/products';

const UGCSection = () => {
  const scrollRef = useRef(null);

  return (
    <section className="section-padding bg-[hsl(var(--velmora-cream))] overflow-hidden">
      <div className="container-responsive mb-8">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-center">
          #VelmoraStyle
        </h2>
      </div>

      {/* Horizontal Scroll */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto custom-scrollbar pb-4 px-4 md:px-8"
        style={{ scrollbarWidth: 'thin' }}
      >
        {ugcPosts.map((post) => (
          <div key={post.id} className="ugc-card flex-shrink-0">
            {/* Background Image */}
            <div
              className="absolute inset-0"
              data-strk-bg-id={`ugc-${post.id}`}
              data-strk-bg={post.dataStrkBg}
              data-strk-bg-ratio={post.dataStrkBgRatio}
              data-strk-bg-width={post.dataStrkBgWidth}
              style={{ 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundColor: '#d4c5b0'
              }}
            />

            {/* Caption Overlay */}
            <div className="ugc-caption">
              <p className="font-serif text-white text-lg italic">
                "{post.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCSection;
