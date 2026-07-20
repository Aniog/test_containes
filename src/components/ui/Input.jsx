import { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  error,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-primary mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`
          w-full px-4 py-3 
          border border-border 
          bg-card-bg 
          text-primary 
          placeholder:text-secondary/60
          transition-all duration-300
          focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
          ${error ? 'border-error' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;