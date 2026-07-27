import React from 'react';
import { cn } from '@/lib/utils';

const Select = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <select
      className={cn(
        'flex h-11 w-full rounded-md border border-[#cbd5e1] bg-white px-4 py-2 text-sm text-[#0A2540] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});
Select.displayName = 'Select';

export { Select };
