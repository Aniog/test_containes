import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcPosts } from '../../data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#FAF8F5] overflow-hidden">
      <div className="container-luxury mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2
              className="text-3xl md:text-4xl font-light mb-2"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Worn by You
            </h2>
            <p className="text-sm text-[#8A8580]">Tag us @velmora for a chance to be featured</p>
          </div>

          {/* Scroll Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-[#E8E2D9] flex items-center justify-center hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-[#E8E2D9] flex items-center justify-center hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcPosts.map((post, i) => (
          <div
            key={post.id}
            className="flex-shrink-0 relative group cursor-pointer"
            style={{
              width: 'min(70vw, 320px)',
              scrollSnapAlign: 'start',
            }}
          >
            {/* 9:16 Aspect Ratio Card */}
            <div className="relative w-full bg-[#F5F0EB] rounded-sm overflow-hidden" style={{ paddingTop: '177.78%' }}>
              <img
                src={`https://images.unsplash.com/photo-${[ '1630019852942-f89202989a59', '1611085583191-a3b181a88401', '1535632066927-ab7c9ab60908', '1611085583191-a3b181a88401', '1630019852942-f89202989a59', '1535632066927-ab7c9ab60908' ][i]}?w=400&q=80`}
                alt={post.alt}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://placehold.co/400x711/C9A96E/FAF8F5?text=${post.caption.replace(/\s/g, '+')}`;
                }}
              />

              {/* Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent">
                <p
                  className="text-white text-lg font-light italic"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  "{post.caption}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
