import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div
        className="relative overflow-hidden bg-cream aspect-[3/4] mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* First Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="first-image w-full h-full object-cover absolute inset-0 transition-opacity duration-400"
          style={{ opacity: isHovered ? 0 : 1 }}
        />

        {/* Second Image (on hover) */}
        <img
          src={product.images[1] || product.images[0]}
          alt={product.name}
          className="second-image w-full h-full object-cover absolute inset-0 transition-opacity duration-400"
          style={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Badge */}
        {product.badge && (
          <div className="badge">
            {product.badge}
          </div>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-charcoal px-6 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-charcoal hover:text-white"
        >
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="font-serif text-sm tracking-widest uppercase mb-2">
          {product.name}
        </h3>
        <p className="text-charcoal-light text-sm mb-1">
          ${product.price}
        </p>
        <div className="flex items-center justify-center gap-1 text-sm">
          <span className="text-gold">★</span>
          <span className="text-charcoal-light text-xs">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}
