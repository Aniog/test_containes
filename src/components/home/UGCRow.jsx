import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcPosts } from '../../data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-velmora-cream py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 font-sans text-xs uppercase tracking-ultra text-velmora-gold">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-3xl text-velmora-charcoal md:text-4xl">
              Styled by You
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll('left')}
              className="flex h-10 w-10 items-center justify-center border border-velmora-sand text-velmora-taupe transition-colors hover:border-velmora-charcoal hover:text-velmora-charcoal"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex h-10 w-10 items-center justify-center border border-velmora-sand text-velmora-taupe transition-colors hover:border-velmora-charcoal hover:text-velmora-charcoal"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide md:px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="group relative h-[380px] w-[260px] flex-shrink-0 overflow-hidden rounded-sm bg-velmora-sand"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="h-full w-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-velmora-charcoal/20 transition-opacity duration-300 group-hover:opacity-0" />
            <div className="absolute bottom-0 left-0 right-0 bg-velmora-charcoal/60 p-4 backdrop-blur-sm">
              <p className="font-serif text-sm italic text-velmora-cream">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}