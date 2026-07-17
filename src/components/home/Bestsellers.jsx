import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-gold text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-3">
            Best Sellers
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-900">
            Most Loved Pieces
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-taupe-100 overflow-hidden mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                
                {/* Quick add button */}
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="absolute bottom-0 left-0 right-0 bg-charcoal-900/90 text-cream-50 py-3 font-sans text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              </div>

              <div className="space-y-1.5">
                <h3 className="product-name text-charcoal-800 group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? 'text-gold fill-gold'
                          : 'text-charcoal-200'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-charcoal-400 ml-1">({product.reviews})</span>
                </div>
                <p className="font-sans text-sm font-semibold text-charcoal-800">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}