import * as React from "react"
import { cn } from "@/lib/utils"

export const Textarea = React.forwardRef(function Textarea(
  { className, rows = 5, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        "flex w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-text placeholder:text-text-dim transition-colors duration-200 resize-none",
        "focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
})
