import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const ugcItems = [
    { id: 'ugc-1', caption: '"My everyday essentials" — @sarah.m', query: 'gold jewelry ear closeup woman' },
    { id: 'ugc-2', caption: '"The perfect gift" — @emma.l', query: 'gold necklace woman elegant' },
    { id: 'ugc-3', caption: '"Obsessed with these huggies" — @jess.r', query: 'gold huggie earrings ear' },
    { id: 'ugc-4', caption: '"Layered to perfection" — @mia.k', query: 'layered gold necklaces woman' },
    { id: 'ugc-5', caption: '"Date night ready" — @ava.w', query: 'gold drop earrings woman evening' },
    { id: 'ugc-6', caption: '"Stacked & styled" — @lily.c', query: 'gold ear stack jewelry woman' },
  ];

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-velmora-gold text-xs tracking-super-wide uppercase mb-2">As Worn By You</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-velmora-base">The Velmora Edit</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 sm:w-56 snap-start"
            >
              <div className="relative aspect-[9/16] bg-velmora-base/10 overflow-hidden rounded-sm">
                {/* Background Image */}
                <div
                  className="absolute inset-0"
                  data-strk-bg-id={item.id}
                  data-strk-bg={item.query}
                  data-strk-bg-ratio="9x16"
                  data-strk-bg-width="400"
                />

                {/* Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-base/80 via-velmora-base/40 to-transparent p-4 pt-12">
                  <p className="font-serif text-white text-sm italic leading-relaxed">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCSection;
