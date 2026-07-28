import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm",
  secondary:
    "bg-white text-ink border border-line hover:border-primary hover:text-primary",
  outline:
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-ink",
  ghost: "bg-transparent text-primary hover:bg-blue-50",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
}

export default function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
