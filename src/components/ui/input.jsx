import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-none border border-velmora-stone bg-velmora-cream px-4 py-2 text-sm text-velmora-charcoal placeholder:text-velmora-stone/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-velmora-accent disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
