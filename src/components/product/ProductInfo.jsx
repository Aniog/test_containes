import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="hairline-divider">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-sm font-medium text-text-primary hover:text-accent transition-colors"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-text-secondary leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState(product.variants[0]);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, variant, qty);
    setQty(1);
  };

  return (
    <div className="space-y-6">
      {/* Name & price */}
      <div>
        <p className="text-xs uppercase tracking-wider text-accent font-medium">
          {product.category}
        </p>
        <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-wider font-medium mt-2 text-text-primary">
          {product.name}
        </h1>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-xl font-medium text-text-primary">${product.price}</span>
          <span className="text-xs text-text-secondary">USD</span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < Math.floor(product.rating) ? '#A68A56' : 'none'}
              className={i < Math.floor(product.rating) ? 'text-accent' : 'text-border'}
            />
          ))}
        </div>
        <span className="text-xs text-text-secondary">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed">{product.description}</p>

      {/* Variant selector */}
      {product.variants.length > 1 && (
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-text-primary mb-3">
            Finish
          </p>
          <div className="flex gap-3">
            {product.variants.map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={`px-5 py-2 rounded-full text-xs font-medium border transition-all duration-300 ${
                  variant === v
                    ? 'border-accent bg-accent/5 text-accent'
                    : 'border-border text-text-secondary hover:border-accent/40'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-text-primary mb-3">
          Quantity
        </p>
        <div className="flex items-center border border-border rounded-full w-fit">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="p-2.5 hover:text-accent transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="w-10 text-center text-sm font-medium">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="p-2.5 hover:text-accent transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button onClick={handleAdd} className="btn-primary w-full text-sm py-3.5">
        Add to Bag — ${(product.price * qty).toFixed(2)}
      </button>

      {/* Accordions */}
      <div className="mt-8 space-y-0">
        <Accordion title="Description">{product.details}</Accordion>
        <Accordion title="Materials & Care">{product.care}</Accordion>
        <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
      </div>
    </div>
  );
}
