import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({
  className,
  type = 'text',
  error,
  ...props
}, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'h-11 w-full px-4 text-sm bg-transparent border transition-colors duration-200',
        'placeholder:text-velmora-warm-gray',
        'focus:outline-none focus:border-velmora-gold',
        error ? 'border-red-500' : 'border-velmora-sand',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
