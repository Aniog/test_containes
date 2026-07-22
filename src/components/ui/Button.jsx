import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-gold text-ivory hover:bg-gold-deep border border-gold hover:border-gold-deep",
  outline:
    "bg-transparent text-espresso border border-espresso hover:bg-espresso hover:text-ivory",
  dark: "bg-espresso text-ivory border border-espresso hover:bg-cocoa hover:border-cocoa",
  ghost: "bg-transparent text-espresso border border-transparent hover:text-gold-deep",
}

const sizes = {
  sm: "px-5 py-2.5 text-[11px]",
  md: "px-8 py-4 text-xs",
  lg: "px-10 py-5 text-xs",
}

export default function Button({
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
        "inline-flex items-center justify-center gap-2 font-sans uppercase tracking-[0.18em] font-medium transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </As>
  )
}
