import React from 'react';
import { cn } from '@/lib/utils';

const Button = ({ className, variant = 'primary', size = 'default', children, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#1a1f2e] text-white hover:bg-[#2d3748] focus:ring-[#1a1f2e]',
    secondary: 'bg-white text-[#1a1f2e] border border-[#1a1f2e] hover:bg-[#f8f7f4] focus:ring-[#1a1f2e]',
    accent: 'bg-[#c5a46e] text-white hover:bg-[#b8975e] focus:ring-[#c5a46e]',
  };

  const sizes = {
    default: 'px-6 py-3 text-base',
    sm: 'px-4 py-2 text-sm',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;