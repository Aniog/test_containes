import * as React from "react"
import { cn } from "@/lib/utils"

export const Input = React.forwardRef(function Input(
  { className, type = "text", ...props },
  ref
) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-11 w-full rounded-md border border-line bg-ink px-4 py-2 text-sm text-text placeholder:text-text-dim transition-colors duration-200",
        "focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
})
