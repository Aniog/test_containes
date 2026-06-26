import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-soft shadow-sm",
  outline:
    "border border-white/30 text-white hover:bg-white/10",
  dark:
    "bg-ink text-white hover:bg-steel",
  ghost:
    "text-ink hover:bg-ink/5",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
}

export function Button({
  as: As = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <As
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
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
