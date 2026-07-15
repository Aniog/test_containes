import React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const variants = {
      default:
        "bg-gold-600 text-white hover:bg-gold-700 border-gold-600",
      outline:
        "bg-transparent border-warm-300 text-warm-800 hover:bg-cream-100 hover:border-warm-400",
      ghost:
        "bg-transparent border-transparent text-warm-800 hover:bg-cream-100",
    };

    const sizes = {
      default: "h-12 px-8 text-sm",
      sm: "h-9 px-4 text-xs",
      lg: "h-14 px-10 text-base",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-sans font-medium tracking-wider uppercase transition-all duration-300 border",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };