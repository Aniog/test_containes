import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-gold text-white hover:bg-gold-deep",
  outline:
    "border border-espresso text-espresso hover:bg-espresso hover:text-ivory",
  outlineLight:
    "border border-ivory/60 text-ivory hover:bg-ivory hover:text-espresso",
  dark:
    "bg-espresso text-ivory hover:bg-espresso-soft",
}

export default function Button({
  as: As = "button",
  variant = "primary",
  className,
  children,
  ...props
}) {
  return (
    <As
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </As>
  )
}
