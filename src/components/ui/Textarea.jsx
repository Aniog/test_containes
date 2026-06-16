import React from 'react';
import { cn } from '@/lib/utils';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[120px] w-full rounded border border-[#E8E6E1] bg-white px-4 py-3 text-sm text-[#2C3E50] placeholder:text-[#6B7280] focus:border-[#C5A46E] focus:outline-none focus:ring-1 focus:ring-[#C5A46E] disabled:cursor-not-allowed disabled:opacity-50 resize-y',
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;