import React from 'react';
import { cn } from '@/lib/utils';

const VariantSelector = ({ variants, selectedVariant, onSelect }) => {
  return (
    <div className="space-y-3">
      <label className="text-sm text-cocoa">
        Finish: <span className="text-espresso font-medium">{selectedVariant}</span>
      </label>
      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => (
          <button
            key={variant.value}
            onClick={() => onSelect(variant.value)}
            className={cn(
              'px-5 py-2.5 text-sm font-medium transition-all duration-300 border',
              selectedVariant === variant.value
                ? 'bg-espresso text-ivory border-espresso'
                : 'bg-transparent text-espresso border-espresso/30 hover:border-espresso'
            )}
          >
            {variant.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VariantSelector;
