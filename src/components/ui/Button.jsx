import { cn } from "@/lib/utils"

const VARIANT_CLASSES = {
  primary: "btn-primary",
  outline: "btn-outline",
  gold: "btn-gold",
  ghost: "btn-ghost",
}

const SIZE_CLASSES = {
  sm: "h-9 px-5 text-[0.65rem]",
  md: "h-11 px-6 text-[0.7rem]",
  lg: "h-12 px-8 text-[0.72rem]",
  xl: "h-14 px-10 text-[0.78rem]",
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  as: Tag = "button",
  fullWidth = false,
  type = "button",
  ...rest
}) {
  return (
    <Tag
      type={Tag === "button" ? type : undefined}
      className={cn(
        VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary,
        SIZE_CLASSES[size] || SIZE_CLASSES.md,
        fullWidth && "w-full",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
