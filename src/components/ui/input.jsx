import React from 'react'
import { cn } from '@/lib/utils'

const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'flex h-11 w-full rounded-full border border-brand-line bg-white px-4 py-2 text-sm text-brand-ink placeholder:text-brand-subtle focus:outline-none focus:ring-2 focus:ring-brand-accent/40',
      className
    )}
    {...props}
  />
))
Input.displayName = 'Input'

export { Input }
