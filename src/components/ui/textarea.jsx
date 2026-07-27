import React from 'react';
import { cn } from '@/lib/utils';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-md border border-[#cbd5e1] bg-white px-4 py-3 text-sm text-[#0A2540] placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
