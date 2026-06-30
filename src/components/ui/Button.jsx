import { cn } from '@/lib/utils';

const variants = {
  primary: 'bg-charcoal-950 text-cream-50 hover:bg-charcoal-900 border-charcoal-950',
  secondary: 'bg-transparent text-charcoal-950 border-charcoal-950 hover:bg-charcoal-950 hover:text-cream-50',
  accent: 'bg-gold-500 text-white hover:bg-gold-600 border-gold-500',
  ghost: 'bg-transparent text-charcoal-950 border-transparent hover:bg-cream-100',
  link: 'bg-transparent text-charcoal-950 border-transparent underline underline-offset-4 hover:text-gold-600 p-0 h-auto',
};

const sizes = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-6 text-sm',
  lg: 'h-13 px-8 text-sm',
  xl: 'h-14 px-10 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  fullWidth = false,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-sans font-medium tracking-wide uppercase transition-all duration-300 ease-out border rounded-none cursor-pointer',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
