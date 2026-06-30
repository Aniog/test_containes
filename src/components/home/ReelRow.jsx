import React from 'react';

const ReelRow = () => {
  const reels = [
    { id: 1, caption: 'Everyday stacking essentials.', query: 'aesthetic woman wearing gold jewelry stacked earrings minimalist' },
    { id: 2, caption: 'The glow of 18K gold.', query: 'gold necklace on skin warm golden hour lighting jewelry' },
    { id: 3, caption: 'Details that define you.', query: 'delicate gold bracelet charm jewelry close-up' },
    { id: 4, caption: 'Unboxing moments.', query: 'opening velvet jewelry box with gold earrings' },
    { id: 5, caption: 'Golden hour elegance.', query: 'woman wearing gold jewelry sunlight aesthetic lifestyle' },
    { id: 6, caption: 'Minimalist statement.', query: 'bold gold hoop earrings close-up ear model' },
  ];

  return (
    <section className="py-32 overflow-hidden bg-background">
      <div className="px-6 md:px-12 mb-16 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/70 mb-4">On the Journal</p>
        <h2 className="text-3xl md:text-4xl font-serif italic text-foreground/80">#VelmoraLiving</h2>
      </div>
      
      <div className="flex gap-5 px-6 md:px-12 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory">
        {reels.map((reel) => (
          <div key={reel.id} className="relative flex-none w-[260px] md:w-[320px] aspect-[9/16] overflow-hidden bg-neutral-50 group snap-center cursor-pointer">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E" 
              alt={`Velmora Reel ${reel.id}`}
              data-strk-img-id={`reel-v-img-${reel.id}`}
              data-strk-img={reel.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700" />
            
            <div className="absolute inset-x-0 bottom-0 p-8 pt-16 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <p className="text-white text-sm font-serif italic tracking-wide translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                {reel.caption}
              </p>
              <div className="w-8 h-[1px] bg-white/60 mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelRow;
