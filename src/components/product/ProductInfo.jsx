import { useState } from 'react';
import { Star, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Name & Price */}
      <div>
        <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-velmora-ink leading-tight">
          {product.name}
        </h1>
        <p className="text-2xl font-light text-velmora-charcoal mt-3">${product.price}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-stone'}
            />
          ))}
        </div>
        <span className="text-xs text-velmora-taupe">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-velmora-charcoal/70 leading-relaxed">{product.description}</p>

      {/* Variant selector */}
      <div>
        <p className="text-xs font-medium tracking-wider uppercase text-velmora-ink mb-3">Finish</p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`px-6 py-2.5 text-xs font-medium tracking-wider uppercase border transition-all ${
                selectedVariant === v
                  ? 'border-velmora-gold bg-velmora-gold text-white'
                  : 'border-velmora-stone text-velmora-charcoal hover:border-velmora-taupe'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-xs font-medium tracking-wider uppercase text-velmora-ink mb-3">Quantity</p>
        <div className="flex items-center border border-velmora-stone w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2.5 text-velmora-taupe hover:text-velmora-ink transition-colors"
          >
            <Minus size={14} />
          </button>
          <span className="px-5 py-2.5 text-sm font-medium min-w-[48px] text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2.5 text-velmora-taupe hover:text-velmora-ink transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button onClick={handleAdd} className="btn-primary w-full text-sm tracking-wider py-4">
        {added ? 'Added to Bag' : 'Add to Bag'} — ${(product.price * quantity).toFixed(0)}
      </button>

      {/* Accordions */}
      <div className="border-t border-velmora-stone pt-6 mt-2 space-y-1">
        <Accordion title="Description" defaultOpen>
          <p className="text-sm text-velmora-charcoal/70 leading-relaxed">{product.description}</p>
        </Accordion>
        <Accordion title="Materials & Care">
          <div className="space-y-3 text-sm text-velmora-charcoal/70">
            <div>
              <p className="font-medium text-velmora-ink mb-1">Materials</p>
              <p>{product.materials}</p>
            </div>
            <div>
              <p className="font-medium text-velmora-ink mb-1">Care</p>
              <p>{product.care}</p>
            </div>
          </div>
        </Accordion>
        <Accordion title="Shipping & Returns">
          <p className="text-sm text-velmora-charcoal/70 leading-relaxed">{product.shipping}</p>
        </Accordion>
      </div>
    </div>
  );
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-stone">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-medium tracking-wider uppercase text-velmora-ink">{title}</span>
        <span className={`text-velmora-taupe transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          <Plus size={14} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}