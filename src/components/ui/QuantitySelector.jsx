import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function QuantitySelector({ value, onChange, min = 1, max = 99, className }) {
  return (
    <div className={cn('flex items-center border border-velmora-sand rounded', className)}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-10 h-10 flex items-center justify-center text-velmora-taupe hover:text-velmora-espresso transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="w-12 text-center font-medium text-velmora-espresso">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="w-10 h-10 flex items-center justify-center text-velmora-taupe hover:text-velmora-espresso transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
