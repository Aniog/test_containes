import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full border border-[#D4C9B9] bg-white px-4 py-2 text-sm text-[#2C2825] placeholder:text-[#8A8178] focus-visible:outline-none focus-visible:border-[#A68B5B] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
