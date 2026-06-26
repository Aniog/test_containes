import React from 'react';
import { cn } from '@/lib/utils';

const Input = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        'w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#2d3748] placeholder:text-[#a0aec0] focus:outline-none focus:ring-2 focus:ring-[#1a1f2e] focus:border-transparent transition-all duration-200',
        className
      )}
      {...props}
    />
  );
};

export default Input;