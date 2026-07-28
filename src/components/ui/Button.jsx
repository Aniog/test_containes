import * as React from "react"
import { cn } from "@/lib/utils"

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100",
}

const sizes = {
  default: "",
  lg: "px-8 py-4 text-base",
  sm: "px-4 py-2 text-sm",
}

export function Button({
  variant = "primary",
  size = "default",
  className,
  asChild,
  ...props
}) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(variants[variant], sizes[size], className)}
      {...props}
    />
  )
}

function Slot({ children, ...props }) {
  if (!children) return null
  return <>{React.cloneElement(children, props)}</>
}
