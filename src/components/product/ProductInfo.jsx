import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

function AccordionSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-hairline">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-widest text-espresso">{title}</span>
        <ChevronDown className={`w-4 h-4 text-taupe transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-sm text-taupe leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, selectedVariant, quantity);
    setQuantity(1);
  };

  return (
    <div>
      {/* Product name */}
      <h1 className="font-serif text-xl md:text-2xl uppercase tracking-widest text-espresso">
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-lg text-espresso mt-3 font-medium">${product.price}</p>

      {/* Rating */}
      <div className="flex items-center gap-1.5 mt-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-star text-star' : 'text-hairline'}`} />
        ))}
        <span className="text-xs text-taupe ml-1">({product.reviews} reviews)</span>
      </div>

      {/* Description */}
      <p className="text-sm text-taupe leading-relaxed mt-5">{product.description}</p>

      {/* Variant selector */}
      <div className="mt-6">
        <p className="text-xs uppercase tracking-widest text-espresso mb-3">Finish</p>
        <div className="flex gap-3">
          {product.variants.map(v => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${
                selectedVariant === v
                  ? 'border-gold bg-gold/5 text-gold'
                  : 'border-hairline text-taupe hover:border-gold/50'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-hairline">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2.5 hover:text-gold transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="px-4 text-sm text-espresso">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2.5 hover:text-gold transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          <span className="text-xs text-taupe">Quantity</span>
        </div>

        <button onClick={handleAdd} className="btn-primary w-full text-center">
          Add to Bag — ${(product.price * quantity).toFixed(2)}
        </button>
      </div>

      {/* Accordions */}
      <div className="mt-10">
        <AccordionSection title="Description" defaultOpen={true}>
          {product.description}
        </AccordionSection>
        <AccordionSection title="Materials & Care">
          <strong>Materials:</strong> {product.materials}<br /><br />
          <strong>Care:</strong> {product.care}
        </AccordionSection>
        <AccordionSection title="Shipping & Returns">
          {product.shipping}
        </AccordionSection>
      </div>
    </div>
  );
}
