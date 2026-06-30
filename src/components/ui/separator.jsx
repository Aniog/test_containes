import * as React from "react"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef(({ className, orientation = "horizontal", ...props }, ref) => {
  return React.createElement("div", {
    role: "none",
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ref,
    ...props,
  })
})
Separator.displayName = "Separator"

export { Separator }
