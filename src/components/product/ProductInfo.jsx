import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react';
import { useCart } from '@/components/cart/CartContext';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0].value);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      variant: selectedVariant,
      price: product.price,
      quantity,
      name: product.name,
    });
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="animate-slide-up">
      {/* Product Name */}
      <h1 className="font-[var(--font-serif)] text-2xl md:text-3xl font-semibold tracking-wider uppercase leading-tight">
        {product.name}
      </h1>

      {/* Price & Rating */}
      <div className="flex items-center gap-4 mt-3">
        <span className="text-xl font-medium">${product.price}</span>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--color-border)]'}`}
            />
          ))}
          <span className="text-xs text-[var(--color-text-muted)] ml-1">({product.reviewCount} reviews)</span>
        </div>
      </div>

      {/* Short Description */}
      <p className="mt-5 text-[var(--color-text-secondary)] leading-relaxed text-sm">
        {product.description}
      </p>

      {/* Variants */}
      <div className="mt-7">
        <span className="text-xs tracking-wider uppercase text-[var(--color-text-muted)] font-medium">Finish</span>
        <div className="flex gap-3 mt-2">
          {product.variants.map((v) => (
            <button
              key={v.value}
              onClick={() => setSelectedVariant(v.value)}
              className={`px-5 py-2.5 text-sm tracking-wide border transition-colors ${
                selectedVariant === v.value
                  ? 'border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white'
                  : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-primary)]'
              }`}
            >
              {v.name}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="mt-7 space-y-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-[var(--color-border)] rounded-sm">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-3 hover:text-[var(--color-accent)] transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="px-4 text-sm tabular-nums min-w-[3rem] text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-3 hover:text-[var(--color-accent)] transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          <span className="text-xs text-[var(--color-text-muted)]">${(product.price * quantity).toFixed(0)} total</span>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full py-3.5 bg-[var(--color-surface-dark)] text-white font-medium text-sm tracking-wider uppercase hover:bg-[var(--color-velmora-800)] transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-4 h-4" /> Add to Cart
        </button>
      </div>

      {/* Accordions */}
      <div className="mt-10 border-t border-[var(--color-border)]">
        {[
          { key: 'description', label: 'Description', content: product.details },
          { key: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
          { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
        ].map(({ key, label, content }) => (
          <div key={key} className="border-b border-[var(--color-border)]">
            <button
              onClick={() => toggleAccordion(key)}
              className="w-full flex items-center justify-between py-4 text-sm tracking-wider uppercase font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {label}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${openAccordion === key ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openAccordion === key ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                {content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
