import { cn } from '@/lib/utils'

const styles = {
  solid: 'bg-velmora-gold text-velmora-ivory border-velmora-gold shadow-glow hover:bg-velmora-espresso hover:border-velmora-espresso',
  outline: 'bg-transparent text-velmora-espresso border-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold',
  light: 'bg-velmora-ivory text-velmora-espresso border-velmora-ivory hover:bg-velmora-champagne hover:border-velmora-champagne',
}

export default function Button({ children, className, variant = 'solid', as: Tag = 'button', ...props }) {
  return (
    <Tag
      className={cn(
        'inline-flex items-center justify-center rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-editorial transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
