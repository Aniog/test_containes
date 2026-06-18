import React from 'react';
import { clsx } from 'clsx';

// Editorial premium buttons. Three variants: primary (gold solid), outline,
// outlineLight (for use on dark sections).
const VARIANTS = {
  primary:
    'bg-gold text-cream hover:bg-gold-deep border border-gold hover:border-gold-deep',
  outline:
    'bg-transparent text-espresso border border-espresso hover:bg-espresso hover:text-cream',
  outlineLight:
    'bg-transparent text-cream border border-cream hover:bg-cream hover:text-espresso',
  ghost: 'bg-transparent text-espresso hover:text-gold border border-transparent',
};

const SIZES = {
  md: 'px-7 py-3.5 text-[11px]',
  lg: 'px-9 py-4 text-xs',
  sm: 'px-5 py-2.5 text-[10px]',
};

const Button = React.forwardRef(function Button(
  {
    as: Component = 'button',
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <Component
      ref={ref}
      className={clsx(
        'inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-[0.25em] transition-colors duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-porcelain disabled:opacity-50 disabled:cursor-not-allowed',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
});

export default Button;
