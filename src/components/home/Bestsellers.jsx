import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans font-medium mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-sans text-brand-gold hover:text-brand-gold-dark transition-colors border-b border-brand-gold pb-1"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [adding, setAdding] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAdding(true);
    addItem(product);
    setTimeout(() => setAdding(false), 800);
  };

  const imgSrc = hovered && product.hoverImage ? product.hoverImage : product.images[0];

  return (
    <Link
      to={`/product/${product.id}`}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-brand-light overflow-hidden rounded-sm">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

        {/* Add to cart overlay on hover */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 bg-brand-white/90 backdrop-blur-sm text-brand-dark text-xs tracking-widest uppercase font-sans font-medium h-10 flex items-center justify-center gap-2 transition-all duration-300 ${
            adding
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          {adding ? 'Added!' : 'Quick Add'}
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-serif text-xs tracking-[0.15em] uppercase text-brand-dark truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
          <span className="text-xs text-brand-muted">{product.rating}</span>
        </div>
        <p className="font-sans text-sm text-brand-gold font-medium">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}