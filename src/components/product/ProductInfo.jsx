import React, { useState } from 'react';
import { Star, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Category */}
      <p className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans font-medium">
        {product.category}
      </p>

      {/* Name */}
      <h1 className="font-serif text-2xl md:text-3xl text-brand-dark tracking-[0.12em] leading-tight">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'text-brand-gold fill-brand-gold'
                  : 'text-brand-border'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-brand-muted font-sans">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="font-sans text-2xl text-brand-gold font-medium">${product.price}</p>

      {/* Description */}
      <p className="font-sans text-sm text-brand-charcoal leading-relaxed">
        {product.description}
      </p>

      {/* Variant selector */}
      <div>
        <p className="font-sans text-xs tracking-widest uppercase text-brand-muted mb-3">
          Finish
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setSelectedVariant('gold')}
            className={`h-10 px-6 text-xs tracking-widest uppercase font-sans rounded-sm border transition-all duration-300 ${
              selectedVariant === 'gold'
                ? 'border-brand-gold bg-brand-gold text-white'
                : 'border-brand-border text-brand-charcoal hover:border-brand-gold'
            }`}
          >
            Gold Tone
          </button>
          <button
            onClick={() => setSelectedVariant('silver')}
            className={`h-10 px-6 text-xs tracking-widest uppercase font-sans rounded-sm border transition-all duration-300 ${
              selectedVariant === 'silver'
                ? 'border-brand-gold bg-brand-gold text-white'
                : 'border-brand-border text-brand-charcoal hover:border-brand-gold'
            }`}
          >
            Silver Tone
          </button>
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="font-sans text-xs tracking-widest uppercase text-brand-muted mb-3">
          Quantity
        </p>
        <div className="flex items-center gap-4 border border-brand-border rounded-sm w-fit px-3 h-10">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-brand-muted hover:text-brand-dark transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="font-sans text-sm font-medium text-brand-dark w-6 text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-brand-muted hover:text-brand-dark transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <Button
        size="lg"
        className="w-full"
        onClick={handleAddToCart}
      >
        {added ? 'Added to Cart ✓' : 'Add to Cart'}
      </Button>

      {/* Accordion info */}
      <div className="border-t border-brand-border pt-6 space-y-4">
        <AccordionItem title="Description">
          <p className="font-sans text-sm text-brand-charcoal leading-relaxed">
            {product.description}
          </p>
        </AccordionItem>
        <AccordionItem title="Materials & Care">
          <div className="space-y-2 font-sans text-sm text-brand-charcoal">
            <p>{product.details}</p>
            <p className="mt-2">{product.care}</p>
          </div>
        </AccordionItem>
        <AccordionItem title="Shipping & Returns">
          <p className="font-sans text-sm text-brand-charcoal leading-relaxed">
            {product.shipping}
          </p>
        </AccordionItem>
      </div>
    </div>
  );
}

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-3 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-brand-dark font-medium">
          {title}
        </span>
        <span
          className={`text-brand-muted transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          <Plus className="w-4 h-4" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}