import { useState } from 'react';
import { Star, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Title & Price */}
      <div>
        <h1 className="font-serif text-2xl md:text-3xl font-light text-warm-charcoal uppercase tracking-widest">
          {product.name}
        </h1>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-gold text-gold'
                    : 'fill-beige text-beige'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-warm-gray">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <p className="font-serif text-2xl text-warm-charcoal">${product.price}</p>

      {/* Description */}
      <p className="text-sm text-warm-gray leading-relaxed">{product.description}</p>

      {/* Variant selector */}
      {product.variants.length > 1 && (
        <div>
          <h3 className="text-xs uppercase tracking-widest font-medium text-warm-charcoal mb-3">
            Finish: <span className="text-gold">{selectedVariant}</span>
          </h3>
          <div className="flex gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`px-5 py-2.5 text-xs uppercase tracking-wider border transition-all duration-300 ${
                  selectedVariant === variant
                    ? 'bg-warm-charcoal text-cream border-warm-charcoal'
                    : 'bg-transparent text-warm-charcoal border-beige hover:border-warm-charcoal/40'
                }`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity + Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-warm-charcoal font-medium">
            Quantity
          </span>
          <div className="flex items-center border border-beige">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 hover:text-gold transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="px-4 py-2 text-sm font-medium min-w-[40px] text-center border-x border-beige">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 hover:text-gold transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={handleAddToCart}
        >
          Add to Cart — ${(product.price * quantity).toFixed(0)}
        </Button>
      </div>

      {/* Accordions */}
      <div className="space-y-0 divide-y divide-beige">
        <Accordion title="Description">
          <p className="text-sm text-warm-gray leading-relaxed">{product.description}</p>
        </Accordion>
        <Accordion title="Materials & Care">
          <div className="space-y-2">
            <p className="text-sm text-warm-gray">
              <span className="font-medium text-warm-charcoal">Material:</span> {product.material}
            </p>
            <p className="text-sm text-warm-gray">
              <span className="font-medium text-warm-charcoal">Care:</span> {product.care}
            </p>
          </div>
        </Accordion>
        <Accordion title="Shipping & Returns">
          <div className="space-y-2 text-sm text-warm-gray leading-relaxed">
            <p>Free worldwide shipping on all orders. Delivery within 5–10 business days.</p>
            <p>30-day return policy. Items must be returned in original condition and packaging.</p>
            <p>For more details, visit our <a href="/shipping" className="text-gold hover:underline">Shipping & Returns</a> page.</p>
          </div>
        </Accordion>
      </div>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-xs uppercase tracking-widest font-medium text-warm-charcoal hover:text-gold transition-colors"
      >
        {title}
        <span className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-40 pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}