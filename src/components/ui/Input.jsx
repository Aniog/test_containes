import { forwardRef } from 'react';
import { clsx } from 'clsx';

export const Input = forwardRef(({
  label,
  error,
  className,
  containerClassName,
  ...props
}, ref) => {
  return (
    <div className={clsx('w-full', containerClassName)}>
      {label && (
        <label className="block mb-2 text-xs font-medium tracking-wider uppercase text-warm-gray-600">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={clsx(
          'w-full px-4 py-3 bg-white border border-warm-gray-100',
          'text-warm-gray-900 placeholder-warm-gray-400',
          'font-sans text-sm',
          'transition-colors duration-200',
          'focus:outline-none focus:border-champagne',
          error && 'border-red-500 focus:border-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export const Textarea = forwardRef(({
  label,
  error,
  className,
  containerClassName,
  rows = 4,
  ...props
}, ref) => {
  return (
    <div className={clsx('w-full', containerClassName)}>
      {label && (
        <label className="block mb-2 text-xs font-medium tracking-wider uppercase text-warm-gray-600">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={clsx(
          'w-full px-4 py-3 bg-white border border-warm-gray-100',
          'text-warm-gray-900 placeholder-warm-gray-400',
          'font-sans text-sm resize-none',
          'transition-colors duration-200',
          'focus:outline-none focus:border-champagne',
          error && 'border-red-500 focus:border-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Input;
