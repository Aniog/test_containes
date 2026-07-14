import { Minus, Plus } from 'lucide-react';
import { clsx } from 'clsx';

export function QuantitySelector({ value, onChange, min = 1, max = 10, size = 'md' }) {
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

  const sizeClasses = {
    sm: 'w-20',
    md: 'w-28',
  };

  return (
    <div className={clsx('flex items-center border border-warm-gray-100', sizeClasses[size])}>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={value <= min}
        className={clsx(
          'flex items-center justify-center text-warm-gray-600 hover:text-warm-gray-900',
          'transition-colors duration-200',
          'disabled:opacity-30 disabled:cursor-not-allowed',
          size === 'sm' ? 'w-8 h-8' : 'w-10 h-10'
        )}
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      
      <span className={clsx(
        'flex-1 text-center font-medium text-warm-gray-900',
        size === 'sm' ? 'text-sm' : 'text-base'
      )}>
        {value}
      </span>
      
      <button
        type="button"
        onClick={handleIncrement}
        disabled={value >= max}
        className={clsx(
          'flex items-center justify-center text-warm-gray-600 hover:text-warm-gray-900',
          'transition-colors duration-200',
          'disabled:opacity-30 disabled:cursor-not-allowed',
          size === 'sm' ? 'w-8 h-8' : 'w-10 h-10'
        )}
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}

export default QuantitySelector;
