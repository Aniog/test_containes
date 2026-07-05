import React from 'react';
import { cn } from '@/lib/utils';

const Badge = ({ className, children, ...props }) => (
  <span className={cn('inline-flex items-center rounded-full bg-brand-warm px-3 py-1 text-xs font-sans font-medium tracking-wide text-brand-ink', className)} {...props}>
    {children}
  </span>
);

export default Badge;
