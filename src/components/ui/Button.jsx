import { cn } from '@/lib/utils';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 tracking-wide';
  
  const variants = {
    primary: 'bg-velmora-charcoal text-velmora-cream hover:bg-velmora-espresso border border-velmora-charcoal',
    secondary: 'bg-transparent text-velmora-charcoal border border-velmora-charcoal hover:bg-velmora-charcoal hover:text-velmora-cream',
    gold: 'bg-velmora-gold text-velmora-espresso hover:bg-velmora-gold-dark border border-velmora-gold hover:border-velmora-gold-dark',
    ghost: 'bg-transparent text-velmora-charcoal hover:text-velmora-taupe',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
    full: 'px-6 py-4 text-sm w-full',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
