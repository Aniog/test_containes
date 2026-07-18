import React, { useRef } from 'react';

const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
    caption: 'Morning light & gold accents'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Layered necklaces for every day'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
    caption: 'The perfect huggie stack'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Gifting made beautiful'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
    caption: 'Self-love in every detail'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Timeless pieces for modern women'
  }
];

export default function UGCSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container-velmora">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="heading-serif text-3xl mb-2">#VelmoraMoments</h2>
            <p className="body-text">Tag us @velmora for a chance to be featured</p>
          </div>

          {/* Scroll Buttons */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 border border-charcoal flex items-center justify-center hover:bg-charcoal hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 border border-charcoal flex items-center justify-center hover:bg-charcoal hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-none w-72 md:w-80"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-cream-dark group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-sm font-light italic">{item.caption}</p>
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
