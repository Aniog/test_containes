import { Minus, Plus } from 'lucide-react';

export default function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  const decrease = () => onChange(Math.max(min, value - 1));
  const increase = () => onChange(Math.min(max, value + 1));

  return (
    <div className="flex items-center border border-velmora-taupe/50">
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        className="w-10 h-10 flex items-center justify-center text-velmora-coffee hover:text-velmora-espresso disabled:opacity-30 transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 h-10 flex items-center justify-center text-sm font-medium text-velmora-espresso">
        {value}
      </span>
      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        className="w-10 h-10 flex items-center justify-center text-velmora-coffee hover:text-velmora-espresso disabled:opacity-30 transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
