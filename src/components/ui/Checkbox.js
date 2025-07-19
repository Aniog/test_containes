import React from 'react';
import { cn } from '../../lib/utils';

const Checkbox = React.forwardRef(({ className, checked, onChange, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          className
        )}
        ref={ref}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <div className={cn(
        "absolute left-0 top-0 h-4 w-4 rounded-sm border border-primary pointer-events-none transition-colors",
        checked ? "bg-primary" : "bg-transparent"
      )}>
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-white"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
    </div>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;