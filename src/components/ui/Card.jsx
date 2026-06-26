import React from 'react';
import { cn } from '@/lib/utils';

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-[#e2e8f0] shadow-sm p-8 transition-all duration-200 hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;