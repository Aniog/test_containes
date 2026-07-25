import React, { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const ProductInfo = ({ product }) => {
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem, toggleCart } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }
    toggleCart();
  };

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: product.care },
    { id: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl md:text-4xl text-brand-text uppercase tracking-widest">
          {product.name}
        </h1>
        <p className="mt-2 text-2xl text-brand-text">${product.price}</p>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
            <span className="text-sm text-brand-muted">{product.rating}</span>
          </div>
          <span className="text-sm text-brand-subtle">({product.reviewCount} reviews)</span>
        </div>
      </div>

      <p className="text-sm text-brand-muted leading-relaxed">{product.description}</p>

      <div>
        <p className="text-xs uppercase tracking-widest text-brand-subtle mb-2">Finish</p>
        <div className="flex gap-2">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition-colors ${
                variant === v
                  ? 'border-brand-gold bg-brand-gold text-white'
                  : 'border-brand-border text-brand-muted hover:border-brand-gold'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest text-brand-subtle mb-2">Quantity</p>
        <div className="inline-flex items-center border border-brand-border rounded-full">
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-4 py-2 text-brand-muted hover:text-brand-text transition-colors" aria-label="Decrease quantity">
            -
          </button>
          <span className="px-4 py-2 text-sm text-brand-text min-w-[2rem] text-center">{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)} className="px-4 py-2 text-brand-muted hover:text-brand-text transition-colors" aria-label="Increase quantity">
            +
          </button>
        </div>
      </div>

      <button onClick={handleAddToCart} className="w-full btn-primary">
        Add to Cart
      </button>

      <div className="border-t border-brand-border pt-4 space-y-3">
        {accordions.map((item) => (
          <div key={item.id} className="border-b border-brand-border last:border-b-0">
            <button
              onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
              className="flex items-center justify-between w-full py-3 text-left"
            >
              <span className="text-sm uppercase tracking-widest text-brand-text">{item.title}</span>
              <ChevronDown className={`h-4 w-4 text-brand-subtle transition-transform duration-300 ${openAccordion === item.id ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === item.id && (
              <p className="pb-3 text-sm text-brand-muted leading-relaxed">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
