import { cn } from "@/lib/utils";

export default function VariantSelector({ options, value, onChange }) {
  return (
    <div role="radiogroup" aria-label="Select finish" className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const selected = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(opt.id)}
            className={cn(
              "px-5 py-2.5 text-[12px] uppercase tracking-editorial border transition-colors",
              selected
                ? "border-ink bg-ink text-ivory"
                : "border-hairline text-ink hover:border-ink",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
