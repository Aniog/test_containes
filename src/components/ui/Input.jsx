import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'flex h-12 w-full rounded border border-[#E8E6E1] bg-white px-4 text-sm text-[#2C3E50] placeholder:text-[#6B7280] focus:border-[#C5A46E] focus:outline-none focus:ring-1 focus:ring-[#C5A46E] disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;