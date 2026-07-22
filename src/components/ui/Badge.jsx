import React from 'react';
import { cn } from '@/lib/utils';

const Badge = ({ 
  children, 
  variant = 'default',
  className 
}) => {
  const variants = {
    default: "bg-velmora-card text-velmora-muted",
    gold: "bg-velmora-gold text-velmora-black",
    outline: "bg-transparent border border-velmora-gold text-velmora-gold",
  };

  return (
    <span className={cn(
      "inline-block px-3 py-1 text-xs uppercase tracking-wider",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

export default Badge;