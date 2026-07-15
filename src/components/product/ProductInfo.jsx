import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-deepbrown/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-xs tracking-widest uppercase font-sans font-medium text-deepbrown hover:text-gold transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-taupe font-sans leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div>
      {/* Category link */}
      <Link
        to={`/shop?cat=${product.category}`}
        className="text-[11px] tracking-widest uppercase text-gold font-sans font-medium hover:text-golddark transition-colors"
      >
        {product.category}
      </Link>

      {/* Name */}
      <h1 className="product-name text-xl md:text-2xl lg:text-3xl mt-2 mb-3">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-stone/30 text-stone/30'}`}
            />
          ))}
        </div>
        <span className="text-xs text-taupe font-sans">{product.rating} ({product.reviewCount} reviews)</span>
      </div>

      {/* Price */}
      <p className="text-2xl font-serif text-deepbrown mb-6">${product.price}</p>

      {/* Description */}
      <p className="text-sm text-taupe font-sans leading-relaxed mb-6">
        {product.description}
      </p>

      <hr className="hairline-divider mb-6" />

      {/* Variant selector */}
      <div className="mb-6">
        <p className="text-[10px] tracking-widest uppercase text-taupe font-sans mb-3">Finish</p>
        <div className="flex gap-3">
          {product.variants.map(v => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`px-5 py-2 text-xs tracking-wider uppercase font-sans border transition-all ${
                selectedVariant === v
                  ? 'border-deepbrown bg-deepbrown text-cream'
                  : 'border-deepbrown/20 text-deepbrown hover:border-deepbrown/50'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <p className="text-[10px] tracking-widest uppercase text-taupe font-sans mb-3">Quantity</p>
        <div className="inline-flex items-center border border-deepbrown/20">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="p-2.5 hover:text-gold transition-colors"
            aria-label="Decrease"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-12 text-center text-sm font-sans font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="p-2.5 hover:text-gold transition-colors"
            aria-label="Increase"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        className={`w-full py-3.5 text-sm tracking-widest uppercase font-sans font-medium transition-all duration-300 ${
          added
            ? 'bg-gold text-softblack'
            : 'bg-deepbrown text-cream hover:bg-gold hover:text-softblack'
        }`}
      >
        {added ? 'Added to Bag!' : `Add to Bag — $${(product.price * quantity).toFixed(2)}`}
      </button>

      {/* Accordions */}
      <div className="mt-10">
        <Accordion title="Description" defaultOpen={true}>
          <p>{product.description}</p>
        </Accordion>
        <Accordion title="Materials & Care">
          <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
          <p><strong>Care:</strong> {product.care}</p>
        </Accordion>
        <Accordion title="Shipping & Returns">
          <p>{product.shipping}</p>
        </Accordion>
      </div>
    </div>
  );
}
