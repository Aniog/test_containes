import React from 'react'
import { cn } from '@/lib/utils'

const Card = React.forwardRef(function Card(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl border border-line bg-surface text-ink shadow-soft transition-shadow duration-300 hover:shadow-lift',
        className
      )}
      {...props}
    />
  )
})

const CardHeader = React.forwardRef(function CardHeader(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn('p-6 md:p-8', className)} {...props} />
})

const CardTitle = React.forwardRef(function CardTitle(
  { className, as: Comp = 'h3', ...props },
  ref
) {
  return (
    <Comp
      ref={ref}
      className={cn('font-display text-xl md:text-2xl text-ink leading-tight', className)}
      {...props}
    />
  )
})

const CardDescription = React.forwardRef(function CardDescription(
  { className, ...props },
  ref
) {
  return (
    <p
      ref={ref}
      className={cn('mt-3 text-sm md:text-[15px] text-muted leading-relaxed', className)}
      {...props}
    />
  )
})

const CardBody = React.forwardRef(function CardBody(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn('p-6 md:p-8 pt-0', className)} {...props} />
})

const CardFooter = React.forwardRef(function CardFooter(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn('flex items-center gap-3 p-6 md:p-8 pt-0', className)}
      {...props}
    />
  )
})

export { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter }
export default Card
