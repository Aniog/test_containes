import React from "react";
import { Plus, Minus } from "lucide-react";

export default function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  return (
    <div>
      <p className="label-eyebrow text-ink">Quantity</p>
      <div className="mt-3 inline-flex items-center border border-hairline">
        <button
          onClick={dec}
          className="w-11 h-11 flex items-center justify-center text-ink hover:text-gold transition-colors disabled:opacity-40"
          disabled={value <= min}
          aria-label="Decrease quantity"
        >
          <Minus size={14} />
        </button>
        <span className="w-12 text-center text-sm">{value}</span>
        <button
          onClick={inc}
          className="w-11 h-11 flex items-center justify-center text-ink hover:text-gold transition-colors disabled:opacity-40"
          disabled={value >= max}
          aria-label="Increase quantity"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}
