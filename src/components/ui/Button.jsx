import { cn } from '@/lib/utils'

const variantClasses = {
  primary:
    'bg-velmora-gold text-velmora-noir hover:bg-velmora-gold-soft focus-visible:ring-velmora-gold',
  secondary:
    'border border-velmora-line bg-velmora-ivory text-velmora-ink hover:bg-white focus-visible:ring-velmora-line',
  ghost:
    'border border-white/20 bg-transparent text-velmora-ivory hover:bg-white/10 focus-visible:ring-white/30',
  dark: 'bg-velmora-ink text-velmora-ivory hover:bg-velmora-noir focus-visible:ring-velmora-line',
}

const sizeClasses = {
  sm: 'h-10 px-4 text-[11px] uppercase tracking-product',
  md: 'h-12 px-6 text-xs uppercase tracking-product',
  lg: 'h-14 px-7 text-xs uppercase tracking-product',
}

export function buttonVariants({ variant = 'primary', size = 'md', className } = {}) {
  return cn(
    'inline-flex items-center justify-center rounded-full transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-velmora-pearl disabled:pointer-events-none disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )
}

export default function Button({ className, variant, size, type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  )
}
