import { cn } from '@/lib/utils';

export function Button({ children, className, variant = 'primary', size = 'md', ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-red-700 hover:bg-red-800 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-yellow-400 hover:bg-yellow-500 text-slate-900 shadow-md hover:shadow-lg',
    outline: 'border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white',
    ghost: 'text-slate-700 hover:bg-gray-100',
    dark: 'bg-slate-900 hover:bg-slate-800 text-white shadow-md',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
