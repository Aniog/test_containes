import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

const bestsellers = products.filter((p) => p.isBestseller);

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-ultra uppercase text-warm-gray mb-3">Best Sellers</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">Our Most Loved Pieces</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                {/* Image */}
                <div className="relative aspect-[3/4] bg-sand-light overflow-hidden rounded-sm mb-4">
                  <img
                    src={hoveredId === product.id ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Quick add overlay */}
                  <div className={`absolute inset-0 bg-charcoal/10 flex items-end justify-center pb-5 transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addItem(product, product.variants[0]);
                      }}
                      className="bg-cream/90 backdrop-blur-sm text-charcoal text-[10px] tracking-widest uppercase font-medium px-5 py-2.5 rounded-sm hover:bg-cream transition-colors flex items-center gap-2"
                    >
                      <Plus className="w-3 h-3" />
                      Add to Bag
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <p className="text-[11px] tracking-widest font-medium text-charcoal leading-tight mb-1">
                    {product.name}
                  </p>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span className="text-[11px] text-warm-gray">{product.rating} ({product.reviews})</span>
                  </div>
                  <p className="text-sm font-medium text-charcoal">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
