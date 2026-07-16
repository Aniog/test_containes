import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-sand/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-xs font-medium tracking-wider uppercase text-velmora-charcoal"
      >
        {title}
        <ChevronDown className={`w-4 h-4 text-velmora-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-velmora-stone leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const variants = ['Gold', 'Silver Tone'];

  const handleAdd = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Product name */}
      <div>
        <p className="text-xs font-medium tracking-widest uppercase text-velmora-stone mb-2">{product.category}</p>
        <h1
          id={product.titleId}
          className="product-name text-2xl md:text-3xl mb-3"
        >
          {product.name}
        </h1>
        <p className="text-2xl font-light text-velmora-charcoal">${product.price}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`}
            />
          ))}
        </div>
        <span className="text-xs text-velmora-stone">{product.rating} ({product.reviewCount} reviews)</span>
      </div>

      {/* Description */}
      <p id={product.descId} className="text-sm text-velmora-stone leading-relaxed">
        {product.description}
      </p>

      {/* Variant selector */}
      <div>
        <p className="text-xs font-medium tracking-wider uppercase text-velmora-charcoal mb-3">Finish</p>
        <div className="flex gap-3">
          {variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                variant === v
                  ? 'bg-velmora-charcoal text-white'
                  : 'bg-velmora-sand/50 text-velmora-stone hover:bg-velmora-sand'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to cart */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium tracking-wider uppercase text-velmora-charcoal">Quantity</p>
          <div className="flex items-center border border-velmora-sand">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-9 flex items-center justify-center text-velmora-stone hover:text-velmora-charcoal transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-9 h-9 flex items-center justify-center text-sm font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-9 flex items-center justify-center text-velmora-stone hover:text-velmora-charcoal transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <button
          onClick={handleAdd}
          className={`btn-primary w-full text-xs transition-all duration-300 ${
            added ? 'bg-green-600 hover:bg-green-700' : ''
          }`}
        >
          {added ? 'Added to Bag' : 'Add to Bag'}
        </button>
      </div>

      {/* Accordions */}
      <div className="mt-4">
        <Accordion title="Description" defaultOpen={true}>
          {product.details}
        </Accordion>
        <Accordion title="Materials & Care">
          {product.care}
        </Accordion>
        <Accordion title="Shipping & Returns">
          {product.shipping}
        </Accordion>
      </div>
    </div>
  );
}