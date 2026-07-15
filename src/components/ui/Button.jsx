import { cn } from '@/lib/utils';

const variants = {
  primary: 'bg-gold text-white hover:bg-goldDark border border-gold',
  secondary: 'bg-transparent text-charcoal hover:bg-charcoal hover:text-ivory border border-charcoal',
  outline: 'bg-transparent text-gold hover:bg-gold hover:text-white border border-gold',
  ghost: 'bg-transparent text-charcoal hover:bg-sand',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 uppercase',
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
