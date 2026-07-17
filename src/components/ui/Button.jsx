import { cn } from '@/lib/utils';

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  fullWidth = false,
  ...props
}) {
  return (
    <button
      className={cn(
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        disabled && 'opacity-50 cursor-not-allowed hover:translate-y-0',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
