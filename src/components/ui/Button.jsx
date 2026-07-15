import { cn } from '@/lib/utils'

const styles = {
  solid: 'bg-velmora-champagne text-velmora-ink shadow-soft hover:bg-velmora-rose',
  outline: 'border border-velmora-ink/25 text-velmora-ink hover:border-velmora-brass hover:bg-velmora-mist',
  dark: 'bg-velmora-ink text-velmora-cream hover:bg-velmora-espresso',
}

export default function Button({ children, className, variant = 'solid', ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-velmora-brass focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
