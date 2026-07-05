import * as React from "react"
import { cn } from "@/lib/utils"

const baseClasses =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

const variantClasses = {
  default: "bg-brand-gold text-white hover:bg-brand-goldDark hover:shadow-lg",
  outline: "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white",
  ghost: "hover:bg-brand-warm text-brand-text",
  link: "text-brand-gold underline-offset-4 hover:underline",
}

const sizeClasses = {
  default: "h-11 px-6 py-2",
  sm: "h-9 px-4 text-xs",
  lg: "h-12 px-8 text-base",
  icon: "h-10 w-10",
}

function Button({ className, variant = "default", size = "default", ...props }) {
  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    />
  )
}

export { Button }