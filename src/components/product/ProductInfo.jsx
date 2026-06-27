import React, { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const accordionData = [
  {
    title: 'Description',
    content: (product) => (
      <p className="text-sm text-velmora-stone leading-relaxed">{product.description}</p>
    ),
  },
  {
    title: 'Materials & Care',
    content: (product) => (
      <div className="space-y-3 text-sm text-velmora-stone leading-relaxed">
        <p>{product.materials}</p>
        <p className="text-xs text-velmora-stone/70">Store in a cool, dry place. Avoid contact with water, perfumes, and lotions. Gently polish with a soft cloth.</p>
      </div>
    ),
  },
  {
    title: 'Shipping & Returns',
    content: (product) => (
      <div className="space-y-3 text-sm text-velmora-stone leading-relaxed">
        <p>{product.shipping}</p>
      </div>
    ),
  },
];

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({ ...product, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Product name */}
      <h1 className="product-name text-xl lg:text-2xl tracking-[0.12em] text-velmora-charcoal leading-snug">
        {product.name}
      </h1>

      {/* Price */}
      <p className="price-tag text-xl text-velmora-charcoal">${product.price}</p>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating)
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'text-velmora-sand'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-velmora-stone">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      <hr className="hr-hairline" />

      {/* Short description */}
      <p className="text-sm text-velmora-stone leading-relaxed">{product.description}</p>

      {/* Variant selector */}
      <div>
        <p className="text-xs tracking-[0.08em] uppercase text-velmora-charcoal mb-3">
          Finish
        </p>
        <div className="flex gap-3">
          {['gold', 'silver'].map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-5 py-2 text-xs tracking-[0.08em] uppercase border transition-velmora ${
                variant === v
                  ? 'border-velmora-gold bg-velmora-gold/5 text-velmora-gold-dark'
                  : 'border-velmora-sand/50 text-velmora-stone hover:border-velmora-charcoal/30'
              }`}
            >
              {v === 'gold' ? '18K Gold' : 'Silver Tone'}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center border border-velmora-sand/50 w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 hover:bg-velmora-sand/10 transition-velmora"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="px-5 text-sm font-medium min-w-[40px] text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:bg-velmora-sand/10 transition-velmora"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <button
          onClick={handleAdd}
          className={`flex-1 py-3.5 text-xs tracking-[0.15em] uppercase font-medium transition-velmora ${
            added
              ? 'bg-velmora-charcoal text-white'
              : 'bg-velmora-gold text-white hover:bg-velmora-gold-dark'
          }`}
        >
          {added ? 'Added to Bag' : 'Add to Bag'}
        </button>
      </div>

      <hr className="hr-hairline" />

      {/* Details */}
      <p className="text-xs text-velmora-stone leading-relaxed">{product.details}</p>

      <hr className="hr-hairline" />

      {/* Accordions */}
      <div className="space-y-0">
        {accordionData.map((section, i) => (
          <div key={i} className="border-b border-velmora-sand/30">
            <button
              onClick={() => setOpenAccordion(openAccordion === i ? -1 : i)}
              className="w-full flex items-center justify-between py-4 text-xs tracking-[0.1em] uppercase text-velmora-charcoal font-medium hover:text-velmora-gold-dark transition-velmora"
            >
              {section.title}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  openAccordion === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openAccordion === i ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              {section.content(product)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}