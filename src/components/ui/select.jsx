import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Select = React.forwardRef(({ className, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(
        "h-11 w-full appearance-none border border-sand bg-white px-4 pr-10 text-sm font-sans text-espresso focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold",
        className
      )}
      {...props}
    >
      {children}
    </select>
    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-taupe" />
  </div>
))
Select.displayName = "Select"

export { Select }
