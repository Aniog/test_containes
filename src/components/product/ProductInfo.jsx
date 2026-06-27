import React, { useState } from 'react';
import { Star, Minus, Plus, Check, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';

export default function ProductInfo({ product }) {
  const [variantId, setVariantId] = useState(product.variants[0]?.id || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product.id, variantId, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      {/* Breadcrumb-ish eyebrow */}
      <p className="label-light mb-4">
        <span className="capitalize">{product.category}</span>
        {product.badge && (
          <>
            <span className="mx-2 text-hairline">·</span>
            <span className="text-gold">{product.badge}</span>
          </>
        )}
      </p>

      {/* Name */}
      <h1
        id={`pdp-${product.id}-name`}
        className="product-name text-[0.95rem] md:text-[1.05rem] text-ink"
      >
        {product.name}
      </h1>
      <p
        id={`pdp-${product.id}-subtitle`}
        className="editorial text-xl md:text-2xl text-charcoal mt-3"
      >
        {product.subtitle}
      </p>

      {/* Rating + price */}
      <div className="mt-7 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-3.5 h-3.5',
                  i < Math.round(product.rating)
                    ? 'text-gold fill-current'
                    : 'text-hairline fill-current'
                )}
                strokeWidth={0}
              />
            ))}
          </div>
          <span className="text-xs text-charcoal">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
      </div>

      <div className="mt-7 flex items-baseline gap-3">
        <p className="font-serif text-2xl md:text-3xl text-ink">{formatPrice(product.price)}</p>
        {product.compareAt && (
          <p className="text-base text-muted line-through">{formatPrice(product.compareAt)}</p>
        )}
      </div>

      <p
        id={`pdp-${product.id}-description`}
        className="mt-7 text-sm md:text-[0.95rem] text-charcoal leading-relaxed max-w-prose"
      >
        {product.description}
      </p>

      <div id={`pdp-${product.id}-material`} className="hidden">
        {product.material === '18k-gold' ? '18K gold plated' : product.material}
      </div>

      {/* Variant selector */}
      <div className="mt-9">
        <div className="flex items-center justify-between mb-3">
          <p className="label text-ink">Finish</p>
          <p className="label-light">
            {product.variants.find((v) => v.id === variantId)?.label}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              type="button"
              onClick={() => setVariantId(variant.id)}
              className={cn('pill', variantId === variant.id && 'is-active')}
              aria-pressed={variantId === variant.id}
            >
              <span
                className="inline-block w-3.5 h-3.5 rounded-full border border-charcoal/20"
                style={{ backgroundColor: variant.swatch }}
              />
              {variant.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-7">
        <p className="label text-ink mb-3">Quantity</p>
        <div className="inline-flex items-center border border-ink">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-11 h-11 flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors"
          >
            <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((q) => q + 1)}
            className="w-11 h-11 flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors"
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        type="button"
        onClick={handleAdd}
        className={cn(
          'mt-7 w-full inline-flex items-center justify-center gap-3 py-4 text-[0.72rem] tracking-[0.18em] uppercase font-medium transition-colors',
          justAdded ? 'bg-gold text-ink' : 'bg-ink text-cream hover:bg-charcoal'
        )}
      >
        {justAdded ? (
          <>
            <Check className="w-4 h-4" strokeWidth={1.5} /> Added to Bag
          </>
        ) : (
          <>
            <ShoppingBag className="w-4 h-4" strokeWidth={1.5} /> Add to Bag · {formatPrice(product.price * quantity)}
          </>
        )}
      </button>

      {/* Reassurance micro-row */}
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.7rem] tracking-[0.14em] uppercase text-muted">
        <li>Free shipping over $75</li>
        <li className="text-hairline">·</li>
        <li>30-day returns</li>
        <li className="text-hairline">·</li>
        <li>Hypoallergenic</li>
      </ul>
    </div>
  );
}