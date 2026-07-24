import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-none border border-velmora-taupe/30 bg-transparent px-4 py-2 text-sm text-velmora-espresso placeholder:text-velmora-taupe focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-velmora-gold disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
