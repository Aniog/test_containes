import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  primary:
    "bg-gold text-cocoa hover:bg-gold-deep hover:text-ivory",
  outlineDark:
    "border border-cocoa text-cocoa hover:bg-cocoa hover:text-bone",
  outlineLight:
    "border border-bone/70 text-bone hover:bg-bone hover:text-cocoa",
  ghostLight:
    "text-ink hover:text-gold-deep",
  ghostDark:
    "text-bone hover:text-gold-light",
  inverted:
    "bg-cocoa text-bone hover:bg-ink",
};

const buttonSizes = {
  md: "h-12 px-8 text-xs uppercase tracking-button font-medium",
  lg: "h-14 px-10 text-xs uppercase tracking-button font-medium",
  sm: "h-10 px-6 text-[11px] uppercase tracking-button font-medium",
  icon: "h-10 w-10",
};

export const Button = React.forwardRef(function Button(
  {
    className,
    variant = "primary",
    size = "md",
    asChild,
    children,
    type = "button",
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-none whitespace-nowrap",
        "transition-colors duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
        "disabled:opacity-50 disabled:pointer-events-none",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export { buttonVariants, buttonSizes };
