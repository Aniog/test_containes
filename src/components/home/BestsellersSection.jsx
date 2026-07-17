import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-secondary)] mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-[var(--velmora-accent)] text-white text-[10px] tracking-widest uppercase px-3 py-1.5">
            Bestseller
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 velmora-btn-primary py-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Add to Bag
        </button>
      </div>
      <div className="text-center">
        <h3 className="velmora-product-name text-sm mb-1.5 group-hover:text-[var(--velmora-gold)] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'text-[var(--velmora-gold)] fill-[var(--velmora-gold)]'
                  : 'text-[var(--velmora-border)]'
              }`}
            />
          ))}
          <span className="text-xs text-muted ml-1">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

export default function BestsellersSection() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">Curated for You</p>
          <h2 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl mb-4">Bestsellers</h2>
          <hr className="velmora-divider w-16 mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
