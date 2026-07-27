import React from 'react';
import { cn } from '@/lib/utils';

const baseClasses =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const variants = {
  default: 'bg-slate-900 text-white hover:bg-slate-800',
  secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
  outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
  ghost: 'text-slate-900 hover:bg-slate-100',
};

const sizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-6',
  icon: 'h-10 w-10',
};

function Button({ className, variant = 'default', size = 'default', ...props }) {
  return (
    <button
      className={cn(baseClasses, variants[variant] || variants.default, sizes[size] || sizes.default, className)}
      {...props}
    />
  );
}

export { Button };
