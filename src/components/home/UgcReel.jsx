import React from 'react';

const ugcItems = [
  { id: 1, caption: 'Everyday elegance', imageId: 'ugc-1' },
  { id: 2, caption: 'Layering essentials', imageId: 'ugc-2' },
  { id: 3, caption: 'The perfect drop', imageId: 'ugc-3' },
  { id: 4, caption: 'Golden hour glow', imageId: 'ugc-4' },
  { id: 5, caption: 'Signature stack', imageId: 'ugc-5' },
  { id: 6, caption: 'Timeless texture', imageId: 'ugc-6' },
];

export function UgcReel() {
  return (
    <section className="py-24 bg-background overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 md:px-8 mb-12 flex justify-between items-end">
        <h2 id="ugc-title" className="text-3xl md:text-4xl font-serif tracking-wide">
          As Seen On You
        </h2>
        <span className="hidden md:inline-block text-sm uppercase tracking-widest text-muted-foreground">@velmorajewelry</span>
      </div>
      
      {/* Reel strip */}
      <div className="flex overflow-x-auto gap-4 md:gap-6 px-4 md:px-8 pb-8 scrollbar-hide snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map((item) => (
          <div 
            key={item.id} 
            className="relative flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] bg-muted snap-center group cursor-pointer overflow-hidden"
          >
            <img
              data-strk-img-id={item.imageId}
              data-strk-img={`woman wearing jewelry [caption-${item.id}] [ugc-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-10">
              <p id={`caption-${item.id}`} className="font-serif italic text-white text-lg drop-shadow-md">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}