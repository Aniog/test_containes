import { useRef } from 'react';
import { useCart } from '@/hooks/useCart';
import { products } from '@/data/products';

const UgcRow = () => {
  const scrollRef = useRef(null);
  const { addItem, toggleCart } = useCart();

  const handleAdd = (product) => {
    addItem(product, 'gold', 1);
    toggleCart();
  };

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase text-gold mb-3">As Worn By You</p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide text-ink">The Velmora Edit</h2>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="snap-start">
                <div className="relative w-[160px] sm:w-[200px] flex-shrink-0">
                  <div className="aspect-[9/16] rounded-sm overflow-hidden bg-surface-alt">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-[11px] text-white/90 font-medium truncate">{product.name}</p>
                    <p className="text-[10px] text-white/70">${product.price}</p>
                  </div>
                  <button
                    onClick={() => handleAdd(product)}
                    className="absolute top-2 right-2 rounded-full bg-white/90 p-2 text-ink hover:bg-white transition-colors"
                    aria-label="Add to cart"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UgcRow;
