import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
  const Comp = asChild ? 'span' : 'button';
  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-blue-800 text-white hover:bg-blue-900': variant === 'default',
          'bg-orange-600 text-white hover:bg-orange-700': variant === 'accent',
          'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50': variant === 'outline',
          'bg-transparent text-blue-800 hover:bg-blue-50': variant === 'ghost',
          'h-10 px-4 py-2 text-sm': size === 'default',
          'h-12 px-6 py-3 text-base': size === 'lg',
          'h-8 px-3 py-1.5 text-xs': size === 'sm',
        },
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button };
