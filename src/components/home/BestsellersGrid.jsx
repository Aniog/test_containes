import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus, ShoppingBag } from 'lucide-react';
import { bestsellers } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function BestsellersGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      {/* Section heading */}
      <div className="text-center mb-14">
        <p className="text-velmora-gold text-xs tracking-super uppercase mb-4">Most Loved</p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">Our Bestsellers</h2>
        <div className="w-12 h-px bg-velmora-gold/30 mx-auto mt-6" />
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-14">
        <Link
          to="/shop"
          className="inline-block text-xs tracking-widest uppercase text-velmora-dark border-b border-velmora-gold pb-2 hover:text-velmora-gold transition-colors duration-300"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
        {/* Main image placeholder */}
        <div className={`absolute inset-0 bg-gradient-to-br from-velmora-warm to-velmora-sand flex items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <ShoppingBag className="w-10 h-10 text-velmora-gold/30" />
        </div>
        {/* Hover image placeholder */}
        <div className={`absolute inset-0 bg-gradient-to-br from-velmora-gold-light/30 to-velmora-gold/10 flex items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-16 h-16 rounded-full bg-velmora-gold/20 flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-velmora-gold/60" />
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-dark text-white text-[9px] tracking-wider uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-velmora-dark hover:bg-velmora-gold hover:text-white transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label="Add to cart"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <p className="font-serif text-[11px] md:text-xs tracking-widest uppercase text-velmora-dark group-hover:text-velmora-gold transition-colors duration-300">
          {product.name}
        </p>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}`}
            />
          ))}
          <span className="text-[10px] text-velmora-taupe ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-serif text-sm text-velmora-dark">${product.price}</p>
      </div>
    </Link>
  );
}
