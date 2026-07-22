import { Minus, Plus } from "lucide-react";

export function QuantitySelector({ value, onChange, min = 1, max = 99 }) {
  const decrement = () => onChange(Math.max(min, value - 1));
  const increment = () => onChange(Math.min(max, value + 1));

  return (
    <div className="inline-flex items-center border border-velmora-hairline rounded-none">
      <button
        onClick={decrement}
        disabled={value <= min}
        className="w-10 h-10 flex items-center justify-center text-velmora-taupe hover:text-velmora-base disabled:opacity-30 transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 h-10 flex items-center justify-center text-sm font-medium text-velmora-base">
        {value}
      </span>
      <button
        onClick={increment}
        disabled={value >= max}
        className="w-10 h-10 flex items-center justify-center text-velmora-taupe hover:text-velmora-base disabled:opacity-30 transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
