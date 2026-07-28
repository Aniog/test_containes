import { cn } from "@/lib/utils"

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 border-transparent",
  secondary: "bg-navy-900 text-white hover:bg-navy-800 border-transparent",
  outline: "bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50",
  cta: "bg-orange-500 text-white hover:bg-orange-600 border-transparent",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100 border-transparent",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  as: Component = "button",
  ...props
}) {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-lg border-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
