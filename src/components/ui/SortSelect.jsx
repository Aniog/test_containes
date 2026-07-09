import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function SortSelect({ value, onChange, options, className }) {
  return (
    <div className={cn("relative", className)}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-none border border-hairline bg-cream py-2.5 pl-4 pr-10 text-sm font-sans text-base-800 focus:border-gold focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
      />
    </div>
  );
}
