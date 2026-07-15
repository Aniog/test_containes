import { cn } from '@/lib/utils'

const buttonVariants = {
  primary:
    'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold/90 shadow-velmora',
  outline:
    'border border-velmora-mist bg-transparent text-current hover:border-velmora-gold hover:text-velmora-gold',
  ghost: 'bg-transparent text-current hover:bg-velmora-porcelain/60',
}

export default function Button({
  as: Component = 'button',
  className,
  variant = 'primary',
  ...props
}) {
  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] transition duration-300',
        buttonVariants[variant],
        className,
      )}
      {...props}
    />
  )
}
