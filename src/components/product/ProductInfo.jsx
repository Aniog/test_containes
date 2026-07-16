import React, { useState } from 'react';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '@/context/CartContext';

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-clay/70">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs font-sans uppercase tracking-wider text-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-stone" />
        ) : (
          <ChevronDown className="w-4 h-4 text-stone" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm font-sans text-stone leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product.id, selectedVariant.id, product.price, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      {/* Product name */}
      <h1
        id={`pdp-title-${product.id}`}
        className="product-name text-xl md:text-2xl lg:text-3xl text-charcoal leading-tight"
      >
        {product.name}
      </h1>

      {/* Price */}
      <p className="mt-3 text-lg font-sans font-medium text-charcoal">
        ${product.price}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-clay text-clay'
            }`}
          />
        ))}
        <span className="text-xs font-sans text-stone ml-1">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Description */}
      <p
        id={`pdp-desc-${product.id}`}
        className="mt-6 text-sm font-sans text-stone leading-relaxed"
      >
        {product.description}
      </p>

      {/* Variant selector */}
      <div className="mt-7">
        <p className="text-[11px] font-sans uppercase tracking-wider text-stone mb-3">
          Finish
        </p>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant)}
              className={`px-6 py-2.5 text-sm font-sans border transition-colors uppercase tracking-wide ${
                selectedVariant.id === variant.id
                  ? 'border-charcoal bg-charcoal text-cream'
                  : 'border-clay text-charcoal hover:border-charcoal'
              }`}
            >
              {variant.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-6">
        <p className="text-[11px] font-sans uppercase tracking-wider text-stone mb-3">
          Quantity
        </p>
        <div className="flex items-center border border-clay w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-12 h-10 flex items-center justify-center text-sm font-sans text-charcoal border-x border-clay">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        className="mt-7 btn-primary w-full text-sm"
      >
        {added ? 'Added to Bag!' : 'Add to Bag'}
      </button>

      {/* Accordions */}
      <div className="mt-10">
        <AccordionItem title="Description">
          {product.description}
        </AccordionItem>
        <AccordionItem title="Materials & Care">
          <p className="mb-2">
            <strong className="text-charcoal font-medium">Materials:</strong>{' '}
            {product.materials}
          </p>
          <p>
            <strong className="text-charcoal font-medium">Care:</strong>{' '}
            {product.care}
          </p>
        </AccordionItem>
        <AccordionItem title="Shipping & Returns">
          {product.shipping}
        </AccordionItem>
      </div>
    </div>
  );
}
