import { cn } from '../../lib/utils'

const variants = {
  primary:
    'bg-champagne text-obsidian shadow-card hover:bg-bronze hover:text-shell',
  outline:
    'border border-ink/15 bg-transparent text-ink hover:border-champagne hover:text-bronze',
  dark: 'bg-obsidian text-shell hover:bg-ink',
}

const sizes = {
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-8 text-sm',
  icon: 'h-11 w-11',
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/70 disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}
