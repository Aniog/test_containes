import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

function ProductCard({ product, index }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-sand">
          <img
            src={product.gridImage}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            src={product.hoverImage}
            alt={`${product.name} on model`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick add overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-brand-charcoal/90 backdrop-blur-sm text-brand-cream text-xs tracking-wider uppercase font-medium hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-product-name text-sm text-brand-charcoal group-hover:text-brand-gold transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-brand-soft-brown mt-1">{product.subtitle}</p>
        <div className="flex items-center justify-center gap-1 mt-2">
          <Star size={12} fill="#C9A96E" strokeWidth={0} className="text-brand-gold" />
          <span className="text-xs text-brand-mid-brown">{product.rating}</span>
          <span className="text-xs text-brand-soft-brown">({product.reviewCount})</span>
        </div>
        <p className="font-serif text-lg text-brand-charcoal mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const [ref, isVisible] = useScrollAnimation(0.05);

  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="section-padding" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-brand-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-brand-charcoal">
            Bestsellers
          </h2>
          <div className="hairline-divider max-w-[60px] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
