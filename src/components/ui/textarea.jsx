import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[140px] w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink shadow-sm transition-colors placeholder:text-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:border-amber disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
))
Textarea.displayName = "Textarea"

export { Textarea }
