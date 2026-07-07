import React, { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0].value);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="md:pl-8 lg:pl-12">
      {/* Product Name */}
      <h1 className="font-serif text-3xl md:text-4xl text-charcoal-950 tracking-wider uppercase">
        {product.name}
      </h1>

      {/* Price & Rating */}
      <div className="mt-4 flex items-center gap-4">
        <span className="font-sans text-2xl text-charcoal-900">${product.price}</span>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-gold-500 text-gold-500'
                  : 'text-charcoal-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-charcoal-500">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Short Description */}
      <p className="mt-4 text-charcoal-600 leading-relaxed">
        {product.shortDescription}
      </p>

      {/* Variant Selector */}
      <div className="mt-6">
        <label className="text-xs tracking-widest uppercase text-charcoal-700 mb-3 block">
          Finish
        </label>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant.value}
              onClick={() => setSelectedVariant(variant.value)}
              className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-all ${
                selectedVariant === variant.value
                  ? 'border-charcoal-900 bg-charcoal-900 text-white'
                  : 'border-charcoal-300 text-charcoal-700 hover:border-charcoal-500'
              }`}
            >
              {variant.name}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-6">
        <label className="text-xs tracking-widest uppercase text-charcoal-700 mb-3 block">
          Quantity
        </label>
        <div className="flex items-center border border-charcoal-300 w-32">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 hover:bg-charcoal-100 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="flex-1 text-center text-sm text-charcoal-800">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:bg-charcoal-100 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="btn-accent w-full mt-8"
      >
        Add to Bag — ${(product.price * quantity).toFixed(2)}
      </button>

      {/* Accordions */}
      <div className="mt-8 space-y-0">
        {[
          { key: 'description', title: 'Description', content: product.description },
          { key: 'materials', title: 'Materials & Care', content: (
            <div>
              <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
              <p><strong>Care:</strong> {product.care}</p>
            </div>
          )},
          { key: 'shipping', title: 'Shipping & Returns', content: (
            <div>
              <p className="mb-2">Free worldwide shipping on all orders. Delivery in 5-10 business days.</p>
              <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
            </div>
          )},
        ].map(({ key, title, content }) => (
          <div key={key} className="border-b border-charcoal-200">
            <button
              onClick={() => toggleAccordion(key)}
              className="accordion-trigger"
            >
              {title}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  openAccordion === key ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openAccordion === key ? 'max-h-48 py-4' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-charcoal-600 leading-relaxed">{content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
