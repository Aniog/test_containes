import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcPosts } from '../../data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section-padding bg-cream-100 overflow-hidden">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold-600 mb-3">
              @velmora
            </p>
            <h2 className="font-serif text-heading-lg md:text-heading-xl text-charcoal-800">
              As Seen On You
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-charcoal-300 flex items-center justify-center text-charcoal-600 hover:bg-charcoal-800 hover:text-cream-50 hover:border-charcoal-800 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-charcoal-300 flex items-center justify-center text-charcoal-600 hover:bg-charcoal-800 hover:text-cream-50 hover:border-charcoal-800 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-[calc((100vw-1340px)/2+3rem)] pb-4"
      >
        {ugcPosts.map((post, index) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[220px] md:w-[260px] relative group cursor-pointer"
          >
            {/* Vertical card - 9:16 ratio */}
            <div className="relative aspect-[9/16] bg-charcoal-200 overflow-hidden">
              <img
                data-strk-img-id={post.id}
                data-strk-img={`woman wearing gold jewelry ${post.product} close up portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-serif text-lg text-cream-50 italic">
                  "{post.caption}"
                </p>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-300 mt-2">
                  {post.product}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
