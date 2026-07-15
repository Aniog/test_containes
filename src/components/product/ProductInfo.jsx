import React, { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductInfo({ product }) {
  const { addItem, setIsCartOpen } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setIsCartOpen(true);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: product.materials + '\n\nTo keep your jewelry looking its best, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently polish with a soft cloth.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping (2-4 days) available at checkout.\n\n30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets include a prepaid return label.',
    },
  ];

  return (
    <div className="lg:pl-8 lg:sticky lg:top-24">
      {/* Product Name */}
      <h1 className="velmora-heading-uppercase text-2xl sm:text-3xl text-[var(--velmora-text)] tracking-wider">
        {product.name}
      </h1>
      <p className="text-sm text-[var(--velmora-text-muted)] mt-2">
        {product.subtitle}
      </p>

      {/* Price & Rating */}
      <div className="flex items-center gap-4 mt-4">
        <span className="velmora-heading text-2xl text-[var(--velmora-text)]">
          ${product.price}
        </span>
        <div className="flex items-center gap-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-[var(--velmora-accent)] text-[var(--velmora-accent)]'
                    : 'text-[var(--velmora-border)]'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-[var(--velmora-text-muted)] ml-1">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
      </div>

      <div className="hairline my-6" />

      {/* Variant Selector */}
      <div className="mb-6">
        <p className="text-xs tracking-wider uppercase text-[var(--velmora-text-muted)] mb-3">
          Color
        </p>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => variant.available && setSelectedVariant(variant.id)}
              disabled={!variant.available}
              className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-all ${
                selectedVariant === variant.id
                  ? 'border-[var(--velmora-accent)] bg-[var(--velmora-accent)]/10 text-[var(--velmora-text)]'
                  : variant.available
                  ? 'border-[var(--velmora-border)] text-[var(--velmora-text-muted)] hover:border-[var(--velmora-text)]'
                  : 'border-[var(--velmora-border)] text-[var(--velmora-border)] cursor-not-allowed'
              }`}
            >
              {variant.name}
              {!variant.available && ' (Sold Out)'}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <p className="text-xs tracking-wider uppercase text-[var(--velmora-text-muted)] mb-3">
          Quantity
        </p>
        <div className="flex items-center border border-[var(--velmora-border)] w-32">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 hover:bg-[var(--velmora-border)] transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="flex-1 text-center text-sm font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:bg-[var(--velmora-border)] transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="velmora-btn-dark w-full mb-4"
      >
        Add to Cart — ${(product.price * quantity).toFixed(2)}
      </button>

      <p className="text-xs text-[var(--velmora-text-muted)] text-center">
        Free shipping · 30-day returns
      </p>

      <div className="hairline my-6" />

      {/* Accordions */}
      <div className="space-y-0">
        {accordions.map((accordion) => (
          <div key={accordion.id} className="border-b border-[var(--velmora-border)]">
            <button
              onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-xs tracking-wider uppercase text-[var(--velmora-text)]">
                {accordion.title}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[var(--velmora-text-muted)] transition-transform duration-300 ${
                  openAccordion === accordion.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openAccordion === accordion.id && (
              <div className="pb-4">
                <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed whitespace-pre-line">
                  {accordion.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
