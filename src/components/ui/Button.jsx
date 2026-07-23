import { forwardRef } from 'react';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-velmora-gold text-velmora-charcoal hover:bg-velmora-gold-light hover:shadow-soft-hover active:scale-[0.98]',
    secondary: 'bg-transparent border border-velmora-gold text-velmora-charcoal hover:bg-velmora-gold hover:text-velmora-charcoal',
    ghost: 'bg-transparent text-velmora-charcoal hover:bg-velmora-sand'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    full: 'w-full px-6 py-4 text-sm'
  };

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;