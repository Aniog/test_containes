import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const accordionData = [
  {
    title: 'Description',
    content: (product) => product.details,
  },
  {
    title: 'Materials & Care',
    content: (product) => product.materials,
  },
  {
    title: 'Shipping & Returns',
    content: (product) => product.shipping,
  },
];

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.colorVariants[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(0);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setQuantity(1);
  };

  return (
    <div className="space-y-6">
      {/* Product name */}
      <div>
        <h1 className="font-serif text-2xl lg:text-3xl tracking-[0.15em] uppercase text-velmora-ink leading-tight">
          {product.name}
        </h1>
        <p className="text-2xl font-sans font-medium text-velmora-ink mt-3">
          ${product.price}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`} />
        ))}
        <span className="text-xs font-sans text-velmora-stone ml-1">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      <div className="hairline-full" />

      {/* Description */}
      <p className="text-sm font-sans text-velmora-stone leading-relaxed">
        {product.description}
      </p>

      {/* Color variants */}
      <div>
        <p className="text-xs font-sans tracking-[0.1em] uppercase text-velmora-ink mb-3">
          Finish
        </p>
        <div className="flex gap-3">
          {product.colorVariants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-5 py-2.5 text-xs font-sans tracking-[0.05em] border transition-all duration-200 ${
                selectedVariant === variant
                  ? 'border-velmora-gold text-velmora-gold bg-velmora-gold/5'
                  : 'border-velmora-sand text-velmora-stone hover:border-velmora-stone'
              }`}
            >
              {variant === 'Gold' ? 'Gold Tone' : 'Silver Tone'}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="flex gap-4 pt-2">
        <div className="flex items-center border border-velmora-sand">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-11 flex items-center justify-center text-velmora-stone hover:text-velmora-ink transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-10 text-center text-sm font-sans font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-11 flex items-center justify-center text-velmora-stone hover:text-velmora-ink transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <button onClick={handleAdd} className="btn-primary flex-1">
          Add to Cart — ${(product.price * quantity).toFixed(2)}
        </button>
      </div>

      <div className="hairline-full" />

      {/* Accordions */}
      <div className="space-y-0">
        {accordionData.map((item, idx) => (
          <div key={item.title} className="border-b border-velmora-sand">
            <button
              onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-xs font-sans tracking-[0.1em] uppercase text-velmora-ink">
                {item.title}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-velmora-stone transition-transform duration-300 ${
                  openAccordion === idx ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openAccordion === idx ? 'max-h-64 pb-4' : 'max-h-0'
              }`}
            >
              <p className="text-sm font-sans text-velmora-stone leading-relaxed">
                {item.content(product)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}