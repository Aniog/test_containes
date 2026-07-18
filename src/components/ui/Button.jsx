import React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  primary: "bg-gold text-white hover:bg-gold-dark",
  secondary: "bg-transparent border border-gold text-gold hover:bg-gold hover:text-white",
  ghost: "bg-transparent text-text-primary hover:text-gold",
  dark: "bg-text-primary text-white hover:bg-text-primary/90",
};

const buttonSizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
  full: "w-full px-6 py-3.5 text-sm",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-sans font-medium uppercase tracking-widest-xl",
        "transition-all duration-300 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-gold/30 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
