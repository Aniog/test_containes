import { cn } from "@/lib/utils"

export function Button({ className, variant = "primary", size = "md", children, ...props }) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-white text-primary border border-primary hover:bg-primary/5",
    accent: "bg-accent text-white hover:bg-accent-dark",
    ghost: "bg-transparent text-primary hover:bg-primary/5",
    outline: "bg-transparent border border-current",
  }
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold",
  }
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
