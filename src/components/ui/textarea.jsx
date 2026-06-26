import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-50 shadow-sm transition-colors placeholder:text-slate-500 focus-visible:border-cyan-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
