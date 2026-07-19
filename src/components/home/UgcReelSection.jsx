import React from 'react';
import ProductImage from '@/components/ProductImage';

const reels = [
  { id: 'reel-1', caption: 'Layered for brunch', imgId: 'ugc-reel-1', titleId: 'ugc-title-1' },
  { id: 'reel-2', caption: 'Date night glow', imgId: 'ugc-reel-2', titleId: 'ugc-title-2' },
  { id: 'reel-3', caption: 'Everyday shine', imgId: 'ugc-reel-3', titleId: 'ugc-title-3' },
  { id: 'reel-4', caption: 'Gifting moment', imgId: 'ugc-reel-4', titleId: 'ugc-title-4' },
  { id: 'reel-5', caption: 'Soft gold layers', imgId: 'ugc-reel-5', titleId: 'ugc-title-5' },
  { id: 'reel-6', caption: 'Self-love treat', imgId: 'ugc-reel-6', titleId: 'ugc-title-6' },
];

export default function UgcReelSection() {
  return (
    <section className="py-14 md:py-20 bg-cream-50 border-y border-hairline">
      <div className="mx-auto px-5 md:px-8 lg:px-12 mb-8">
        <h2
          id="ugc-section-title"
          className="font-serif text-2xl md:text-4xl font-medium text-center"
        >
          Styled by You
        </h2>
        <p className="text-center text-sm text-warmgray-500 mt-2">
          @velmorafinejewelry
        </p>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto px-5 md:px-8 lg:px-12 pb-4 hide-scrollbar snap-x snap-mandatory">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[160px] md:w-[200px] aspect-[9/16] snap-start overflow-hidden group cursor-pointer"
          >
            <ProductImage
              imgId={reel.imgId}
              query={`[${reel.titleId}] [ugc-section-title] gold jewelry worn`}
              ratio="9x16"
              width={400}
              alt={reel.caption}
              className="transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg md:text-xl text-cream-50 leading-tight"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
