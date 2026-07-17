import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-cream-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-xs tracking-widest uppercase text-espresso">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-warm transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-warm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Title & Price */}
      <div>
        <h1 className="font-serif text-2xl lg:text-3xl tracking-widest uppercase text-espresso leading-tight">
          {product.name}
        </h1>
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-gold text-gold'
                    : 'fill-cream-200 text-cream-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-warm">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>
        <p className="mt-3 text-2xl font-medium text-espresso">${product.price}</p>
      </div>

      <p className="text-sm text-warm leading-relaxed">{product.description}</p>

      {/* Color selector */}
      <div>
        <p className="text-xs uppercase tracking-widest text-warm mb-3">
          Finish: <span className="text-espresso capitalize">{selectedColor}</span>
        </p>
        <div className="flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-6 py-2.5 text-xs uppercase tracking-super border transition-all duration-300 ${
                selectedColor === color
                  ? 'border-espresso bg-espresso text-cream'
                  : 'border-cream-200 text-warm hover:border-warm'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-cream-200">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center text-warm hover:text-espresso transition-colors"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-10 text-center text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center text-warm hover:text-espresso transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={handleAdd}
          className="flex-1 bg-gold text-cream py-3 text-xs uppercase tracking-super font-medium hover:bg-gold-500 transition-all duration-300"
        >
          {added ? 'Added to Bag ✓' : `Add to Bag — $${(product.price * quantity).toFixed(2)}`}
        </button>
      </div>

      {/* Accordions */}
      <div className="pt-4">
        <AccordionItem title="Description" defaultOpen>
          <ul className="space-y-2">
            {product.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-gold mt-1 text-xs">—</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </AccordionItem>

        <AccordionItem title="Materials & Care">
          <p>{product.care}</p>
        </AccordionItem>

        <AccordionItem title="Shipping & Returns">
          <p>{product.shipping}</p>
        </AccordionItem>
      </div>
    </div>
  );
}
