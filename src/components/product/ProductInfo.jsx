import React, { useState } from 'react';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-stone/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-sans tracking-widest uppercase text-velmora-espresso">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-velmora-muted" /> : <ChevronDown className="w-4 h-4 text-velmora-muted" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60 pb-4' : 'max-h-0'}`}>
        <p className="text-sm text-velmora-warm-gray leading-relaxed">{children}</p>
      </div>
    </div>
  );
};

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, openDrawer } = useCart();

  const handleAdd = () => {
    addItem(product, selectedVariant.value, quantity);
    setAdded(true);
    openDrawer();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      {/* Product name */}
      <h1
        id={`pdp-product-name-${product.id}`}
        className="product-name text-xl md:text-2xl text-velmora-espresso tracking-[0.12em]"
      >
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-3">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-stone'}`} />
          ))}
        </div>
        <span className="text-xs text-velmora-muted">{product.rating} ({product.reviewCount} reviews)</span>
      </div>

      {/* Price */}
      <p className="text-xl font-medium text-velmora-charcoal mt-4">${product.price}</p>

      {/* Description */}
      <p className="text-sm text-velmora-warm-gray leading-relaxed mt-5">{product.description}</p>

      {/* Variant selector */}
      <div className="mt-6">
        <p className="text-[11px] font-sans tracking-widest uppercase text-velmora-warm-gray mb-3">
          Finish: <span className="text-velmora-espresso">{selectedVariant.name}</span>
        </p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v.value}
              onClick={() => setSelectedVariant(v)}
              className={`flex items-center gap-2 px-4 py-2.5 border text-xs font-sans tracking-wider uppercase transition-all duration-300 rounded-sm
                ${selectedVariant.value === v.value
                  ? 'border-velmora-gold bg-velmora-gold/5 text-velmora-gold'
                  : 'border-velmora-stone text-velmora-warm-gray hover:border-velmora-taupe'
                }`}
            >
              <span
                className="w-3 h-3 rounded-full border border-velmora-stone"
                style={{ backgroundColor: v.hex }}
              />
              {v.name}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity selector */}
      <div className="mt-6">
        <p className="text-[11px] font-sans tracking-widest uppercase text-velmora-warm-gray mb-3">Quantity</p>
        <div className="flex items-center border border-velmora-stone w-fit rounded-sm">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 text-velmora-warm-gray hover:text-velmora-espresso transition-colors"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="text-sm font-medium px-5 text-velmora-espresso min-w-[40px] text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 text-velmora-warm-gray hover:text-velmora-espresso transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button onClick={handleAdd} className="btn-primary w-full mt-8 text-sm py-4">
        {added ? 'Added to Bag' : 'Add to Bag'}
      </button>

      <p className="text-center text-[11px] text-velmora-muted mt-3">Free shipping on orders $50+</p>

      {/* Accordions */}
      <div className="mt-8 border-t border-velmora-stone/50">
        <Accordion title="Description" defaultOpen>{product.details}</Accordion>
        <Accordion title="Materials & Care">{product.materials}</Accordion>
        <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
      </div>
    </div>
  );
}
