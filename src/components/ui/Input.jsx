import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'h-12 w-full rounded-full border border-velmora-sand bg-velmora-cream px-5 text-sm text-velmora-ink outline-none transition placeholder:text-velmora-taupe focus:border-velmora-gold',
        className,
      )}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input
