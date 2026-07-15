import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export function QuantitySelector({ value, onChange, min = 1, max = 99, compact }) {
  return (
    <div
      className={cn(
        'inline-flex items-center border border-velmora-sand bg-white',
        compact ? 'h-10' : 'h-12'
      )}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="flex h-full w-10 items-center justify-center text-velmora-taupe transition-colors hover:text-velmora-ink disabled:opacity-40"
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="flex h-full w-10 items-center justify-center text-sm font-medium text-velmora-ink">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="flex h-full w-10 items-center justify-center text-velmora-taupe transition-colors hover:text-velmora-ink disabled:opacity-40"
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
