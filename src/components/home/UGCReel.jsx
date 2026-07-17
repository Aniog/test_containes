import React from 'react';

const UGCReel = () => {
  const reels = [
    { id: 1, caption: 'Everyday Essentials' },
    { id: 2, caption: 'The Perfect Stack' },
    { id: 3, caption: 'Golden Hour Glow' },
    { id: 4, caption: 'Timeless Elegance' },
    { id: 5, caption: 'Night Out Radiant' },
    { id: 6, caption: 'Modern Classic' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-serif">Worn by You</h2>
          <p className="text-gray-400 uppercase tracking-widest text-[10px] mt-2">Tag @VELMORA to be featured</p>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-8 space-x-6 px-6 md:px-12 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing">
        {reels.map((reel) => (
          <div key={reel.id} className="flex-shrink-0 w-64 md:w-72 aspect-[9/16] relative group overflow-hidden">
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`jewelry lifestyle being worn on ${reel.caption} close up portrait vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt="UGC"
              className="w-full h-full object-cover transition-luxury group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-luxury" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-serif italic text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-luxury">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
