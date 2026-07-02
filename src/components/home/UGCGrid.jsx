import React from 'react';

const UGCGrid = () => {
  const images = [
    { id: 1, caption: 'The Aura Cuff in Morning Light' },
    { id: 2, caption: 'Layering with the Flora Nectar' },
    { id: 3, caption: 'The Everyday Dome Huggie' },
    { id: 4, caption: 'Lace Details for Special Moments' },
    { id: 5, caption: 'Gift Sets to Cherish' },
    { id: 6, caption: 'Quiet Luxury Essentials' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <h2 className="text-sm uppercase tracking-[0.4em] text-center text-velmora-grey">As Seen On You</h2>
      </div>

      <div className="flex overflow-x-auto px-4 md:px-8 space-x-4 no-scrollbar pb-8">
        {images.map((item, idx) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-64 md:w-80 group cursor-pointer relative hover:-translate-y-2 transition-transform duration-500 ease-out"
          >
            <div className="aspect-[9/16] overflow-hidden bg-velmora-grey/10">
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`woman wearing jewelry ear neck portrait editorial aesthetic [ugc-caption-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                alt={item.caption}
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent pt-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p id={`ugc-caption-${item.id}`} className="font-serif text-white text-lg italic text-center">
                  "{item.caption}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCGrid;
