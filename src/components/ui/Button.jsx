import { cn } from '@/lib/utils'

export function Button({ children, variant = 'primary', size = 'md', className, ...props }) {
  const base = 'inline-flex items-center justify-center font-sans uppercase tracking-widest transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-gold border-gold text-obsidian hover:bg-gold-light hover:border-gold-light',
    outline: 'bg-transparent border-gold text-gold hover:bg-gold hover:text-obsidian',
    'outline-dark': 'bg-transparent border-obsidian text-obsidian hover:bg-obsidian hover:text-ivory',
    ghost: 'bg-transparent border-transparent text-driftwood hover:text-obsidian',
    dark: 'bg-obsidian border-obsidian text-ivory hover:bg-espresso',
  }

  const sizes = {
    sm: 'text-[10px] px-5 py-2',
    md: 'text-xs px-8 py-3',
    lg: 'text-xs px-10 py-4',
  }

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
