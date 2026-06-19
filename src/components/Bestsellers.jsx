import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [addedId, setAddedId] = useState(null);
  const bestsellers = products.filter((p) => p.bestseller);

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="py-section lg:py-section-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans mb-3">Curated for You</p>
          <h2 className="section-heading">Bestsellers</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-warm-light mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                {/* Second image on hover (desktop) */}
                {product.images[1] && (
                  <img
                    src={product.images[1]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block"
                  />
                )}
                {/* Quick add button */}
                <button
                  onClick={(e) => handleQuickAdd(product, e)}
                  className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-charcoal py-3 font-sans text-[11px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-gold hover:text-white"
                >
                  {addedId === product.id ? (
                    <span className="flex items-center gap-1">Added</span>
                  ) : (
                    <>
                      <ShoppingBag className="w-3 h-3" />
                      Quick Add
                    </>
                  )}
                </button>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="product-name truncate">{product.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-gold fill-gold" />
                    <span className="text-[11px] text-warm-gray font-sans">{product.rating}</span>
                  </div>
                </div>
                <span className="font-sans text-sm text-charcoal whitespace-nowrap font-medium">
                  ${product.price}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block text-xs">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}