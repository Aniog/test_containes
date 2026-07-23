import { cn } from "@/lib/utils";

const tones = [
  { id: "gold", label: "Gold", swatch: "linear-gradient(135deg, #E8CFA1 0%, #C9A66B 50%, #A8854A 100%)" },
  { id: "silver", label: "Silver", swatch: "linear-gradient(135deg, #F0EFEC 0%, #C8C5BF 50%, #8E8B85 100%)" },
];

export default function VariantSelector({ value, onChange, options = tones }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-[11px] uppercase tracking-widest font-medium text-espresso">
          Tone · <span className="text-taupe font-normal">{value}</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={cn(
              "inline-flex items-center gap-2 h-10 pl-2 pr-4 border transition-all",
              value === opt.id
                ? "border-espresso bg-ivory-50"
                : "border-line text-taupe hover:border-espresso"
            )}
            aria-pressed={value === opt.id}
          >
            <span
              className="h-6 w-6 rounded-full border border-line"
              style={{ background: opt.swatch }}
              aria-hidden="true"
            />
            <span className="text-[11px] uppercase tracking-widest font-medium">
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
