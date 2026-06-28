import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const Select = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          'flex h-12 w-full appearance-none border border-[#EDE8E0] bg-white px-4 py-2 pr-10 text-sm text-[#1C1C1C] focus:border-[#B89778] focus:outline-none focus:ring-1 focus:ring-[#B89778] transition-colors cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B665F] pointer-events-none" />
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
