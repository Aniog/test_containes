import React from 'react';
import { cn } from '@/lib/utils';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-md border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-sm placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:ring-offset-2 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export { Textarea };