import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const UGCReel = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mock UGC data - in production, this would come from Instagram API or similar
  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Layered necklaces for every occasion',
      author: '@sarahj',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'My everyday huggies ✨',
      author: '@emilyr',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Gold details that make the outfit',
      author: '@jessicam',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
      caption: 'Gifted myself the Royal Heirloom Set',
      author: '@aishac',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Velmora styling inspo',
      author: '@natalieg',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Perfect gift for her 🎁',
      author: '@michellet',
    },
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-velmora-charcoal text-velmora-cream overflow-hidden">
      <div className="container-premium mb-12">
        <h2
          className="font-serif text-3xl md:text-4xl text-center"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          #VelmoraStyle
        </h2>
        <p className="text-center text-velmora-warm-gray mt-4">
          Tag us @VelmoraFineJewelry for a chance to be featured
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Scroll Buttons */}
        {canScrollLeft && (
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-velmora-charcoal/80 rounded-full flex items-center justify-center hover:bg-velmora-gold transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-velmora-charcoal/80 rounded-full flex items-center justify-center hover:bg-velmora-gold transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          onScroll={updateScrollButtons}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-12 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-72 md:w-80 aspect-[9/16] relative group cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Overlay with Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-6">
                <div>
                  <p className="text-sm mb-2 italic">"{item.caption}"</p>
                  <p className="text-xs text-velmora-gold-light">{item.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
