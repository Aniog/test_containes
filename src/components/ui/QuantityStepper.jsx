import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuantityStepper({ value, onChange, min = 1, max = 99, className }) {
  return (
    <div
      className={cn(
        "inline-flex items-center border border-hairline",
        className
      )}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="h-10 w-10 flex items-center justify-center text-muted transition-colors hover:text-base-800 disabled:opacity-30"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 text-center text-sm font-medium tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="h-10 w-10 flex items-center justify-center text-muted transition-colors hover:text-base-800 disabled:opacity-30"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
