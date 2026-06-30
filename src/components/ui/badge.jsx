import React from 'react';
import { cn } from '@/lib/utils';

const Badge = React.forwardRef(
  ({ className, variant = 'default', ...props }, ref) => {
    const base =
      'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2';

    const variants = {
      default: 'border-transparent bg-gold-500 text-white',
      secondary: 'border-transparent bg-base-200 text-ink',
      outline: 'border-base-300 text-ink',
    };

    return (
      <span className={cn(base, variants[variant], className)} ref={ref} {...props} />
    );
  },
);

Badge.displayName = 'Badge';

export { Badge };
