import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ 
  className,
  type = 'text',
  ...props 
}, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full px-4 py-3 bg-velmora-card border border-velmora-border text-velmora-text placeholder-velmora-muted",
        "focus:outline-none focus:border-velmora-gold transition-colors duration-300",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;