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
        <span className="font-sans text-xs uppercase tracking-widest2 text-obsidian">{title}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-stone transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-stone leading-relaxed">{children}</p>
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
      <p className="font-sans text-xs uppercase tracking-widest3 text-gold">{product.category}</p>

      <h1
        id={product.titleId}
        className="font-serif text-3xl md:text-4xl font-medium uppercase tracking-widest2 text-obsidian leading-tight"
      >
        {product.name}
      </h1>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={13} className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-divider fill-divider'} />
          ))}
        </div>
        <span className="font-sans text-xs text-stone">{product.rating} ({product.reviewCount} reviews)</span>
      </div>

      <p className="font-serif text-3xl font-light text-obsidian">${product.price}</p>

      <p
        id={product.descId}
        className="font-sans text-sm text-stone leading-relaxed border-t border-divider pt-5"
      >
        {product.shortDescription}
      </p>

      <div>
        <p className="font-sans text-xs uppercase tracking-widest2 text-obsidian mb-3">
          Finish: <span className="text-stone normal-case tracking-normal">{selectedVariant}</span>
        </p>
        <div className="flex gap-2">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`font-sans text-xs uppercase tracking-widest2 px-5 py-2.5 border transition-colors ${
                selectedVariant === v
                  ? 'border-obsidian bg-obsidian text-ivory'
                  : 'border-divider text-stone hover:border-obsidian hover:text-obsidian'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="font-sans text-xs uppercase tracking-widest2 text-obsidian mb-3">Quantity</p>
        <div className="flex items-center border border-divider w-fit">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
            aria-label="Decrease"
          >
            <Minus size={13} strokeWidth={1.5} />
          </button>
          <span className="w-10 text-center font-sans text-sm text-obsidian">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
            aria-label="Increase"
          >
            <Plus size={13} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className={`w-full flex items-center justify-center gap-3 font-sans text-xs uppercase tracking-widest2 py-4 transition-colors ${
          added ? 'bg-gold text-ivory' : 'bg-obsidian text-ivory hover:bg-gold-dark'
        }`}
      >
        <ShoppingBag size={15} strokeWidth={1.5} />
        {added ? 'Added to Bag' : 'Add to Bag'}
      </button>

      <div className="flex flex-wrap gap-4 pt-1">
        {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
          <span key={t} className="font-sans text-[10px] uppercase tracking-widest2 text-stone flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-gold inline-block" />
            {t}
          </span>
        ))}
      </div>

      <div className="mt-2">
        <Accordion title="Description">{product.description}</Accordion>
        <Accordion title="Materials & Care">{product.materials}</Accordion>
        <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
      </div>
    </div>
  );
}
