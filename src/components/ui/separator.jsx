import * as React from "react"
import { cn } from "@/lib/utils"

const Separator = ({ className, orientation = "horizontal" }) => (
  <div
    className={cn(
      "shrink-0 bg-velmora-border",
      orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
      className
    )}
  />
)

export { Separator }
