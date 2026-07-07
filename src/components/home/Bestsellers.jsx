import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';
import { ShoppingBag, Star } from 'lucide-react';

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      {/* Section heading */}
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl lg:text-4xl tracking-wide text-velmora-deep mb-4">
          Bestsellers
        </h2>
        <div className="w-12 h-px bg-velmora-gold mx-auto" />
        <p className="mt-4 text-velmora-stone text-sm max-w-md mx-auto">
          The pieces our community loves most — curated for everyday elegance.
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {products.map((product) => {
          const isHovered = hoveredId === product.id;
          return (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-velmora-creme rounded-sm aspect-[3/4] mb-4">
                {/* Primary image */}
                <img
                  data-strk-img-id={`bs-${product.id}-1`}
                  data-strk-img={`[bestseller-name-${product.id}] gold jewelry editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                  }`}
                />
                {/* Secondary image on hover */}
                <img
                  data-strk-img-id={`bs-${product.id}-2`}
                  data-strk-img={`[bestseller-name-${product.id}] jewelry model wearing`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
                {/* Quick add on hover */}
                <button
                  onClick={(e) => { e.preventDefault(); addItem(product); }}
                  className={`absolute bottom-0 left-0 right-0 bg-velmora-gold text-white text-xs tracking-widest uppercase py-3 
                    flex items-center justify-center gap-2 transition-all duration-300
                    ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                >
                  <ShoppingBag size={14} />
                  Add to Bag
                </button>
              </Link>

              {/* Info */}
              <div>
                <p id={`bestseller-name-${product.id}`} className="text-[11px] lg:text-xs tracking-wider uppercase font-serif text-velmora-deep leading-snug">
                  {product.name}
                </p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <div className="flex items-center">
                    <Star size={11} className="fill-velmora-gold text-velmora-gold" />
                    <span className="text-[11px] text-velmora-stone ml-1">{product.rating}</span>
                  </div>
                  <span className="text-[11px] text-velmora-stone">({product.reviewCount})</span>
                </div>
                <p className="text-sm font-medium text-velmora-deep mt-1">${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
