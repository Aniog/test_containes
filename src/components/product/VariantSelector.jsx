import React from "react";

export default function VariantSelector({ options = [], value, onChange, label = "Finish" }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="label-eyebrow text-ink">{label}</p>
        {value && (
          <p className="text-xs text-muted">{value}</p>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onChange(opt.value)}
              className={`px-5 py-3 border label-product text-[0.7rem] transition-all duration-300 ${
                active
                  ? "border-ink bg-ink text-cream"
                  : "border-hairline text-ink hover:border-ink"
              }`}
            >
              <span
                className="inline-block w-3 h-3 rounded-full mr-2 align-middle"
                style={{ background: opt.swatch }}
              />
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
