import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-[#D62828] text-white hover:bg-[#B11F1F] shadow-sm hover:shadow-md",
  secondary:
    "bg-[#0B2545] text-white hover:bg-[#133B6F] shadow-sm",
  outline:
    "border border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white",
  outlineWhite:
    "border border-white text-white hover:bg-white hover:text-[#0B2545]",
  ghost:
    "text-[#0B2545] hover:text-[#133B6F]",
  light:
    "bg-[#F4F6F9] text-[#0B2545] hover:bg-[#E2E8F0]",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
  xl: "px-8 py-4 text-base",
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  as: Component = "button",
  ...rest
}) => {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Button
