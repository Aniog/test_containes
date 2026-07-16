import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-velmora-ink text-velmora-ivory hover:bg-velmora-cocoa',
  outline: 'border border-velmora-sand bg-transparent text-velmora-ink hover:bg-velmora-mist',
  ghost: 'text-velmora-ink hover:bg-stone-900/5',
  light: 'border border-white/20 bg-white/10 text-velmora-ivory hover:bg-white/20',
}

const sizes = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-sm uppercase tracking-[0.2em]',
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
        'inline-flex items-center justify-center gap-2 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-velmora-gold/70 focus:ring-offset-2 focus:ring-offset-velmora-ivory',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}
