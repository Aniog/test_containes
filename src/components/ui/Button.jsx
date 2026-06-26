import { cn } from '@/lib/utils'

export function Button({
  children,
  variant = 'primary',
  className,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-am-gold disabled:opacity-50'
  const styles = {
    primary:
      'bg-am-gold text-am-bg hover:bg-am-gold-hover hover:scale-[1.02] hover:shadow-lg',
    secondary:
      'border border-am-gold text-am-gold bg-transparent hover:bg-am-gold/10 hover:scale-[1.02]',
    outline:
      'border border-white/10 text-am-text bg-transparent hover:border-am-gold/40 hover:text-am-gold',
  }

  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  )
}
