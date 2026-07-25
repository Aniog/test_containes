import React, { useRef } from 'react';

const UGCReelStrip = () => {
  const scrollRef = useRef(null);
  
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Everyday elegance",
      author: "@sarahm"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1515562141203-ffd4bd7c8a38?w=400&q=80",
      caption: "Layered perfection",
      author: "@emilyj"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Golden hour glow",
      author: "@jessicat"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1515562141203-ffd4bd7c8a38?w=400&q=80",
      caption: "Minimalist vibes",
      author: "@aishaw"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Stacked & styled",
      author: "@nicolek"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1515562141203-ffd4bd7c8a38?w=400&q=80",
      caption: "Gifted with love",
      author: "@rachelb"
    }
  ];
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Worn by You
          </h2>
          <p className="text-gray-600 tracking-wide">@velmora_jewelry</p>
          <div className="w-16 h-px bg-accent mx-auto mt-4" />
        </div>
        
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ugcItems.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: '9/16' }}>
                  <img 
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-serif text-lg mb-1">{item.caption}</p>
                    <p className="text-sm opacity-80">{item.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGCReelStrip;
