import React from "react";
import { cn } from "@/lib/utils";

const tones = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
];

export default function VariantSelector({ value, onChange }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-stone mb-3">
        Tone — <span className="text-ink">{value}</span>
      </p>
      <div className="flex gap-3">
        {tones.map((tone) => (
          <button
            key={tone.id}
            type="button"
            onClick={() => onChange(tone.id)}
            className={cn(
              "px-6 py-2.5 text-xs uppercase tracking-[0.16em] border transition-colors",
              value === tone.id
                ? "border-ink bg-ink text-cream"
                : "border-line text-ink-soft hover:border-ink"
            )}
          >
            {tone.label}
          </button>
        ))}
      </div>
    </div>
  );
}
