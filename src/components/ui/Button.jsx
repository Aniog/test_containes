import { forwardRef } from 'react';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-premium focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary text-text-light hover:bg-accent focus:ring-primary',
    secondary: 'border border-primary text-primary hover:bg-primary hover:text-text-light focus:ring-primary',
    accent: 'bg-accent text-primary hover:bg-accent-hover focus:ring-accent',
    ghost: 'text-primary hover:bg-border/50 focus:ring-primary'
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