import React from "react"
import { cn } from "@/lib/utils"

const variantClasses = {
  primary:
    "bg-teal text-white hover:bg-teal-hover focus-visible:ring-teal-light border border-teal hover:border-teal-hover",
  secondary:
    "bg-transparent text-navy border border-navy hover:bg-navy hover:text-white focus-visible:ring-navy/30",
  onDark:
    "bg-warm-100 text-navy hover:bg-white border border-warm-100",
  ghost:
    "bg-transparent text-teal hover:text-teal-hover border border-transparent",
  outlineOnDark:
    "bg-transparent text-warm-100 border border-warm-100/40 hover:bg-warm-100 hover:text-navy",
}

const sizeClasses = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
}

const Button = React.forwardRef(function Button(
  { className, variant = "primary", size = "md", as: Tag = "button", children, ...rest },
  ref
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold leading-none rounded-[4px] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-100 disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
})

export default Button
