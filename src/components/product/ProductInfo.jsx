import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import Accordion from '../ui/Accordion';

const ProductInfo = ({ product }) => {
  const [variant, setVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem, setCartOpen } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant,
      quantity,
    });
    setCartOpen(true);
  };

  return (
    <div className="flex flex-col">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{product.badge || 'Velmora'}</p>
      <h1 className="mt-2 font-serif text-3xl uppercase tracking-product text-ink md:text-4xl">{product.name}</h1>

      <div className="mt-3 flex items-center gap-3">
        <div className="flex gap-0.5 text-accent" aria-label={`${product.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill={idx < Math.round(product.rating) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-ink-secondary">{product.rating} · {product.reviewCount} reviews</span>
      </div>

      <p className="mt-4 font-serif text-2xl text-ink">${product.price}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink-secondary">{product.description}</p>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink">Finish</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.variants.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setVariant(v)}
              className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors ${
                variant === v ? 'border-ink bg-ink text-white' : 'border-border text-ink-secondary hover:border-ink hover:text-ink'
              }`}
            >
              {v === 'gold' ? 'Gold' : 'Silver'}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink">Quantity</p>
        <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-border">
          <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-2 text-ink-secondary transition-colors hover:text-ink" aria-label="Decrease quantity">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14"/></svg>
          </button>
          <span className="text-sm font-medium text-ink">{quantity}</span>
          <button type="button" onClick={() => setQuantity((q) => q + 1)} className="p-2 text-ink-secondary transition-colors hover:text-ink" aria-label="Increase quantity">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>

      <button type="button" onClick={handleAddToCart} className="btn-primary mt-8 w-full">
        Add to Cart
      </button>

      <div className="mt-8">
        <Accordion
          items={[
            { title: 'Description', content: product.details, defaultOpen: true },
            { title: 'Materials & Care', content: product.materials },
            { title: 'Shipping & Returns', content: product.shipping },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
