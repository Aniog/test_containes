import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function UGCReelSection() {
  const scrollRef = useRef(null);

  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=1067&fit=crop',
      caption: 'Perfect for layering',
      author: '@sarahj',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=1067&fit=crop',
      caption: 'Everyday elegance',
      author: '@emilyrose',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=1067&fit=crop',
      caption: 'Golden hour vibes',
      author: '@jessicag',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=1067&fit=crop',
      caption: 'Minimalist dream',
      author: '@aishan',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=1067&fit=crop',
      caption: 'Stacked to perfection',
      author: '@michellet',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=1067&fit=crop',
      caption: 'Gifted with love',
      author: '@rachelk',
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-velmora-ivory">
      <div className="container-velmora">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2
              className="font-serif text-4xl md:text-5xl mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              #VelmoraStyle
            </h2>
            <p className="text-velmora-stone">See how our community wears their pieces</p>
          </div>

          {/* Scroll Controls */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-velmora-charcoal/20 flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-velmora-charcoal/20 flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-4 md:space-x-6 overflow-x-auto hide-scrollbar pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-64 md:w-72"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative aspect-[9/16] bg-velmora-sand overflow-hidden rounded-lg group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-velmora-cream">
                    <p className="font-serif text-lg mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {item.caption}
                    </p>
                    <p className="text-xs text-velmora-gold">{item.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
