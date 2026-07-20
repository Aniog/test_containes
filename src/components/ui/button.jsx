import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const base = 'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-[#1c1917] text-white hover:bg-[#b8860b]',
    outline: 'border border-[#1c1917] text-[#1c1917] hover:bg-[#1c1917] hover:text-white',
    ghost: 'bg-transparent text-[#1c1917] hover:bg-[#f1efe9]',
    accent: 'bg-[#b8860b] text-white hover:bg-[#1c1917]',
  };
  const sizes = {
    default: 'h-11 px-6 text-sm',
    sm: 'h-9 px-4 text-xs',
    lg: 'h-12 px-8 text-base',
    icon: 'h-10 w-10',
  };

  return (
    <button
      ref={ref}
      className={cn(base, variants[variant] || variants.default, sizes[size] || sizes.default, className)}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };
