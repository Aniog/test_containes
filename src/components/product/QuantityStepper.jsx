import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function QuantityStepper({ value, onChange, min = 1, max = 99 }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-widest font-medium text-espresso mb-3">
        Quantity
      </p>
      <div className="inline-flex items-center border border-espresso/80 h-11">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="h-11 w-11 inline-flex items-center justify-center text-espresso hover:bg-ivory-200 transition-colors disabled:opacity-30"
          disabled={value <= min}
          aria-label="Decrease quantity"
        >
          <Minus size={14} strokeWidth={1.5} />
        </button>
        <span
          className={cn(
            "w-12 text-center text-sm font-medium tabular-nums",
            "select-none"
          )}
          aria-live="polite"
        >
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          className="h-11 w-11 inline-flex items-center justify-center text-espresso hover:bg-ivory-200 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
