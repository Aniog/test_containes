import React from 'react';
import { motion } from 'framer-motion';

const UGCReel = () => {
  const cards = [
    { id: 1, caption: "Effortless stacking with the Golden Sphere Huggies.", query: "Close up of gold huggie earrings on an ear lifestyle fashion" },
    { id: 2, caption: "The texture on these Amber Lace pieces is unmatched.", query: "Close up of gold filigree drop earrings fashion portrait" },
    { id: 3, caption: "Morning light with the Flora Nectar necklace.", query: "Woman wearing gold crystal necklace in warm morning sunlight" },
    { id: 4, caption: "The perfect everyday aura with our cuff.", query: "Close up of gold ear cuff style aesthetic" },
    { id: 5, caption: "A gift to myself. The Heirloom Set is stunning.", query: "Hands holding gold jewelry pieces elegant close up" },
    { id: 6, caption: "Layering done right. Golden essentials.", query: "Multiple gold necklaces layered on a neck minimalist fashion" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="px-6 md:px-12 mb-12">
        <h2 className="text-3xl md:text-5xl font-serif text-center">As Seen On You</h2>
      </div>

      <div className="flex overflow-x-auto gap-4 px-6 md:px-12 no-scrollbar pb-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] bg-velmora-cream overflow-hidden group rounded-sm"
          >
            <img
              data-strk-img-id={`ugc-img-${card.id}`}
              data-strk-img={card.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="UGC Content"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <p className="text-white font-serif italic text-lg leading-snug">
                "{card.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
