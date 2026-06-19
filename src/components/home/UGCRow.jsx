import React from 'react';
import { ugcCaptions } from '../../data/products';

const ugcItems = [
  { id: 'ugc-1', caption: ugcCaptions[0] },
  { id: 'ugc-2', caption: ugcCaptions[1] },
  { id: 'ugc-3', caption: ugcCaptions[2] },
  { id: 'ugc-4', caption: ugcCaptions[3] },
  { id: 'ugc-5', caption: ugcCaptions[4] },
];

export default function UGCRow() {
  return (
    <section className="py-16 bg-[#faf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="velmora-heading text-2xl md:text-3xl text-[#1a1a1a] text-center">
          As Worn By You
        </h2>
        <p className="text-sm text-[#6b6b6b] text-center mt-2">
          Tag @velmorajewelry to be featured
        </p>
      </div>

      <div className="flex gap-4 px-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 sm:w-48 snap-start relative group"
          >
            <div className="aspect-[9/16] bg-[#f5f0eb] overflow-hidden rounded-sm">
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
              <p
                id={`ugc-caption-${item.id}`}
                className="velmora-heading text-sm text-[#faf8f5] italic"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
