import * as React from "react"
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-brand-warm", className)}
      {...props}
    />
  )
}

export { Skeleton }