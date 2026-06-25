import React from 'react';
import { cn } from '@/lib/utils';

const Badge = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const baseStyles = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    default: 'border-transparent bg-slate-900 text-white hover:bg-slate-800',
    secondary: 'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200',
    destructive: 'border-transparent bg-red-500 text-white hover:bg-red-600',
    outline: 'text-slate-900 border-slate-300',
  };

  return (
    <div ref={ref} className={cn(baseStyles, variants[variant], className)} {...props} />
  );
});

Badge.displayName = 'Badge';

export { Badge };
