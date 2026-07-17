import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "flex h-12 w-full rounded-xl border border-line bg-white px-4 py-2 text-base text-ink shadow-sm transition-colors placeholder:text-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:border-amber disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
))
Input.displayName = "Input"

export { Input }
