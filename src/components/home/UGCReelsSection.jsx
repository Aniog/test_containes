import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function UGCReelsSection() {
  const [ref, isVisible] = useScrollReveal();
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-20 overflow-hidden" style={{ backgroundColor: 'var(--velmora-warm-white)' }}>
      <div className="velmora-container mb-8">
        <div 
          ref={ref}
          className={`flex items-end justify-between transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <p 
              className="text-xs uppercase tracking-[0.3em] mb-3"
              style={{ color: 'var(--velmora-gold)' }}
            >
              Community Love
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
              Seen on You
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 border transition-all hover:bg-[var(--velmora-charcoal)] hover:text-white"
              style={{ borderColor: 'var(--velmora-sand)' }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 border transition-all hover:bg-[var(--velmora-charcoal)] hover:text-white"
              style={{ borderColor: 'var(--velmora-sand)' }}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Reels Strip */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-6 md:px-0 md:mx-0 md:px-[calc((100vw-1400px)/2)]"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcContent.map((item, index) => (
          <div
            key={item.id}
            className={`flex-shrink-0 w-[200px] md:w-[240px] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ 
              scrollSnapAlign: 'start',
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div 
              className="relative overflow-hidden rounded-sm"
              style={{ aspectRatio: '9/16' }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(31,28,26,0.8) 0%, rgba(31,28,26,0) 50%)'
                }}
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p 
                  className="font-serif text-lg md:text-xl italic mb-2"
                  style={{ color: 'white' }}
                >
                  "{item.caption}"
                </p>
                <p 
                  className="text-xs"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {item.username}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
