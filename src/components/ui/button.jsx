import React from 'react';

const buttonVariants = {
  primary: 'bg-charcoal text-white hover:bg-charcoal-light border border-transparent',
  accent: 'bg-gold text-white hover:bg-gold-dark border border-transparent',
  outline: 'bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-white',
  ghost: 'bg-transparent text-charcoal border border-transparent hover:bg-cream',
  link: 'bg-transparent text-gold border border-transparent underline-offset-4 hover:underline p-0 h-auto',
};

const sizeVariants = {
  sm: 'px-4 py-2 text-xs tracking-widest uppercase',
  md: 'px-6 py-3 text-xs tracking-widest uppercase',
  lg: 'px-8 py-4 text-xs tracking-widest uppercase',
};

export const Button = React.forwardRef(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed';

    return (
      <button
        ref={ref}
        className={`${base} ${buttonVariants[variant]} ${sizeVariants[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
