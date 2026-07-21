import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-md border border-brand-line bg-brand-surface px-3 py-2 text-sm text-brand-ink placeholder:text-brand-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }