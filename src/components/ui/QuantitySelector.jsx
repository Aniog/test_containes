import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuantitySelector({ value, onChange, min = 1, max = 99, className }) {
  return (
    <div
      className={cn(
        "inline-flex items-center border border-stone-300",
        className
      )}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="flex h-10 w-10 items-center justify-center text-warm-gray transition-colors hover:bg-parchment focus-visible:outline-none"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="flex h-10 w-12 items-center justify-center text-sm font-medium text-espresso">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        data-testid="quantity-increment"
        className="flex h-10 w-10 items-center justify-center text-warm-gray transition-colors hover:bg-parchment focus-visible:outline-none"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
