import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  return (
    <div className="inline-flex items-center border border-line">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="w-11 h-12 flex items-center justify-center text-ink hover:text-gold-deep disabled:opacity-30 transition-colors"
      >
        <Minus strokeWidth={1.25} className="w-4 h-4" />
      </button>
      <span className="w-10 text-center text-sm font-sans text-ink">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="w-11 h-12 flex items-center justify-center text-ink hover:text-gold-deep disabled:opacity-30 transition-colors"
      >
        <Plus strokeWidth={1.25} className="w-4 h-4" />
      </button>
    </div>
  );
}
