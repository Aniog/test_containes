import React from 'react';

const ugcItems = [
  { id: 1, image: '/api/placeholder/400/711', caption: 'Perfect everyday elegance' },
  { id: 2, image: '/api/placeholder/400/711', caption: 'Layered with love' },
  { id: 3, image: '/api/placeholder/400/711', caption: 'Golden hour glow' },
  { id: 4, image: '/api/placeholder/400/711', caption: 'Minimalist vibes' },
  { id: 5, image: '/api/placeholder/400/711', caption: 'Stacked to perfection' },
  { id: 6, image: '/api/placeholder/400/711', caption: 'Timeless beauty' },
];

export default function UGCReelRow() {
  return (
    <section className="py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-4">Worn by You</h2>
          <p className="text-charcoal/60 font-light">Join the Velmora community</p>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-none w-64 md:w-80 snap-center"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-cream">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
                  <p className="text-cream font-serif text-lg font-light italic">
                    "{item.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
