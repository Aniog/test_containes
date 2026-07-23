import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop',
    caption: 'Everyday elegance',
    handle: '@sarah.m',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop',
    caption: 'Golden hour glow',
    handle: '@emma.l',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop',
    caption: 'Layered perfection',
    handle: '@olivia.r',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop',
    caption: 'Stacked & styled',
    handle: '@mia.k',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop',
    caption: 'Minimal luxury',
    handle: '@ava.j',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=700&fit=crop',
    caption: 'Weekend vibes',
    handle: '@lily.w',
  },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#F3F0EB]">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#9B9590] mb-3">As Worn By You</p>
          <h2 className="serif-heading text-3xl md:text-4xl font-light">The Velmora Edit</h2>
        </div>

        {/* Scroll controls */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll(-1)}
            className="w-10 h-10 border border-[#E8E4DF] flex items-center justify-center hover:border-[#B8956A] hover:text-[#B8956A] transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-10 h-10 border border-[#E8E4DF] flex items-center justify-center hover:border-[#B8956A] hover:text-[#B8956A] transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
        >
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="flex-shrink-0 w-44 md:w-52 relative group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-[#E8E4DF] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
                <p className="serif-heading text-white text-sm italic">{item.caption}</p>
                <p className="text-white/70 text-xs mt-1">{item.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
