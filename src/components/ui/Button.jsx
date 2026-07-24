import React from 'react'
import { cn } from '@/lib/utils'

const VARIANTS = {
  primary:
    'bg-gold text-cream hover:bg-gold-deep border border-gold hover:border-gold-deep',
  outline:
    'bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream',
  light:
    'bg-cream text-ink border border-cream hover:bg-sand',
  dark:
    'bg-ink text-cream border border-ink hover:bg-ink/90',
}

const SIZES = {
  sm: 'px-5 py-2 text-[11px]',
  md: 'px-8 py-3 text-xs',
  lg: 'px-10 py-4 text-xs',
}

export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const Comp = as
  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center font-sans uppercase tracking-widest2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  )
}
