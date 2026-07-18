import React from 'react';
import { Minus, Plus } from 'lucide-react';

export function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  return (
    <div className="flex items-center border border-hairline">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="p-3 text-ink-muted transition hover:text-ink disabled:opacity-30"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 text-center text-sm font-medium text-ink">{value}</span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="p-3 text-ink-muted transition hover:text-ink disabled:opacity-30"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
