import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-gold text-white border-gold hover:bg-gold-dark hover:border-gold-dark',
  secondary:
    'bg-transparent text-espresso border-espresso hover:bg-espresso hover:text-ivory',
  ghost:
    'bg-transparent text-ivory border-ivory hover:bg-ivory hover:text-espresso',
  text: 'bg-transparent border-transparent text-espresso hover:text-gold underline-offset-4 hover:underline',
  goldDark:
    'bg-espresso text-ivory border-espresso hover:bg-gold hover:border-gold',
}

export default function Button({
  children,
  variant = 'primary',
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 border',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
