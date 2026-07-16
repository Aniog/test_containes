import { cn } from '@/lib/utils'

export default function PremiumButton({ children, variant = 'solid', className = '', ...props }) {
  const variants = {
    solid: 'bg-velmora-gold text-velmora-ivory border-velmora-gold hover:bg-velmora-goldDark hover:border-velmora-goldDark shadow-soft',
    outline: 'bg-transparent text-velmora-ink border-velmora-gold hover:bg-velmora-gold hover:text-velmora-ivory',
    dark: 'bg-velmora-ink text-velmora-ivory border-velmora-ink hover:bg-velmora-espresso',
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-nav transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
