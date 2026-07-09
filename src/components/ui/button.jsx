import React from 'react';
import { cn } from '@/lib/utils';

export const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  const variants = {
    primary: 'bg-[#1a1a1a] text-white hover:bg-stone-800',
    outline: 'border border-stone-200 text-stone-900 hover:bg-stone-50',
    ghost: 'text-stone-900 hover:bg-stone-50',
    accent: 'bg-[#9a7b4f] text-white hover:bg-[#856a44]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
    icon: 'p-2',
  };

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest font-sans',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});

Button.displayName = 'Button';
