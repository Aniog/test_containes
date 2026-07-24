import React from "react";
import { cn } from "@/lib/utils";

/**
 * Premium button. Variants: "primary" (ink fill), "outline" (hairline border), "ghost" (text only).
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  as: Component = "button",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center font-medium tracking-wide-3 uppercase transition-all duration-300 ease-elegant disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizes = {
    sm: "text-[10px] px-5 py-2.5",
    md: "text-[11px] px-7 py-3.5",
    lg: "text-xs px-9 py-4",
  };

  const variants = {
    primary:
      "bg-ink text-bone hover:bg-ink/85 active:bg-ink/95",
    outline:
      "bg-transparent text-ink border border-ink hover:bg-ink hover:text-bone",
    ghost:
      "bg-transparent text-ink hover:text-gold",
    light:
      "bg-bone text-ink hover:bg-cream-dark border border-hairline",
    lightOutline:
      "bg-transparent text-bone border border-bone/40 hover:bg-bone hover:text-ink",
  };

  return (
    <Component
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Button;
