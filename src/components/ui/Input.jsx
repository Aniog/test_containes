import React from 'react';
import { cn } from '@/lib/utils';

const Input = ({
  label,
  error,
  className,
  type = 'text',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-cocoa mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        className={cn(
          'w-full px-4 py-3 bg-ivory border border-silk/40 rounded-none transition-all duration-300',
          'placeholder:text-silk/60',
          'focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne/30',
          'disabled:bg-cream disabled:cursor-not-allowed',
          error && 'border-roseGold focus:border-roseGold focus:ring-roseGold/30',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-roseGold">{error}</p>
      )}
    </div>
  );
};

export default Input;
