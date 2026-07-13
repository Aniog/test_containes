import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-none border border-velmora-border bg-velmora-cream px-3 py-2 text-sm text-velmora-espresso placeholder:text-velmora-stone focus-visible:outline-none focus-visible:border-velmora-accent focus-visible:ring-1 focus-visible:ring-velmora-accent disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
