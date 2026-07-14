import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop',
      caption: 'Stacked for impact',
      author: '@maria_elle'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
      caption: 'Everyday elegance',
      author: '@jewelsandjam'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop',
      caption: 'Golden hour glow',
      author: '@sophia.wears'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
      caption: 'Layered perfection',
      author: '@aesthetic.alex'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop',
      caption: 'Minimalist vibes',
      author: '@chic.choices'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
      caption: 'Date night ready',
      author: '@glam.grace'
    },
  ];

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
              #VelmoraStyle
            </h2>
            <p className="font-sans text-sm text-velmora-muted uppercase tracking-wider">
              Shop our community's looks
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 border border-velmora-taupe flex items-center justify-center
                         hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 border border-velmora-taupe flex items-center justify-center
                         hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 md:w-72 lg:w-80 relative group cursor-pointer"
            >
              {/* Vertical Card (9:16 aspect ratio) */}
              <div className="relative overflow-hidden bg-velmora-warm aspect-[9/16]">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4
                                opacity-0 group-hover:opacity-100 group-hover:translate-y-0 
                                transition-all duration-500">
                  <p className="font-serif text-lg mb-1">{item.caption}</p>
                  <p className="font-sans text-xs uppercase tracking-wider">{item.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
