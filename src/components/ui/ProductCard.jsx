import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem, toggleDrawer } = useCart();
  const defaultVariant = product.variants.find((v) => v.inStock) || product.variants[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (defaultVariant?.inStock) {
      addItem(product, defaultVariant.id);
      toggleDrawer(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-elevated overflow-hidden mb-4">
          <img
            data-strk-img-id={`product-${product.id}-main`}
            data-strk-img={`[product-${product.id}-name]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ease-luxury ${
              hovered ? 'scale-105' : 'scale-100'
            }`}
          />

          {/* Hover overlay with quick add */}
          <div
            className={`absolute inset-0 bg-black/30 flex items-end justify-center pb-6 transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              disabled={!defaultVariant?.inStock}
              className="bg-cream hover:bg-gold text-base hover:text-base font-sans text-xs uppercase tracking-widest px-6 py-3 flex items-center gap-2 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {defaultVariant?.inStock ? 'Quick Add' : 'Out of Stock'}
            </button>
          </div>

          {/* Sale badge */}
          {product.compareAtPrice && (
            <span className="absolute top-3 left-3 bg-gold text-base text-[10px] uppercase tracking-widest font-sans px-2 py-1">
              Sale
            </span>
          )}
        </div>

        {/* Product info */}
        <div className="text-center">
          <h3
            id={`product-${product.id}-name`}
            className="text-[11px] uppercase tracking-[0.15em] text-cream font-sans font-medium"
          >
            {product.name}
          </h3>

          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-cream text-sm font-sans">${product.price}</span>
            {product.compareAtPrice && (
              <span className="text-subtle text-sm font-sans line-through">
                ${product.compareAtPrice}
              </span>
            )}
          </div>

          <div className="flex items-center justify-center gap-1 mt-1.5">
            <Star className="w-3 h-3 text-gold fill-gold" />
            <span className="text-subtle text-xs font-sans">{product.rating}</span>
            <span className="text-subtle/60 text-xs font-sans">({product.reviewCount})</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
