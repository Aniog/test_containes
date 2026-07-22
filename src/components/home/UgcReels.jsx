import React from 'react';

const UgcReels = () => {
  const cards = [
    { id: 1, text: 'The Perfect Daily Huggies' },
    { id: 2, text: 'Gifting Made Simple' },
    { id: 3, text: 'Layered in Luxury' },
    { id: 4, text: 'Our Bestselling Cuff' },
    { id: 5, text: 'Timeless Elegance' },
    { id: 6, text: 'Curated Sets' }
  ];

  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-12 flex justify-between items-center">
        <h2 id="ugc-title" className="font-serif text-3xl uppercase tracking-widest">Worn by You</h2>
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-stone font-bold">@VELMORAFINE</span>
      </div>

      <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8">
        {cards.map((card) => (
          <div key={card.id} className="relative w-64 md:w-72 aspect-[9/16] flex-shrink-0 group overflow-hidden bg-brand-stone/5">
            <img 
              data-strk-img-id={`ugc-${card.id}`}
              data-strk-img={`[ugc-caption-${card.id}] gold jewelry lifestyle model ear neck luxury`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="UGC Content"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-0 w-full px-6 text-center">
              <p id={`ugc-caption-${card.id}`} className="text-white font-serif text-lg italic tracking-wide drop-shadow-md">
                "{card.text}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcReels;
