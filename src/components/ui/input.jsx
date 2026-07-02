import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full border-b border-[#E8E0D5] bg-transparent px-0 py-2 text-sm text-[#1C1A17] placeholder:text-[#8C8276] focus:border-[#BFA15A] focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
