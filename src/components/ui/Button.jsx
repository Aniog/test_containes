import React from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center font-sans text-[11px] uppercase tracking-[0.22em] transition-all duration-500 ease-out disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-velmora-espresso text-velmora-cream hover:bg-velmora-gold",
  outline:
    "border border-velmora-espresso text-velmora-espresso hover:bg-velmora-espresso hover:text-velmora-cream",
  ghost:
    "text-velmora-espresso hover:text-velmora-gold",
  goldOutline:
    "border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-cream",
  onDark:
    "bg-velmora-cream text-velmora-espresso hover:bg-velmora-gold hover:text-velmora-cream",
};

const sizes = {
  md: "px-8 py-4",
  sm: "px-5 py-3 text-[10px]",
  lg: "px-10 py-5 text-xs",
  block: "w-full px-8 py-4",
};

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
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
