import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-12 w-full border border-[#D4C9B8] bg-[#F8F5F0] px-4 py-2 text-sm text-[#1C1B18] placeholder:text-[#8A8175] focus:border-[#BFA46F] focus:outline-none focus:ring-1 focus:ring-[#BFA46F] disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
