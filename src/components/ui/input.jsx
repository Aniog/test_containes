import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "w-full bg-[#12121a] border border-[#2a2a3e] text-slate-100 placeholder:text-slate-600 rounded-lg px-3 py-2 text-sm focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 outline-none transition-all",
      className
    )}
    {...props}
  />
))
Input.displayName = "Input"

export { Input }
