import { Minus, Plus } from 'lucide-react';

export default function QuantitySelector({ quantity, onChange }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-sans text-xs tracking-[0.15em] uppercase text-text-secondary">
        Quantity:
      </span>
      <div className="flex items-center border border-border">
        <button
          onClick={() => onChange(Math.max(1, quantity - 1))}
          className="w-10 h-10 flex items-center justify-center text-text-primary hover:text-gold transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-text-primary border-x border-border">
          {quantity}
        </span>
        <button
          onClick={() => onChange(quantity + 1)}
          className="w-10 h-10 flex items-center justify-center text-text-primary hover:text-gold transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
