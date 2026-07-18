import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { useCartDispatch } from '@/context/CartContext';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const { addItem, openCart } = useCartDispatch();

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    openCart();
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const accordions = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ];

  return (
    <div className="space-y-6">
      {/* Category */}
      <p className="text-[10px] tracking-[0.2em] uppercase text-velmora-muted">{product.category}</p>

      {/* Name */}
      <h1
        id={`pdp-name-${product.id}`}
        className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium tracking-[0.08em] uppercase text-velmora-black leading-tight"
      >
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-xl md:text-2xl font-light text-velmora-black">${product.price}</p>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-velmora-muted">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-velmora-sand/60" />

      {/* Short description */}
      <p className="text-sm text-velmora-muted leading-relaxed">{product.description}</p>

      {/* Variants */}
      <div>
        <p className="text-[10px] tracking-[0.15em] uppercase text-velmora-muted mb-3">
          Finish: <span className="text-velmora-black font-medium ml-1">{selectedVariant}</span>
        </p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`px-5 py-2 text-xs tracking-[0.1em] uppercase border transition-all ${
                selectedVariant === v
                  ? 'border-velmora-gold bg-velmora-gold/5 text-velmora-gold'
                  : 'border-velmora-sand text-velmora-muted hover:border-velmora-muted'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="flex gap-3 items-stretch">
        <div className="flex items-center border border-velmora-sand">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-12 flex items-center justify-center text-velmora-muted hover:text-velmora-black transition-colors"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-10 text-center text-sm font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-12 flex items-center justify-center text-velmora-muted hover:text-velmora-black transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={handleAdd}
          className="flex-1 flex items-center justify-center gap-2 bg-velmora-espresso text-white text-xs tracking-[0.2em] uppercase hover:bg-velmora-gold-dark transition-all duration-300"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart — ${(product.price * quantity).toFixed(0)}
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-velmora-sand/60" />

      {/* Accordions */}
      <div className="space-y-0">
        {accordions.map((a) => (
          <div key={a.key} className="border-b border-velmora-sand/40">
            <button
              onClick={() => toggleAccordion(a.key)}
              className="w-full flex items-center justify-between py-4 text-xs tracking-[0.15em] uppercase font-medium text-velmora-black hover:text-velmora-gold transition-colors"
            >
              {a.label}
              {openAccordion === a.key ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openAccordion === a.key ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-velmora-muted leading-relaxed whitespace-pre-line">{a.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
