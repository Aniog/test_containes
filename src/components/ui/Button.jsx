import { forwardRef } from 'react';

const variants = {
  primary:
    'bg-accent text-accent-foreground hover:bg-[#B8943B] uppercase tracking-wider text-sm px-8 py-3',
  outline:
    'border border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-wider text-sm px-8 py-3',
  ghost:
    'text-foreground hover:bg-muted uppercase tracking-wider text-sm px-4 py-2',
  none: '',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-8 py-3 text-sm',
  lg: 'px-10 py-4 text-base',
};

const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', className = '', children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center font-medium transition-all duration-300 ease-out ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;