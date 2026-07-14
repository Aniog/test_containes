import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';

export default function Bestsellers({ products = [] }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
          Best sellers
        </h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map(product => (
          <div key={product.id} className="group cursor-pointer">
            <Link to={`/product/${product.slug}`}>
              {/* Product Image */}
              <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4] mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Second Image */}
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleQuickAdd(product, e)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-charcoal 
                           px-6 py-2 font-sans text-xs uppercase tracking-wider
                           opacity-0 translate-y-2 transition-all duration-300
                           group-hover:opacity-100 group-hover:translate-y-0
                           hover:bg-velmora-gold hover:text-white"
                >
                  Add to Cart
                </button>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-velmora-gold fill-velmora-gold'
                            : 'text-velmora-taupe'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-sans text-xs text-velmora-muted">
                    ({product.reviews})
                  </span>
                </div>
                <p className="font-serif text-lg text-velmora-charcoal">
                  ${product.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block border border-velmora-gold text-velmora-gold px-12 py-4 
                     font-sans text-sm uppercase tracking-wider
                     hover:bg-velmora-gold hover:text-white transition-colors duration-300"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
