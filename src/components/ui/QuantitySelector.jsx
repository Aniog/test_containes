import React from 'react';
import { Minus, Plus } from 'lucide-react';

const QuantitySelector = ({ value, onChange, min = 1, max = 99 }) => {
  const decrease = () => onChange(Math.max(min, value - 1));
  const increase = () => onChange(Math.min(max, value + 1));

  return (
    <div className="inline-flex items-center border border-stone-200 bg-white">
      <button
        type="button"
        onClick={decrease}
        className="h-11 w-11 flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      <span className="w-10 text-center font-sans text-sm text-stone-900">{value}</span>
      <button
        type="button"
        onClick={increase}
        className="h-11 w-11 flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;
