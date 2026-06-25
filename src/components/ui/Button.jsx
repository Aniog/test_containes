import React from 'react'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center font-sans uppercase tracking-[0.18em] text-xs transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed select-none'

const variants = {
  // solid gold accent button (premium)
  solid:
    'bg-gold text-ink hover:bg-gold-deep hover:text-ivory py-3.5 px-8',
  // solid dark
  dark: 'bg-ink text-ivory hover:bg-espresso py-3.5 px-8',
  // outlined on light
  outline:
    'border border-ink text-ink hover:bg-ink hover:text-ivory py-3.5 px-8',
  // outlined on dark
  outlineLight:
    'border border-ivory/70 text-ivory hover:bg-ivory hover:text-ink py-3.5 px-8',
  // ghost / link
  link: 'text-ink hover:text-gold-deep py-1 px-0 normal-case tracking-normal',
  // small pill
  pill: 'border border-sand text-ink hover:border-ink py-2 px-4 text-[11px]',
}

export function Button({
  as: Tag = 'button',
  variant = 'solid',
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag className={cn(base, variants[variant] || variants.solid, className)} {...rest}>
      {children}
    </Tag>
  )
}

export default Button
