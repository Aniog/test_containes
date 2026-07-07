import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex w-full border-b border-velmora-border bg-transparent px-0 py-3 text-sm text-velmora-espresso placeholder:text-velmora-muted focus:border-velmora-gold focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
