import { cn } from "@/lib/utils";

const TONE_LABELS = {
  gold: "18K Gold",
  silver: "Sterling Silver",
};

/**
 * Tone selector — pill-shaped swatches with a hairline border.
 * The "swatch" is a real circle in champagne / silver so the choice is
 * visual, not just text.
 */
export default function VariantSelector({ options = ["gold"], value, onChange }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] uppercase tracking-eyebrow text-espresso">
          Finish
        </span>
        <span className="text-[11px] uppercase tracking-eyebrow text-taupe">
          {TONE_LABELS[value]}
        </span>
      </div>
      <div className="flex gap-3">
        {options.map((opt) => {
          const selected = opt === value;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              aria-pressed={selected}
              className={cn(
                "flex items-center gap-2.5 px-4 py-2.5 border transition-all duration-500 ease-elegant",
                selected
                  ? "border-espresso bg-cream"
                  : "border-espresso/20 hover:border-espresso/50",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-5 w-5 rounded-full border",
                  opt === "gold"
                    ? "bg-champagne border-champagne-deep"
                    : "bg-cream border-espresso-soft",
                )}
              />
              <span className="text-xs uppercase tracking-label text-espresso">
                {TONE_LABELS[opt] || opt}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
