import { cn } from "@/lib/utils"

const variants = {
  accent:
    "bg-accent text-ink hover:bg-accent-dark hover:text-white",
  outline:
    "border border-ink text-ink hover:bg-ink hover:text-white",
  outlineLight:
    "border border-white/40 text-white hover:bg-white hover:text-ink",
  ghost: "text-ink hover:bg-mist",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
}

export function Button({
  as: As = "button",
  variant = "accent",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <As
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </As>
  )
}

export default Button
