import React from 'react'
import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-ink text-bg hover:bg-ink-soft focus-visible:ring-ink',
  accent:
    'bg-accent text-bg hover:bg-accent-strong focus-visible:ring-accent',
  outline:
    'border border-line bg-transparent text-ink hover:bg-bg focus-visible:ring-ink',
  ghost:
    'bg-transparent text-ink hover:bg-line/40 focus-visible:ring-ink',
  onDark:
    'bg-bg text-ink hover:bg-accent-soft focus-visible:ring-bg',
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-[15px]',
  xl: 'h-14 px-8 text-base',
}

const Button = React.forwardRef(function Button(
  {
    as: Comp = 'button',
    className,
    variant = 'primary',
    size = 'md',
    pill = true,
    type = 'button',
    children,
    ...props
  },
  ref
) {
  return (
    <Comp
      ref={ref}
      type={Comp === 'button' ? type : undefined}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
        pill ? 'rounded-full' : 'rounded-md',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
})

export { Button }
export default Button
