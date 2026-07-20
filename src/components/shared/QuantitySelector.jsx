import { Minus, Plus } from "lucide-react";

const QuantitySelector = ({ value, onChange, compact = false }) => {
  const buttonSize = compact ? "h-8 w-8" : "h-10 w-10";

  return (
    <div className="inline-flex items-center rounded-full border border-stone-300 bg-stone-50 text-stone-950">
      <button
        type="button"
        aria-label="Decrease quantity"
        className={`${buttonSize} inline-flex items-center justify-center rounded-full text-stone-700 transition hover:text-amber-700`}
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className={`${buttonSize} inline-flex items-center justify-center rounded-full text-stone-700 transition hover:text-amber-700`}
        onClick={() => onChange(value + 1)}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

export default QuantitySelector;
