import * as React from "react"
import { cn } from "@/lib/utils"

const Select = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <select
      className={cn(
        "flex h-11 w-full border border-[#D4C9B9] bg-white px-4 py-2 text-sm text-[#2C2825] focus-visible:outline-none focus-visible:border-[#A68B5B] cursor-pointer",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  )
})
Select.displayName = "Select"

export { Select }
