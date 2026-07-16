import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const accordionData = [
  { key: 'description', label: 'Description', content: 'description' },
  { key: 'materials', label: 'Materials & Care', content: 'materials' },
  { key: 'shipping', label: 'Shipping & Returns', content: 'shipping' },
];

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCart();

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    setQuantity(1);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="space-y-6">
      {/* Name & Price */}
      <div>
        <h1 id={product.nameId} className="product-name text-xl lg:text-2xl tracking-[0.2em] text-charcoal leading-tight">
          {product.name}
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sand'}`} />
            ))}
          </div>
          <span className="text-xs text-stone">({product.reviewCount} reviews)</span>
        </div>
        <p className="text-xl font-medium text-charcoal mt-3">${product.price}</p>
      </div>

      {/* Short description */}
      <p className="text-sm text-stone leading-relaxed">{product.description}</p>

      {/* Variant selector */}
      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-stone mb-3">
          Finish: <span className="text-charcoal font-medium">{selectedVariant === 'gold' ? 'Gold Tone' : 'Silver Tone'}</span>
        </p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.15em] border transition-all ${
                selectedVariant === v
                  ? 'border-charcoal bg-charcoal text-cream'
                  : 'border-sand/50 text-stone hover:border-charcoal'
              }`}
            >
              {v === 'gold' ? 'Gold Tone' : 'Silver Tone'}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & Add to Cart */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-sand/50">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 flex items-center justify-center hover:bg-sand/20 transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-10 text-center text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 flex items-center justify-center hover:bg-sand/20 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <button onClick={handleAdd} className="btn-primary w-full text-center">
          Add to Cart — ${(product.price * quantity).toFixed(2)}
        </button>
      </div>

      {/* Accordions */}
      <div className="border-t border-sand/30 pt-4 space-y-px">
        {accordionData.map((acc) => {
          const isOpen = openAccordion === acc.key;
          const contentKey = acc.key === 'materials' ? 'materials' : acc.key === 'shipping' ? 'shipping' : 'description';
          let displayContent;
          if (acc.key === 'materials') {
            displayContent = `${product.materials}. ${product.care}`;
          } else if (acc.key === 'shipping') {
            displayContent = product.shipping;
          } else {
            displayContent = product.description;
          }

          return (
            <div key={acc.key} className="border-b border-sand/20">
              <button
                onClick={() => toggleAccordion(acc.key)}
                className="w-full flex items-center justify-between py-4 text-xs uppercase tracking-[0.15em] text-charcoal hover:text-gold transition-colors"
              >
                {acc.label}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-60 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-sm text-stone leading-relaxed">{displayContent}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
