import React from "react";
import { cn } from "@/lib/utils.js";

const base =
  "inline-flex items-center justify-center gap-2 font-sans uppercase tracking-wider2 " +
  "text-[0.78rem] sm:text-[0.82rem] leading-none transition-all duration-200 ease-out " +
  "disabled:opacity-50 disabled:pointer-events-none select-none";

const variants = {
  // solid ink
  primary:
    "bg-ink text-cream hover:bg-black hover:-translate-y-[1px] active:translate-y-0",
  // gold accent — used for hero CTA and newsletter submit
  gold:
    "bg-champagne text-ink hover:bg-bronze hover:text-cream hover:-translate-y-[1px]",
  // outline
  outline:
    "border border-ink text-ink hover:bg-ink hover:text-cream",
  outlineLight:
    "border border-cream/70 text-cream hover:bg-cream hover:text-ink",
  // ghost text
  ghost:
    "text-ink hover:text-bronze px-0",
  light:
    "bg-cream text-ink hover:bg-rose",
};

const sizes = {
  sm: "h-10 px-5",
  md: "h-12 px-7",
  lg: "h-14 px-9 text-[0.85rem]",
  full: "h-14 w-full px-9 text-[0.85rem]",
};

const Button = React.forwardRef(function Button(
  { variant = "primary", size = "md", className, children, as: As = "button", ...rest },
  ref
) {
  return (
    <As
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </As>
  );
});

export default Button;
