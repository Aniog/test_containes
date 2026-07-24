import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-sand-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="font-sans text-xs tracking-wide uppercase text-velvet-700">{title}</span>
        <ChevronDown className={`w-4 h-4 text-sand-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-sm text-sand-600 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState(product.defaultVariant);
  const [quantity, setQuantity] = useState(1);
  const { addItem, toggleCart } = useCart();

  const handleAdd = () => {
    addItem(product, variant, quantity);
    toggleCart();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Name & Price */}
      <div>
        <p className="font-sans text-[10px] tracking-widest uppercase text-sand-500 mb-2">
          {product.category}
        </p>
        <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wider uppercase text-velvet-800 mb-3">
          {product.name}
        </h1>
        <p className="font-sans text-xl font-medium text-velvet-700">
          ${product.price}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating)
                  ? 'fill-velvet-500 text-velvet-500'
                  : 'fill-sand-200 text-sand-200'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-sand-500">({product.reviewCount} reviews)</span>
      </div>

      {/* Description */}
      <p className="text-sm text-sand-600 leading-relaxed">
        {product.description}
      </p>

      <hr className="hairline-divider" />

      {/* Variant selector */}
      <div>
        <p className="font-sans text-xs tracking-wide uppercase text-velvet-700 mb-3">
          Finish: <span className="font-medium">{variant}</span>
        </p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-6 py-2.5 text-xs font-sans tracking-wide uppercase rounded-sm border transition-all duration-200 ${
                variant === v
                  ? 'border-velvet-500 bg-velvet-50 text-velvet-700'
                  : 'border-sand-200 text-sand-500 hover:border-sand-400'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="font-sans text-xs tracking-wide uppercase text-velvet-700 mb-3">
          Quantity
        </p>
        <div className="flex items-center border border-sand-200 rounded-sm w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 text-velvet-600 hover:text-velvet-900 transition-colors"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="px-5 text-sm font-medium text-velvet-800 tabular-nums">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 text-velvet-600 hover:text-velvet-900 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button onClick={handleAdd} className="btn-primary w-full">
        Add to Bag — ${(product.price * quantity).toFixed(2)}
      </button>

      {/* Accordions */}
      <div className="mt-4">
        <Accordion title="Description" defaultOpen>
          {product.description}
        </Accordion>
        <Accordion title="Materials & Care">
          <strong className="text-velvet-700">Materials:</strong> {product.materials}<br /><br />
          <strong className="text-velvet-700">Care:</strong> {product.care}
        </Accordion>
        <Accordion title="Shipping & Returns">
          <strong className="text-velvet-700">Shipping:</strong> {product.shipping}<br /><br />
          <strong className="text-velvet-700">Returns:</strong> {product.returns}
        </Accordion>
      </div>
    </div>
  );
}
