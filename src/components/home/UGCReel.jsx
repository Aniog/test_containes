import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';
import products from '@/data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  const getProduct = (productId) => products.find((p) => p.id === productId);

  return (
    <section className="bg-warm-50 py-20 md:py-28">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
            As Seen On You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-900">
            Styled by You
          </h2>
          <p className="mt-4 text-sm md:text-base text-warm-500 max-w-md mx-auto">
            Real women, real moments. Tag <span className="font-medium text-warm-700">@velmorajewelry</span> to be featured.
          </p>
        </div>

        {/* Scroll controls */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-md rounded-full flex items-center justify-center text-warm-700 hover:text-warm-900 transition-colors -ml-5 hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-1 pb-4"
          >
            {ugcItems.map((item) => {
              const product = getProduct(item.productId);
              return (
                <Link
                  key={item.id}
                  to={product ? `/product/${product.slug}` : '#'}
                  className="flex-shrink-0 w-[160px] md:w-[200px] group"
                >
                  <div className="relative aspect-[9/16] bg-warm-200 rounded-sm overflow-hidden">
                    <img
                      alt={item.caption}
                      data-strk-img-id={`ugc-${item.id}`}
                      data-strk-img={`[ugc-caption-${item.id}]`}
                      data-strk-img-ratio="9x16"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-950/70 via-transparent to-transparent" />
                    <p
                      id={`ugc-caption-${item.id}`}
                      className="absolute bottom-4 left-4 right-4 text-white text-xs md:text-sm font-serif italic leading-snug"
                    >
                      {item.caption}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-md rounded-full flex items-center justify-center text-warm-700 hover:text-warm-900 transition-colors -mr-5 hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}