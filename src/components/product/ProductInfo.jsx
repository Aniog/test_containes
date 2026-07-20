import React, { useState } from 'react';
import { Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import StarRating from '../ui/StarRating';
import Accordion from '../ui/Accordion';
import { useCart } from '../../context/CartContext';

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
  };

  return (
    <div className="md:pl-8 lg:pl-12">
      {/* Breadcrumb */}
      <p className="text-xs text-[var(--velmora-text-light)] tracking-wider uppercase mb-4">
        Home / Shop / {product.category}
      </p>

      {/* Product name */}
      <h1 className="product-name text-2xl md:text-3xl tracking-[0.15em] text-[var(--velmora-text)] mb-2">
        {product.name}
      </h1>
      <p className="text-sm text-[var(--velmora-text-muted)] mb-4">{product.subtitle}</p>

      {/* Rating */}
      <div className="flex items-center gap-3 mb-6">
        <StarRating rating={product.rating} size={16} />
        <span className="text-sm text-[var(--velmora-text-muted)]">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="serif-heading text-2xl text-[var(--velmora-text)] mb-6">${product.price}</p>

      {/* Variant selector */}
      <div className="mb-6">
        <p className="text-xs tracking-wider uppercase text-[var(--velmora-text-muted)] mb-3">
          Color: <span className="text-[var(--velmora-text)]">{variant === 'gold' ? 'Gold' : 'Silver'} Tone</span>
        </p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-6 py-2 text-xs tracking-wider uppercase rounded-full border transition-all duration-300 ${
                variant === v
                  ? 'border-[var(--velmora-accent)] bg-[var(--velmora-accent)] text-white'
                  : 'border-[var(--velmora-border)] text-[var(--velmora-text-muted)] hover:border-[var(--velmora-accent)]'
              }`}
            >
              {v === 'gold' ? 'Gold' : 'Silver'}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-8">
        <p className="text-xs tracking-wider uppercase text-[var(--velmora-text-muted)] mb-3">Quantity</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-[var(--velmora-border)] rounded-sm">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-3 hover:text-[var(--velmora-accent)] transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="w-12 text-center text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-3 hover:text-[var(--velmora-accent)] transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Add to cart */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center gap-2 bg-[var(--velmora-accent)] text-white py-4 text-sm tracking-wider uppercase hover:bg-[var(--velmora-accent-hover)] transition-all duration-300 hover:shadow-lg"
        >
          <ShoppingBag size={16} />
          Add to Bag
        </button>
        <button
          onClick={() => setLiked(!liked)}
          className={`p-4 border border-[var(--velmora-border)] rounded-sm hover:border-[var(--velmora-accent)] transition-colors ${
            liked ? 'text-red-400' : 'text-[var(--velmora-text-muted)]'
          }`}
          aria-label="Add to wishlist"
        >
          <Heart size={18} className={liked ? 'fill-red-400' : ''} />
        </button>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-[var(--velmora-border-light)] mb-8">
        {[
          { label: 'Free Shipping', sub: 'Worldwide' },
          { label: '30-Day', sub: 'Easy Returns' },
          { label: '18K Gold', sub: 'Plated' },
        ].map((badge, i) => (
          <div key={i} className="text-center">
            <p className="text-xs font-medium text-[var(--velmora-text)]">{badge.label}</p>
            <p className="text-[10px] text-[var(--velmora-text-light)]">{badge.sub}</p>
          </div>
        ))}
      </div>

      {/* Accordions */}
      <div className="space-y-0">
        <Accordion title="Description" defaultOpen>
          <p>{product.description}</p>
        </Accordion>
        <Accordion title="Materials & Care">
          <p>{product.materials}</p>
          <p className="mt-2">{product.care}</p>
        </Accordion>
        <Accordion title="Shipping & Returns">
          <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
          <p className="mt-2">30-day hassle-free returns. Items must be unworn and in original packaging. Refunds processed within 5 business days.</p>
        </Accordion>
      </div>
    </div>
  );
}
