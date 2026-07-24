import React, { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-velmora-warm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-widest font-medium text-velmora-ink">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-velmora-brown transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-velmora-brown leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductInfo = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.find((v) => v.available)?.id || product.variants[0].id
  );
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div>
      {/* Name & Price */}
      <p className="text-xs uppercase tracking-widest-2xl text-velmora-taupe mb-3">
        {product.subtitle}
      </p>
      <h1
        id={`product-${product.id}-name`}
        className="font-serif text-3xl md:text-4xl uppercase tracking-widest-xl text-velmora-ink mb-4"
      >
        {product.name}
      </h1>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
          <span className="text-sm text-velmora-brown">{product.rating}</span>
        </div>
        <span className="text-velmora-stone">|</span>
        <span className="text-sm text-velmora-taupe">
          {product.reviewCount} reviews
        </span>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <span className="font-serif text-2xl text-velmora-ink">
          ${product.price}
        </span>
        {product.originalPrice && (
          <span className="text-velmora-taupe line-through">
            ${product.originalPrice}
          </span>
        )}
      </div>

      <p
        id={`product-${product.id}-subtitle`}
        className="text-sm text-velmora-brown leading-relaxed mb-8"
      >
        {product.description}
      </p>

      {/* Variant selector */}
      {product.variants.length > 1 && (
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-velmora-taupe mb-3">
            Metal Tone
          </p>
          <div className="flex gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => variant.available && setSelectedVariant(variant.id)}
                disabled={!variant.available}
                className={`px-6 py-2.5 text-xs uppercase tracking-wider font-medium border transition-colors ${
                  selectedVariant === variant.id
                    ? 'border-velmora-ink bg-velmora-ink text-velmora-cream'
                    : variant.available
                    ? 'border-velmora-stone text-velmora-brown hover:border-velmora-ink'
                    : 'border-velmora-warm text-velmora-stone cursor-not-allowed line-through'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-velmora-taupe mb-3">
          Quantity
        </p>
        <div className="flex items-center border border-velmora-stone w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 text-velmora-brown hover:text-velmora-ink transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center text-sm text-velmora-ink">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 text-velmora-brown hover:text-velmora-ink transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-velmora-ink text-velmora-cream py-4 text-xs uppercase tracking-widest font-medium hover:bg-velmora-charcoal transition-colors mb-10"
      >
        Add to Cart — ${product.price * quantity}
      </button>

      {/* Accordions */}
      <div className="border-b border-velmora-warm">
        <AccordionItem title="Description">
          <p>{product.description}</p>
        </AccordionItem>
        <AccordionItem title="Materials & Care">
          <p className="mb-2">
            <strong className="text-velmora-ink">Materials:</strong>{' '}
            {product.materials}
          </p>
          <p>
            <strong className="text-velmora-ink">Care:</strong> {product.care}
          </p>
        </AccordionItem>
        <AccordionItem title="Shipping & Returns">
          <p>
            Free worldwide shipping on all orders over $50. Orders typically
            ship within 1-2 business days. We offer 30-day hassle-free returns
            on all unworn items in original packaging.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default ProductInfo;
