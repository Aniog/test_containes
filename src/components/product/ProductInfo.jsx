import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      quantity,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Product name */}
      <div>
        <p className="text-xs tracking-[0.15em] uppercase text-velvet-600 font-medium mb-2">
          {product.category}
        </p>
        <h1
          id="pdp-product-name"
          className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-charcoal-900"
        >
          {product.name}
        </h1>
      </div>

      {/* Price */}
      <p className="font-sans text-xl text-charcoal-700">${product.price}</p>

      {/* Rating */}
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating)
                  ? 'fill-velvet-500 text-velvet-500'
                  : 'fill-charcoal-200 text-charcoal-200'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-charcoal-500">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-charcoal-500 leading-relaxed">{product.description}</p>

      {/* Variant selector */}
      <div>
        <p className="text-xs tracking-wider uppercase text-charcoal-600 font-medium mb-3">
          Finish
        </p>
        <div className="flex gap-2">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`px-5 py-2 text-xs tracking-wider uppercase font-medium border transition-all ${
                selectedVariant === v
                  ? 'border-charcoal-900 bg-charcoal-900 text-white'
                  : 'border-charcoal-300 text-charcoal-600 hover:border-charcoal-500'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-xs tracking-wider uppercase text-charcoal-600 font-medium mb-3">
          Quantity
        </p>
        <div className="flex items-center border border-charcoal-200 w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 hover:text-velvet-600 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-12 text-center text-sm font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:text-velvet-600 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button onClick={handleAddToCart} className="btn-primary w-full">
        <ShoppingBag className="w-4 h-4 mr-2" />
        Add to Bag
      </button>

      {/* Accordions */}
      <div className="mt-6 space-y-0">
        <AccordionItem title="Description" defaultOpen>
          <p className="text-sm text-charcoal-500 leading-relaxed">{product.details}</p>
        </AccordionItem>
        <AccordionItem title="Materials & Care">
          <p className="text-sm text-charcoal-500 leading-relaxed">{product.care}</p>
        </AccordionItem>
        <AccordionItem title="Shipping & Returns">
          <p className="text-sm text-charcoal-500 leading-relaxed">{product.shipping}</p>
        </AccordionItem>
      </div>
    </div>
  );
}

function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-charcoal-200 last:border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-xs tracking-wider uppercase font-medium text-charcoal-700 hover:text-charcoal-900 transition-colors"
      >
        {title}
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <Plus className="w-3.5 h-3.5" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-60 pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}