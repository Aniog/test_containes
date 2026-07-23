import { forwardRef } from 'react';

const Input = forwardRef(({
  type = 'text',
  placeholder,
  className = '',
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className={`w-full px-4 py-3 bg-white border border-velmora-border text-velmora-charcoal placeholder-velmora-muted font-sans text-sm transition-all duration-300 focus:outline-none focus:border-velmora-gold ${className}`}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;