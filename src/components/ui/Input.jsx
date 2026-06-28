import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'flex h-12 w-full border border-[#EDE8E0] bg-white px-4 py-2 text-sm text-[#1C1C1C] placeholder:text-[#9A958E] focus:border-[#B89778] focus:outline-none focus:ring-1 focus:ring-[#B89778] transition-colors',
        className
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
