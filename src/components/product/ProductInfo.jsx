import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const { addItem, openCart } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      quantity,
    });
    openCart();
  };

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Category */}
      <p className="font-sans text-xs tracking-widest uppercase text-taupe">
        {product.category}
      </p>

      {/* Product name */}
      <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-espresso font-medium">
        {product.name}
      </h1>

      {/* Price & rating */}
      <div className="flex items-center gap-4">
        <span className="font-sans text-xl text-espresso font-light">${product.price}</span>
        <span className="w-px h-4 bg-stone" />
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-warmgold text-warmgold'
                    : 'fill-stone text-stone'
                }`}
              />
            ))}
          </div>
          <span className="font-sans text-xs text-taupe">({product.reviewCount} reviews)</span>
        </div>
      </div>

      {/* Description */}
      <p id={product.descId} className="font-sans text-sm text-cocoa leading-relaxed">
        {product.description}
      </p>

      {/* Variant selector */}
      <div>
        <p className="font-sans text-xs tracking-wider uppercase text-espresso mb-3">
          Finish: <span className="text-taupe">{selectedVariant}</span>
        </p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`px-5 py-2.5 font-sans text-xs tracking-wider uppercase border transition-all duration-200 rounded-sm ${
                selectedVariant === v
                  ? 'border-warmgold text-warmgold bg-goldpale/30'
                  : 'border-stone text-taupe hover:border-cocoa'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & Add to Cart */}
      <div className="flex flex-col gap-3">
        <p className="font-sans text-xs tracking-wider uppercase text-espresso">Quantity</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-stone rounded-sm">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2.5 hover:text-warmgold transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-10 text-center font-sans text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2.5 hover:text-warmgold transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          <button onClick={handleAddToCart} className="btn-primary flex-1">
            Add to Cart — ${(product.price * quantity).toFixed(0)}
          </button>
        </div>
      </div>

      {/* Accordions */}
      <div className="hairline pt-6 mt-2 flex flex-col">
        {accordions.map((a) => (
          <div key={a.key} className="border-b border-stone last:border-0">
            <button
              onClick={() => setOpenAccordion(openAccordion === a.key ? null : a.key)}
              className="flex items-center justify-between w-full py-4 text-left"
            >
              <span className="font-sans text-xs tracking-wider uppercase text-espresso">{a.title}</span>
              <ChevronDown
                className={`w-4 h-4 text-taupe transition-transform duration-300 ${
                  openAccordion === a.key ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openAccordion === a.key ? 'max-h-60 pb-4' : 'max-h-0'
              }`}
            >
              <p className="font-sans text-sm text-cocoa leading-relaxed whitespace-pre-line">{a.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
