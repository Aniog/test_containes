import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const UGCReel = () => {
  const scrollRef = useRef(null);

  const ugcItems = [
    {
      id: 1,
      image: "/placeholder.svg",
      caption: "Perfect for date night ✨",
      author: "@sarahm",
    },
    {
      id: 2,
      image: "/placeholder.svg",
      caption: "Obsessed with my new huggies 💫",
      author: "@emilyj",
    },
    {
      id: 3,
      image: "/placeholder.svg",
      caption: "Everyday elegance 🌙",
      author: "@aishac",
    },
    {
      id: 4,
      image: "/placeholder.svg",
      caption: "Gifted myself these beauties 🎁",
      author: "@nicolev",
    },
    {
      id: 5,
      image: "/placeholder.svg",
      caption: "Stacking game strong 💪",
      author: "@jessicat",
    },
    {
      id: 6,
      image: "/placeholder.svg",
      caption: "Morning light hits different ☀️",
      author: "@oliviad",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-velmora-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="heading-lg text-velmora-charcoal mb-2">
              #VelmoraMoments
            </h2>
            <p className="font-sans text-base text-velmora-charcoal-light">
              See how our community styles their pieces
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 border-2 border-velmora-charcoal/20 rounded-full 
                         flex items-center justify-center hover:border-velmora-gold 
                         hover:text-velmora-gold transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 border-2 border-velmora-charcoal/20 rounded-full 
                         flex items-center justify-center hover:border-velmora-gold 
                         hover:text-velmora-gold transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer"
            >
              {/* Vertical Card (9:16 aspect ratio) */}
              <div className="relative overflow-hidden bg-velmora-warm aspect-[9/16]">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 
                             group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 
                                group-hover:translate-y-0 opacity-0 group-hover:opacity-100 
                                transition-all duration-500">
                  <p className="font-serif text-lg italic mb-2">
                    {item.caption}
                  </p>
                  <p className="font-sans text-sm text-white/80">
                    {item.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default UGCReel;
