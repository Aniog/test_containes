import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Bestsellers</h2>
          <p className="mt-3 text-warm-gray text-sm md:text-base font-sans">
            Our most-loved pieces, curated for you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, 5).map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-warm-light rounded overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
                />
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100"
                />
                {/* Quick add */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addItem(product, 'Gold Tone', 1);
                  }}
                  className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center
                             opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm hover:bg-gold hover:text-white"
                  aria-label="Quick add to cart"
                >
                  <Plus className="w-4 h-4" />
                </button>

                {/* Rating badge */}
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1">
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <span className="text-[10px] font-medium text-warm-black">{product.rating}</span>
                </div>
              </div>

              <div className="mt-3 md:mt-4">
                <h3 className="product-name group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-warm-black font-medium mt-1">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/shop" className="btn-outline text-xs">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}