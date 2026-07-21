import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'w-full border-b border-[#C4B8A8] bg-transparent px-0 py-3 text-[#1C1917] placeholder:text-[#8A8178] focus:border-[#A67C52] focus:outline-none transition-colors',
        className
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
