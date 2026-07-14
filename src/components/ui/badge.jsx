import React from 'react';
import { cn } from '@/lib/utils';

const Badge = ({ children, variant = 'default', className }) => {
  const variants = {
    default: 'bg-[#1a1a1a] text-white',
    secondary: 'bg-[#f5f5f0] text-[#1a1a1a]',
    outline: 'border border-[#e5e5e5] text-[#5c5c5c]',
    accent: 'bg-[#b8860b] text-white',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export { Badge };
