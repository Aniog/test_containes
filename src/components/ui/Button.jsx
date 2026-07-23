import React from 'react'

const baseClassName =
  'inline-flex items-center justify-center gap-2 rounded-full border text-sm font-medium transition-all duration-300 ease-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold/50 disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary:
    'border-velmora-accent bg-velmora-accent px-6 py-3 text-velmora-accent-foreground shadow-soft hover:-translate-y-0.5 hover:bg-velmora-gold',
  secondary:
    'border-velmora-line bg-transparent px-6 py-3 text-velmora-ink hover:border-velmora-accent hover:bg-velmora-ink hover:text-velmora-ivory',
  ghost:
    'border-transparent bg-transparent px-2 py-2 text-velmora-ink hover:text-velmora-gold',
}

const Button = ({
  children,
  className = '',
  variant = 'primary',
  as: Component = 'button',
  ...props
}) => (
  <Component className={`${baseClassName} ${variants[variant]} ${className}`.trim()} {...props}>
    {children}
  </Component>
)

export default Button
