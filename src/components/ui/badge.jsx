import React from 'react';
import { cn } from '@/lib/utils';

const Badge = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: 'border-transparent bg-slate-900 text-white',
    secondary: 'border-transparent bg-slate-100 text-slate-900',
    outline: 'text-slate-900 border-slate-300',
    success: 'border-transparent bg-emerald-50 text-emerald-700',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
        variants[variant],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Badge.displayName = 'Badge';

export { Badge };
