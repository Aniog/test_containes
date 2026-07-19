import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const base = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    default: 'bg-[#b08d57] text-white hover:bg-[#9a7a48]',
    outline: 'border border-[#b08d57] text-[#b08d57] hover:bg-[#b08d57] hover:text-white',
    ghost: 'text-[#3d3229] hover:bg-[#f5f0e8]',
    link: 'text-[#b08d57] underline-offset-4 hover:underline'
  };

  const sizes = {
    default: 'h-11 px-6 text-sm tracking-wide',
    sm: 'h-9 px-4 text-xs tracking-wide',
    lg: 'h-12 px-8 text-base tracking-wide',
    icon: 'h-10 w-10'
  };

  return <button className={cn(base, variants[variant], sizes[size], className)} ref={ref} {...props} />;
});

Button.displayName = 'Button';

export { Button };
