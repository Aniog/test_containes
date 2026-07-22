import { cn } from "@/lib/utils";

const TONE_SWATCHES = {
  gold: { label: "Gold", hex: "#C9A875" },
  silver: { label: "Silver", hex: "#D9D5CE" },
  rose: { label: "Rose Gold", hex: "#D4A89A" },
};

export default function VariantSelector({ options = ["gold", "silver"], value, onChange }) {
  return (
    <div>
      <p className="eyebrow text-ink mb-3">
        Tone: <span className="text-muted normal-case tracking-normal text-[12px] font-sans font-light">{TONE_SWATCHES[value]?.label || value}</span>
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const swatch = TONE_SWATCHES[opt] || { label: opt, hex: "#C9A875" };
          const isActive = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              aria-pressed={isActive}
              className={cn(
                "inline-flex items-center gap-2 pl-2.5 pr-4 py-1.5 rounded-full border transition-all duration-300",
                isActive
                  ? "border-ink bg-ivory"
                  : "border-line bg-cream hover:border-ink/50"
              )}
            >
              <span
                className="w-5 h-5 rounded-full border border-ink/15"
                style={{ background: swatch.hex }}
                aria-hidden="true"
              />
              <span className="text-[12px] font-sans font-medium text-ink">
                {swatch.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
