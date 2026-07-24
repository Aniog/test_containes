import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const variants = [
  { id: 'gold', label: 'Gold Tone' },
  { id: 'silver', label: 'Silver Tone' },
];

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Category */}
      <p className="text-gold-300 text-xs uppercase tracking-[0.25em] font-sans">
        {product.category}
      </p>

      {/* Name */}
      <h1 className="font-serif text-2xl md:text-3xl text-warm-900 uppercase tracking-[0.15em] leading-tight">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-gold-300 text-gold-300'
                  : 'text-warm-200'
              }`}
            />
          ))}
        </div>
        <span className="text-warm-500 text-xs">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="text-2xl text-warm-900 font-serif">${product.price.toFixed(2)}</p>

      {/* Description */}
      <p className="text-warm-600 text-sm leading-relaxed">
        {product.description}
      </p>

      {/* Variant selector */}
      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-warm-500 mb-3 font-sans">
          Finish: <span className="text-warm-900 capitalize">{selectedVariant}</span>
        </p>
        <div className="flex gap-3">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant.id)}
              className={`px-6 py-2.5 text-xs uppercase tracking-widest border transition-all duration-300 font-sans ${
                selectedVariant === variant.id
                  ? 'border-warm-900 bg-warm-900 text-white'
                  : 'border-warm-200 text-warm-600 hover:border-warm-900 hover:text-warm-900'
              }`}
            >
              {variant.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-warm-200">
          <button
            className="p-3 hover:bg-warm-100 transition-colors"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-10 text-center text-sm font-sans">{quantity}</span>
          <button
            className="p-3 hover:bg-warm-100 transition-colors"
            onClick={() => setQuantity(quantity + 1)}
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className={`flex-1 py-3 text-sm uppercase tracking-widest transition-all duration-300 font-sans flex items-center justify-center gap-2 ${
            addedToCart
              ? 'bg-green-600 text-white'
              : 'bg-gold-300 text-white hover:bg-gold-400'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          {addedToCart ? 'Added!' : 'Add to Cart'}
        </button>
      </div>

      {/* Accordion sections */}
      <AccordionSection title="Description">
        <p className="text-warm-600 text-sm leading-relaxed">
          {product.description} Each piece is carefully crafted with premium materials and attention to detail, ensuring lasting beauty and durability.
        </p>
      </AccordionSection>

      <AccordionSection title="Materials & Care">
        <div className="text-warm-600 text-sm leading-relaxed space-y-2">
          <p><strong className="text-warm-900">Materials:</strong> 18K gold plating over sterling silver. Cubic zirconia accent stones.</p>
          <p><strong className="text-warm-900">Care:</strong> Avoid contact with perfume, lotions, and water. Store in a dry place. Clean gently with a soft cloth.</p>
          <p><strong className="text-warm-900">Hypoallergenic:</strong> Nickel-free and lead-free. Suitable for sensitive skin.</p>
        </div>
      </AccordionSection>

      <AccordionSection title="Shipping & Returns">
        <div className="text-warm-600 text-sm leading-relaxed space-y-2">
          <p><strong className="text-warm-900">Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-8 business days. Express shipping available at checkout.</p>
          <p><strong className="text-warm-900">Returns:</strong> 30-day return window from the date of delivery. Items must be unworn and in original packaging.</p>
          <p><strong className="text-warm-900">Guarantee:</strong> All pieces come with a 1-year warranty against manufacturing defects.</p>
        </div>
      </AccordionSection>
    </div>
  );
}

function AccordionSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-warm-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-widest text-warm-900 hover:text-gold-300 transition-colors font-sans"
      >
        {title}
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}