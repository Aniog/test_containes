import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: product.materials_care,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Delivery within 5-10 business days. 30-day hassle-free returns. Items must be unworn and in original packaging.',
    },
  ];

  return (
    <div className="md:pl-8 lg:pl-12">
      {product.badge && (
        <span className="inline-block bg-[var(--color-gold-100)] text-[var(--color-gold-700)] text-[10px] tracking-wider uppercase px-3 py-1.5 mb-4">
          {product.badge}
        </span>
      )}

      <h1 className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[var(--color-gold-400)] text-[var(--color-gold-400)]' : 'text-[var(--color-velmora-300)]'}`}
            />
          ))}
        </div>
        <span className="text-sm text-[var(--color-velmora-500)]">{product.rating} ({product.reviews} reviews)</span>
      </div>

      <p className="heading-serif text-2xl md:text-3xl mb-6">${product.price}</p>

      <div className="mb-6">
        <p className="text-xs tracking-[0.15em] uppercase mb-3">Color</p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-5 py-2.5 text-xs tracking-[0.1em] uppercase border transition-all ${
                variant === v
                  ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-white'
                  : 'border-[var(--color-velmora-300)] text-[var(--color-velmora-600)] hover:border-[var(--color-charcoal)]'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <p className="text-xs tracking-[0.15em] uppercase mb-3">Quantity</p>
        <div className="flex items-center border border-[var(--color-velmora-300)] w-32">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 hover:bg-[var(--color-velmora-100)] transition-colors"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="flex-1 text-center text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity(Math.min(10, quantity + 1))}
            className="p-3 hover:bg-[var(--color-velmora-100)] transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button onClick={handleAddToCart} className="btn-accent w-full mb-4">
        Add to Bag — ${(product.price * quantity).toFixed(2)}
      </button>

      <p className="text-xs text-[var(--color-velmora-500)] text-center mb-8">
        Free shipping · 30-day returns · Hypoallergenic
      </p>

      <div className="border-t border-[var(--color-velmora-200)]">
        {accordions.map(({ key, title, content }) => (
          <div key={key} className="border-b border-[var(--color-velmora-200)]">
            <button
              onClick={() => toggleAccordion(key)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-xs tracking-[0.15em] uppercase">{title}</span>
              {openAccordion === key ? (
                <ChevronUp className="w-4 h-4 text-[var(--color-velmora-400)]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[var(--color-velmora-400)]" />
              )}
            </button>
            {openAccordion === key && (
              <div className="pb-4">
                <p className="text-sm leading-relaxed text-[var(--color-velmora-700)]">{content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
