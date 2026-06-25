import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    default: 'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900',
    destructive: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500',
    outline: 'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-400',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400',
    ghost: 'hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-400',
    link: 'text-slate-900 underline-offset-4 hover:underline',
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };
