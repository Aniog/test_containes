import { cn } from '@/lib/cn'

const variants = {
  primary:
    'bg-brand-accent text-white hover:bg-brand-accent-2 active:bg-brand-accent-2 shadow-sm',
  secondary:
    'bg-brand-ink text-white hover:bg-brand-navy active:bg-brand-navy shadow-sm',
  ghost:
    'bg-white text-brand-ink border border-brand-line hover:bg-brand-mist active:bg-brand-mist',
  outlineWhite:
    'bg-transparent text-white border border-white/40 hover:bg-white/10 active:bg-white/10',
}

const sizes = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
  xl: 'h-14 px-7 text-base',
}

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'lg',
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}