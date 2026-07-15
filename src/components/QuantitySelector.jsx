import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export function QuantitySelector({ value, onChange, min = 1, max = 10, className }) {
  const decrease = () => onChange(Math.max(min, value - 1));
  const increase = () => onChange(Math.min(max, value + 1));

  return (
    <div
      className={cn(
        'inline-flex items-center border border-velmora-stone rounded-none bg-white',
        className
      )}
    >
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        className="h-10 w-10 flex items-center justify-center text-velmora-charcoal hover:bg-velmora-cream disabled:opacity-40 transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 text-center text-sm font-medium tabular-nums">{value}</span>
      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        className="h-10 w-10 flex items-center justify-center text-velmora-charcoal hover:bg-velmora-cream disabled:opacity-40 transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
