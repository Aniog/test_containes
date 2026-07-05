import * as React from "react"
import { cn } from "@/lib/utils"

function Separator({ className, orientation = "horizontal", ...props }) {
  return (
    <div
      role="none"
      className={cn(
        "shrink-0 bg-brand-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }