import React from "react";
import { cn } from "@/lib/utils";

/**
 * Premium button with three variants:
 * - primary: solid ink on ivory
 * - accent:  solid gold (one-per-page accent)
 * - outline: ink border, transparent fill
 * - ghost:   text only with underline-offset
 */
const VARIANTS = {
  primary:
    "bg-ink text-ivory border border-ink hover:bg-ink/90 hover:border-ink/90",
  accent:
    "bg-gold text-ink border border-gold hover:bg-gold/90 hover:border-gold/90",
  outline:
    "bg-transparent text-ink border border-ink/80 hover:bg-ink hover:text-ivory hover:border-ink",
  ghost: "bg-transparent text-ink hover:text-ink/70",
  light:
    "bg-ivory text-ink border border-ivory/80 hover:bg-surface",
};

const SIZES = {
  sm: "h-9 px-4 text-[10px]",
  md: "h-11 px-6 text-[11px]",
  lg: "h-14 px-10 text-[12px]",
};

const Button = React.forwardRef(function Button(
  {
    as = "button",
    variant = "primary",
    size = "md",
    fullWidth = false,
    className,
    children,
    type,
    ...rest
  },
  ref
) {
  const Comp = as;
  return (
    <Comp
      ref={ref}
      type={as === "button" ? type || "button" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-button",
        "transition-all duration-300 ease-out select-none",
        "disabled:opacity-50 disabled:pointer-events-none",
        VARIANTS[variant],
        SIZES[size],
        fullWidth && "w-full",
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
});

export default Button;
