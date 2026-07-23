import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-sm border border-velmora-border bg-velmora-ivory px-4 py-2 text-base text-velmora-charcoal ring-offset-velmora-cream file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-velmora-warm-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props} />
  );
})
Input.displayName = "Input"

export { Input }
