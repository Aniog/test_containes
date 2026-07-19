import React, { useState } from 'react';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import StarRating from '@/components/ui/StarRating';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="space-y-6">
      {/* Badge */}
      {product.badge && (
        <span className="inline-block px-3 py-1 bg-brand-gold-muted text-brand-gold text-xs font-medium uppercase tracking-widest-plus">
          {product.badge}
        </span>
      )}

      {/* Title */}
      <h1
        id="product-detail-title"
        className="font-serif text-3xl md:text-4xl font-medium uppercase tracking-widest-plus text-brand-charcoal"
      >
        {product.name}
      </h1>

      {/* Rating */}
      <StarRating rating={product.rating} count={product.reviewCount} size="md" />

      {/* Price */}
      <p className="text-2xl font-semibold text-brand-charcoal">
        {formatPrice(product.price)}
      </p>

      {/* Description */}
      <p
        id="product-detail-desc"
        className="text-brand-warm-gray leading-relaxed"
      >
        {product.description}
      </p>

      {/* Variant selector */}
      <div>
        <p className="text-sm font-medium text-brand-charcoal mb-3 uppercase tracking-wider">
          Tone: <span className="text-brand-warm-gray normal-case">{product.variants.find(v => v.id === selectedVariant)?.name}</span>
        </p>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => variant.available && setSelectedVariant(variant.id)}
              disabled={!variant.available}
              className={cn(
                'px-6 py-2.5 text-sm font-medium uppercase tracking-wider border transition-all duration-300',
                selectedVariant === variant.id
                  ? 'border-brand-gold bg-brand-gold text-white'
                  : variant.available
                  ? 'border-brand-light-gray text-brand-charcoal hover:border-brand-gold hover:text-brand-gold'
                  : 'border-brand-light-gray text-brand-medium-gray cursor-not-allowed opacity-50'
              )}
            >
              {variant.name}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-sm font-medium text-brand-charcoal mb-3 uppercase tracking-wider">
          Quantity
        </p>
        <div className="inline-flex items-center border border-brand-light-gray">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center text-brand-warm-gray hover:text-brand-gold transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 h-10 flex items-center justify-center text-sm font-medium text-brand-charcoal border-x border-brand-light-gray">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center text-brand-warm-gray hover:text-brand-gold transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart button */}
      <Button onClick={handleAddToCart} className="w-full" size="lg">
        <ShoppingBag className="w-5 h-5 mr-2" />
        Add to Cart — {formatPrice(product.price * quantity)}
      </Button>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-light-gray">
        {[
          { label: 'Free Shipping', sublabel: 'On all orders' },
          { label: '30-Day Returns', sublabel: 'Hassle-free' },
          { label: 'Hypoallergenic', sublabel: '18K Gold Plated' },
        ].map((badge) => (
          <div key={badge.label} className="text-center">
            <p className="text-xs font-medium text-brand-charcoal uppercase tracking-wider">
              {badge.label}
            </p>
            <p className="text-[10px] text-brand-warm-gray mt-0.5">
              {badge.sublabel}
            </p>
          </div>
        ))}
      </div>

      {/* Accordions */}
      <Accordion>
        <AccordionItem title="Description" defaultOpen>
          <p>{product.fullDescription}</p>
        </AccordionItem>
        <AccordionItem title="Materials & Care">
          <div className="space-y-3">
            <p><strong>Materials:</strong> {product.materials}</p>
            <p><strong>Care:</strong> {product.care}</p>
          </div>
        </AccordionItem>
        <AccordionItem title="Shipping & Returns">
          <div className="space-y-3">
            <p>{product.shipping}</p>
            <p>{product.returns}</p>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
