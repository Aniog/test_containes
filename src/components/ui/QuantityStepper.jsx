import { Minus, Plus } from 'lucide-react';

export default function QuantityStepper({ quantity, onChange, min = 1, max = 10 }) {
  const decrease = () => onChange(Math.max(min, quantity - 1));
  const increase = () => onChange(Math.min(max, quantity + 1));

  return (
    <div className="inline-flex items-center border border-subtle">
      <button
        onClick={decrease}
        disabled={quantity <= min}
        className="p-3 text-muted hover:text-foreground disabled:opacity-30 transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 text-center text-sm font-medium text-foreground">
        {quantity}
      </span>
      <button
        onClick={increase}
        disabled={quantity >= max}
        className="p-3 text-muted hover:text-foreground disabled:opacity-30 transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
