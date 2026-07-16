import React from 'react';

const UGCReel = () => {
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', caption: 'The Every Day Stack' },
    { id: 2, url: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', caption: 'Golden Hour' },
    { id: 3, url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', caption: 'Statement Maker' },
    { id: 4, url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', caption: 'Layered Luxury' },
    { id: 5, url: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', caption: 'Subtle Details' },
    { id: 6, url: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', caption: 'Modern Classic' }
  ];

  return (
    <section className="py-20 md:py-32 bg-velmora-stone border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-12 flex justify-between items-end">
        <h2 className="font-serif leading-none text-4xl text-velmora-charcoal">
          As Seen On You
        </h2>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hidden border-b border-velmora-charcoal uppercase tracking-widest text-sm pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors md:inline-block">
          @velmorajewelry
        </a>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-6 px-4 md:px-8 pb-8 snap-x snap-mandatory content-start w-full">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="relative flex-shrink-0 w-64 md:w-80 aspect-[9/16] snap-start overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-velmora-charcoal/20 z-10 transition-opacity duration-300 group-hover:opacity-0" />
            <img 
              src={image.url} 
              alt={image.caption} 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Caption Overlay */}
            <div className="absolute bottom-6 left-6 z-20 transition-transform duration-300 translate-y-2 lg:translate-y-full md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-serif text-white text-xl drop-shadow-md">
                {image.caption}
              </p>
              <button className="mt-2 text-white/90 text-xs tracking-widest uppercase border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-colors">
                Shop the look
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-4 md:hidden">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-block border-b border-velmora-charcoal uppercase tracking-widest text-sm pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors">
            Follow @velmorajewelry
          </a>
      </div>
    </section>
  );
};

export default UGCReel;