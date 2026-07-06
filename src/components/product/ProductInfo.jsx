import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-divider">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-charcoal">{title}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-taupe transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-taupe leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Category */}
      <p className="font-inter text-xs uppercase tracking-ultra-wide text-gold">
        {product.category}
      </p>

      {/* Name */}
      <h1
        id={product.titleId}
        className="font-cormorant text-3xl md:text-4xl font-medium uppercase tracking-widest text-charcoal leading-tight"
      >
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={13}
              className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-divider fill-divider'}
            />
          ))}
        </div>
        <span className="font-inter text-xs text-taupe">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="font-cormorant text-3xl font-light text-charcoal">${product.price}</p>

      {/* Short description */}
      <p
        id={product.descId}
        className="font-inter text-sm text-taupe leading-relaxed border-t border-divider pt-5"
      >
        {product.shortDescription}
      </p>

      {/* Variant selector */}
      <div>
        <p className="font-inter text-xs uppercase tracking-widest text-charcoal mb-3">
          Finish: <span className="text-taupe normal-case tracking-normal">{selectedVariant}</span>
        </p>
        <div className="flex gap-2">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`font-inter text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors ${
                selectedVariant === v
                  ? 'border-charcoal bg-charcoal text-cream'
                  : 'border-divider text-taupe hover:border-charcoal hover:text-charcoal'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="font-inter text-xs uppercase tracking-widest text-charcoal mb-3">Quantity</p>
        <div className="flex items-center border border-divider w-fit">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-taupe hover:text-charcoal transition-colors"
            aria-label="Decrease"
          >
            <Minus size={13} strokeWidth={1.5} />
          </button>
          <span className="w-10 text-center font-inter text-sm text-charcoal">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-taupe hover:text-charcoal transition-colors"
            aria-label="Increase"
          >
            <Plus size={13} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        className={`w-full flex items-center justify-center gap-3 font-inter text-xs uppercase tracking-widest py-4 transition-colors ${
          added
            ? 'bg-gold text-charcoal'
            : 'bg-charcoal text-cream hover:bg-gold-dark'
        }`}
      >
        <ShoppingBag size={15} strokeWidth={1.5} />
        {added ? 'Added to Bag' : 'Add to Bag'}
      </button>

      {/* Trust signals */}
      <div className="flex flex-wrap gap-4 pt-1">
        {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
          <span key={t} className="font-inter text-[10px] uppercase tracking-widest text-taupe flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-gold inline-block" />
            {t}
          </span>
        ))}
      </div>

      {/* Accordions */}
      <div className="mt-2">
        <Accordion title="Description">{product.description}</Accordion>
        <Accordion title="Materials & Care">{product.materials}</Accordion>
        <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
      </div>
    </div>
  );
}
