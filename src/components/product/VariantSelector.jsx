import { cn } from "@/lib/utils";

export function VariantSelector({ options = [], value, onChange, label = "Tone" }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-wider2 text-ink-secondary">
          {label}
        </p>
        <p className="text-[11px] uppercase tracking-wider2 text-ink">
          {options.find((o) => o.id === value)?.label}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => {
          const isActive = o.id === value;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => onChange?.(o.id)}
              className={cn(
                "inline-flex items-center gap-2.5 border px-4 py-2.5 text-[11px] uppercase tracking-wider2 transition-colors",
                isActive
                  ? "border-ink text-ink"
                  : "border-line text-ink-secondary hover:border-ink hover:text-ink",
              )}
              aria-pressed={isActive}
            >
              <span
                aria-hidden
                className="h-4 w-4 rounded-full border border-ink/20"
                style={{ background: o.swatch }}
              />
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default VariantSelector;
