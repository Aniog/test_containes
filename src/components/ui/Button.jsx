import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-gold text-ink hover:bg-gold-deep",
  outline:
    "border border-ink text-ink hover:bg-ink hover:text-ivory",
  outlineLight:
    "border border-ivory/70 text-ivory hover:bg-ivory hover:text-ink",
  ghost:
    "text-ink hover:text-gold",
}

const sizes = {
  sm: "px-5 py-2 text-[11px]",
  md: "px-8 py-3 text-xs",
  lg: "px-10 py-4 text-xs",
}

export default function Button({
  as: Component = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center uppercase tracking-widest2 font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
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
