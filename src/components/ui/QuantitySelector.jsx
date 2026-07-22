import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 10,
  disabled = false,
}) {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="flex items-center border border-brand-border-subtle">
      <button
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        className={cn(
          'w-10 h-10 flex items-center justify-center',
          'text-brand-text-secondary hover:text-brand-gold',
          'transition-colors duration-200',
          'disabled:opacity-50 disabled:cursor-not-allowed'
        )}
        aria-label="Decrease quantity"
      >
        <Minus className="w-3 h-3" />
      </button>
      <span className="w-12 text-center text-sm font-medium">{value}</span>
      <button
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        className={cn(
          'w-10 h-10 flex items-center justify-center',
          'text-brand-text-secondary hover:text-brand-gold',
          'transition-colors duration-200',
          'disabled:opacity-50 disabled:cursor-not-allowed'
        )}
        aria-label="Increase quantity"
      >
        <Plus className="w-3 h-3" />
      </button>
    </div>
  );
}
