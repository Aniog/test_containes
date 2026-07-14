import { cn } from '@/lib/utils'

const Button = ({ as: Component = 'button', variant = 'primary', className = '', children, ...props }) => {
  const variants = {
    primary: 'bg-velmora-ink text-velmora-cream border border-velmora-ink hover:bg-velmora-espresso hover:border-velmora-espresso shadow-soft',
    gold: 'bg-velmora-gold text-velmora-ink border border-velmora-gold hover:bg-velmora-champagne hover:border-velmora-champagne shadow-soft',
    outline: 'bg-transparent text-velmora-ink border border-velmora-ink/30 hover:border-velmora-gold hover:text-velmora-espresso hover:bg-velmora-champagne/20',
    ghost: 'bg-transparent text-current border border-transparent hover:bg-velmora-porcelain/10',
  }

  return (
    <Component
      className={cn(
        'inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-velmora-gold disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
