import React from 'react';

const Button = React.forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-charcoal-900 text-cream-50 hover:bg-charcoal-800 border border-charcoal-900',
    secondary: 'bg-transparent text-charcoal-900 border border-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50',
    accent: 'bg-gold-500 text-charcoal-900 hover:bg-gold-600 border border-gold-500',
    ghost: 'bg-transparent text-charcoal-900 hover:bg-cream-200',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm tracking-wide',
    md: 'px-6 py-3 text-sm tracking-widest uppercase',
    lg: 'px-8 py-4 text-base tracking-widest uppercase',
  };

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
