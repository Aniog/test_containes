import React from 'react';

const UGCReel = () => {
  const reelItems = [
    { id: 1, text: 'The perfect daily stack.' },
    { id: 2, text: 'Golden hour essentials.' },
    { id: 3, text: 'Effortless elegance.' },
    { id: 4, text: 'Crafted for moments.' },
    { id: 5, text: 'Timeless huggie style.' },
    { id: 6, text: 'Layered in gold.' },
  ];

  return (
    <section className="py-20 md:py-32 bg-velmora-cream overflow-hidden">
      <div className="px-6 md:px-12 mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-center">Worn by You</h2>
        <p className="text-center text-neutral-500 text-sm mt-3 font-sans tracking-wide">Tag us #VELMORAMUSE to be featured</p>
      </div>

      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x no-scrollbar px-6 md:px-12">
        {reelItems.map((item) => (
          <div key={item.id} className="flex-none w-[200px] md:w-[280px] aspect-[9/16] relative group snap-start bg-neutral-100 overflow-hidden">
             <img
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`jewelry model lifestyle ear neck portrait close up`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="UGC Jewelery"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-serif italic text-sm md:text-base leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                "{item.text}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
