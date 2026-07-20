import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-muted mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} onAdd={() => addItem(product, 1, product.variant)} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-charcoal text-charcoal px-10 py-3 text-sm uppercase tracking-[0.15em] hover:bg-charcoal hover:text-cream transition-colors duration-300"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-white border border-hairline overflow-hidden mb-3">
          {/* Product image placeholder with stock image system */}
          <img
            data-strk-img-id={`bestseller-${product.id}`}
            data-strk-img={`[product-name-${product.id}] [product-category-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover second image */}
          <div
            className={`absolute inset-0 bg-hairline/30 transition-opacity duration-400 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              data-strk-img-id={`bestseller-${product.id}-hover`}
              data-strk-img={`[product-name-${product.id}] gold jewelry detail closeup`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} detail`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-2 left-2 bg-charcoal text-cream text-[10px] uppercase tracking-wider px-2 py-1">
              {product.badge}
            </span>
          )}

          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onAdd();
            }}
            className={`absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-charcoal py-2.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>

      <Link to={`/product/${product.id}`}>
        <h3
          id={`product-name-${product.id}`}
          className="font-serif text-sm uppercase tracking-[0.15em] mb-1 group-hover:text-gold transition-colors"
        >
          {product.name}
        </h3>
      </Link>
      <p id={`product-category-${product.id}`} className="hidden">{product.category} {product.name}</p>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">${product.price}</span>
        {product.originalPrice && (
          <span className="text-xs text-muted line-through">${product.originalPrice}</span>
        )}
      </div>
      <div className="flex items-center gap-1 mt-1">
        <Star className="w-3 h-3 fill-gold text-gold" />
        <span className="text-xs text-muted">{product.rating} ({product.reviewCount})</span>
      </div>
    </div>
  );
}
