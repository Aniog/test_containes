import React from 'react';

const UGCRow = () => {
  const reels = [
    { id: 'reel-1', title: 'Everyday Glow', tag: '@sophia_m' },
    { id: 'reel-2', title: 'Golden Details', tag: '@isabella_v' },
    { id: 'reel-3', title: 'Unboxing Joy', tag: '@emma_j' },
    { id: 'reel-4', title: 'Summer Set', tag: '@ava_luxury' },
    { id: 'reel-5', title: 'Stacking Staples', tag: '@mia_lifestyle' },
    { id: 'reel-6', title: 'Gift of Velmora', tag: '@cara_n' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-12 flex justify-between items-center">
        <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-charcoal">As Seen On You</h2>
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-charcoal/40 font-bold">Follow @VELMORA_JEWELRY</span>
      </div>

      <div className="flex gap-4 px-4 md:px-8 overflow-x-auto pb-10 hide-scrollbar scroll-smooth">
        {reels.map((reel) => (
          <div key={reel.id} className="flex-shrink-0 w-64 md:w-72 aspect-[9/16] relative group overflow-hidden rounded-md shadow-sm">
            <img 
              data-strk-img-id={reel.id}
              data-strk-img={`[ugc-reel-caption-${reel.id}] jewelry worn on model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={reel.title}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <p id={`ugc-reel-caption-${reel.id}`} className="font-serif text-2xl text-white mb-2 leading-tight">
                {reel.title}
              </p>
              <p className="font-sans text-[10px] tracking-widest text-gold font-bold uppercase">
                {reel.tag}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default UGCRow;
