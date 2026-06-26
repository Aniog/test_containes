import React from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink-700 disabled:opacity-60 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover focus:ring-accent shadow-sm",
  secondary:
    "bg-ink-900 text-white hover:bg-ink-800 focus:ring-ink-900 shadow-sm",
  outline:
    "border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white focus:ring-ink-900",
  ghost: "text-ink-900 hover:bg-paper-muted focus:ring-ink-700",
  light:
    "bg-white text-ink-900 border border-line hover:border-ink-700 focus:ring-ink-700",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const Button = React.forwardRef(function Button(
  { className, variant = "primary", size = "md", as: Comp = "button", ...rest },
  ref
) {
  return (
    <Comp
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    />
  );
});

export default Button;