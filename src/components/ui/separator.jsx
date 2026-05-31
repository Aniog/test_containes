import * as React from "react"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef(({ className, orientation = "horizontal", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-[#2a2a3e]",
      orientation === "horizontal" ? "h-px w-full" : "w-px h-full",
      className
    )}
    {...props}
  />
))
Separator.displayName = "Separator"

export { Separator }
