import React, { useRef, useState, useEffect } from 'react';
import { ugcPosts } from '@/data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function UGCRow() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        scrollEl.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal">
              Styled by You
            </h2>
            <p className="text-velmora-taupe mt-1">Tag @velmora to be featured</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-velmora-sand flex items-center justify-center text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-velmora-sand flex items-center justify-center text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ugcPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-[200px] md:w-[240px] relative group cursor-pointer"
              >
                {/* Vertical Card */}
                <div className="aspect-[9/16] bg-velmora-sand rounded-lg overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Caption */}
                  <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
