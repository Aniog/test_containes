import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-full border border-brand-border bg-white px-4 py-2 text-sm text-brand-text placeholder:text-brand-subtle transition-colors focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }