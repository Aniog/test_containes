import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, toggleCart } = useCart();
  
  const featuredProducts = products.filter(p => p.featured).slice(0, 5);
  
  const handleAddToCart = (product) => {
    addItem(product, product.variants[0]);
    toggleCart();
  };
  
  return (
    <section className="section-padding bg-[var(--color-warm-white)]">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">Curated for You</p>
          <h2 className="serif-heading text-4xl md:text-5xl mb-4">Bestsellers</h2>
          <div className="w-16 h-px bg-[var(--color-gold)] mx-auto" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-cream)] mb-4">
                  <img
                    src={hoveredId === product.id ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Quick add button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 text-sm tracking-wider uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--color-charcoal)] hover:text-white"
                  >
                    <ShoppingBag className="w-4 h-4 inline mr-2" />
                    Add to Cart
                  </button>
                </div>
                
                <h3 className="product-name text-sm mb-1 group-hover:text-[var(--color-gold)] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-[var(--color-warm-gray)] mb-2 line-clamp-1">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-medium">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                    <span className="text-xs text-[var(--color-warm-gray)]">{product.rating}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
