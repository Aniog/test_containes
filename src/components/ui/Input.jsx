import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-12 w-full border border-[#EDE9E3] bg-white px-4 py-2 text-sm placeholder:text-[#9A9590] focus:border-[#C5A46E] focus:outline-none focus:ring-1 focus:ring-[#C5A46E] disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
