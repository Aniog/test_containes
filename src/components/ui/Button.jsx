import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Button = forwardRef(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center font-medium
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variants = {
      primary: `
        bg-velmora-gold text-white
        hover:bg-velmora-gold-hover hover:shadow-button
        active:scale-[0.98]
      `,
      secondary: `
        bg-transparent text-velmora-gold border border-velmora-gold
        hover:bg-velmora-gold hover:text-white
        active:scale-[0.98]
      `,
      ghost: `
        bg-transparent text-velmora-black
        hover:bg-velmora-light
        active:scale-[0.98]
      `
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm uppercase tracking-wider rounded',
      md: 'px-6 py-3 text-sm uppercase tracking-wider rounded',
      lg: 'px-8 py-4 text-base uppercase tracking-wider rounded',
      full: 'w-full px-6 py-4 text-sm uppercase tracking-wider rounded'
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;