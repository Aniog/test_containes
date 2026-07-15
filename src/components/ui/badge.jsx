import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "border-transparent bg-[#C9A96E] text-white hover:bg-[#b8975e]",
    secondary: "border-transparent bg-[#1C1C1C] text-white hover:bg-[#2a2a2a]",
    destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
    outline: "text-[#1C1C1C] border-[#1C1C1C]",
  }
  return (
    <div className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", variants[variant], className)} {...props} />
  )
}

export { Badge }
