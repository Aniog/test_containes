import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export function QuantityStepper({ value, onChange, min = 1, max = 10, className }) {
  const decrease = () => onChange(Math.max(min, value - 1));
  const increase = () => onChange(Math.min(max, value + 1));

  return (
    <div
      className={cn(
        'inline-flex h-11 items-center border border-velmora-base/15',
        className
      )}
    >
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        className="flex h-full w-10 items-center justify-center text-velmora-taupe transition-colors hover:bg-velmora-cream-dark disabled:opacity-30"
        aria-label="Decrease quantity"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="flex h-full w-10 items-center justify-center font-sans text-sm font-medium text-velmora-base">
        {value}
      </span>
      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        className="flex h-full w-10 items-center justify-center text-velmora-taupe transition-colors hover:bg-velmora-cream-dark disabled:opacity-30"
        aria-label="Increase quantity"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
