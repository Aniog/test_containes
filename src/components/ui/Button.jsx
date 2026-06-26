import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-brand text-white hover:bg-brand-dark shadow-sm',
  accent:
    'bg-accent text-white hover:bg-accent-dark shadow-sm',
  outline:
    'border border-slate-300 text-brand bg-white hover:border-brand hover:text-accent',
  ghost:
    'text-brand hover:bg-slate-100',
  amber:
    'bg-amber text-white hover:brightness-95 shadow-sm',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  as: As = 'button',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  return (
    <As
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </As>
  )
}
