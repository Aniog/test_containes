import { cn } from '@/lib/utils';

const variants = {
  primary: 'bg-brand-red hover:bg-brand-red-dark text-white',
  secondary: 'bg-navy-900 hover:bg-navy-800 text-white',
  outline: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent',
  'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-navy-900 bg-transparent',
  ghost: 'text-navy-900 hover:bg-navy-50 bg-transparent',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({ variant = 'primary', size = 'md', className, children, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red disabled:opacity-60 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
