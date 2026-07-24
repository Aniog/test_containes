import { useState } from 'react';
import { Plus, Minus, Check } from 'lucide-react';
import { formatPrice, cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';

const TONES = [
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
];

export default function ProductInfo({ product }) {
  const { addToCart } = useCart();
  const [tone, setTone] = useState(product.tone || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product.id, { tone, quantity });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="lg:sticky lg:top-32">
      <p className="text-[11px] uppercase tracking-widest-2 text-muted">
        {product.category === 'sets' ? 'Gift Set' : product.category}
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ink-soft leading-[1.05]">
        {product.title}
      </h1>

      <div className="mt-5 flex items-center gap-4">
        <p className="font-serif text-2xl text-ink-soft">{formatPrice(product.price)}</p>
        <span className="w-px h-4 bg-hairline" />
        <StarRating value={product.rating} showCount count={product.reviewCount} />
      </div>

      <p className="mt-8 text-base text-ink/80 leading-relaxed max-w-prose">
        {product.description}
      </p>

      {/* tone selector */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] uppercase tracking-widest-2 text-ink-soft">
            Finish
          </p>
          <p className="text-[11px] uppercase tracking-widest-2 text-muted">
            {tone === 'silver' ? 'Silver tone' : '18K Gold Plated'}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {TONES.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTone(t.id)}
              className={cn('pill', tone === t.id && 'pill-active')}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* quantity */}
      <div className="mt-10">
        <p className="text-[11px] uppercase tracking-widest-2 text-ink-soft mb-3">
          Quantity
        </p>
        <div className="inline-flex items-center border border-hairline">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label="Decrease quantity"
            className="w-11 h-11 inline-flex items-center justify-center text-ink-soft hover:text-ink"
          >
            <Minus className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <span className="w-10 text-center font-sans text-sm text-ink-soft">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            aria-label="Increase quantity"
            className="w-11 h-11 inline-flex items-center justify-center text-ink-soft hover:text-ink"
          >
            <Plus className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* add to cart */}
      <button
        type="button"
        onClick={handleAdd}
        className={cn(
          'mt-10 w-full inline-flex items-center justify-center gap-2 py-4 font-sans text-[11px] uppercase tracking-widest-2 transition-colors duration-300 ease-editorial',
          added ? 'bg-ink-soft text-ivory' : 'bg-ink text-ivory hover:bg-ink-soft'
        )}
      >
        {added ? (
          <>
            <Check className="w-3.5 h-3.5" strokeWidth={1.6} />
            Added to Bag
          </>
        ) : (
          <>Add to Bag · {formatPrice(product.price * quantity)}</>
        )}
      </button>

      {/* trust micro-row */}
      <ul className="mt-6 grid grid-cols-2 gap-3 text-[11px] uppercase tracking-widest-2 text-muted">
        <li className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold" />
          Free shipping over $75
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold" />
          30-day returns
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold" />
          Hypoallergenic
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold" />
          Gift-ready packaging
        </li>
      </ul>
    </div>
  );
}
