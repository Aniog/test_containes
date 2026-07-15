import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export default function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
  className = "",
}) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));
  return (
    <div
      className={cn(
        "inline-flex items-center border border-ink/20 bg-ivory",
        "h-12 select-none",
        className
      )}
    >
      <button
        type="button"
        onClick={dec}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className="h-full w-12 flex items-center justify-center text-ink
                   hover:bg-ink hover:text-ivory transition-colors
                   disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
      >
        <Minus size={14} strokeWidth={1.6} />
      </button>
      <span
        className="w-12 text-center text-sm font-medium price text-ink"
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        onClick={inc}
        disabled={value >= max}
        aria-label="Increase quantity"
        className="h-full w-12 flex items-center justify-center text-ink
                   hover:bg-ink hover:text-ivory transition-colors
                   disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
      >
        <Plus size={14} strokeWidth={1.6} />
      </button>
    </div>
  );
}
