import React from 'react';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden Hour Glow', query: 'gold jewelry wearing model ear necklace close up sun lit' },
  { id: 'ugc-2', caption: 'Everyday Essentials', query: 'gold earrings necklace stacking jewelry model' },
  { id: 'ugc-3', caption: 'The Perfect Gift', query: 'gold jewelry gift box opening model luxury' },
  { id: 'ugc-4', caption: 'Timeless Details', query: 'gold jewelry details close up macro' },
  { id: 'ugc-5', caption: 'Effortless Elegance', query: 'jewelry model posing editorial gold' },
  { id: 'ugc-6', caption: 'Refined Brilliance', query: 'gold necklace crystal sparkle model neck' },
];

const UGCReel = () => {
  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="px-6 md:px-12 mb-12 flex flex-col items-center text-center">
        <span className="text-[10px] uppercase-extra text-accent mb-4 block">Social Gallery</span>
        <h2 className="text-4xl font-serif mb-4">Worn by You</h2>
        <p className="text-sm opacity-60 max-w-sm">Share your look with #VelmoraMoments</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-8 px-6 md:px-12 scrollbar-hide no-scrollbar">
        {ugcItems.map((item) => (
          <div key={item.id} className="relative flex-none w-[280px] aspect-[9/16] overflow-hidden group">
            <img
              data-strk-img-id={item.id}
              data-strk-img={item.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-white font-serif italic text-lg">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
