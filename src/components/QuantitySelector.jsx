import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export function QuantitySelector({ value, onChange, min = 1, max = 99, className }) {
  const decrement = () => onChange(Math.max(min, value - 1));
  const increment = () => onChange(Math.min(max, value + 1));

  return (
    <div
      className={cn(
        'inline-flex items-center border border-border bg-card rounded-none overflow-hidden',
        className
      )}
    >
      <button
        type="button"
        onClick={decrement}
        className="px-3 py-2 hover:bg-muted transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-10 text-center text-sm font-medium tabular-nums">{value}</span>
      <button
        type="button"
        onClick={increment}
        className="px-3 py-2 hover:bg-muted transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
