import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const styles = {
  primary:
    'bg-velmora-gold text-velmora-noir hover:brightness-105 focus-visible:ring-2 focus-visible:ring-velmora-gold/60',
  secondary:
    'border border-velmora-line bg-velmora-pearl text-velmora-ink hover:border-velmora-gold hover:text-velmora-noir',
  ghost: 'bg-transparent text-current hover:bg-white/10',
}

const Button = forwardRef(function Button(
  { className, type = 'button', variant = 'primary', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-luxury transition duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60',
        styles[variant],
        className,
      )}
      {...props}
    />
  )
})

export default Button
