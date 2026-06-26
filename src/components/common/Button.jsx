import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-[--color-primary] text-white hover:bg-[--color-primary-light] shadow-sm',
  secondary: 'bg-white text-[--color-primary] border border-[--color-border] hover:bg-[--color-bg-light]',
  accent: 'bg-[--color-accent] text-white hover:bg-[--color-accent-dark] shadow-sm',
  outline: 'border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white',
  ghost: 'text-[--color-text-muted] hover:text-[--color-primary] hover:bg-[--color-bg-light]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  to,
  href,
  ...props
}) => {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--color-primary]',
    variants[variant],
    sizes[size],
    className
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
