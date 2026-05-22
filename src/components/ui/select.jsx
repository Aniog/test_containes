import * as React from "react"
import { cn } from "@/lib/utils"

const Select = React.forwardRef(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "flex h-10 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </select>
))
Select.displayName = "Select"

export { Select }
