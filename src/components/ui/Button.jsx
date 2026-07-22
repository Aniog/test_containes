import React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(
  ({ className, variant = "solid", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      solid:
        "bg-[#C5A46E] text-[#0F0E0C] hover:bg-[#A68B5B] focus:ring-[#C5A46E]",
      outline:
        "border border-[#C5A46E] text-[#C5A46E] hover:bg-[#C5A46E] hover:text-[#0F0E0C] focus:ring-[#C5A46E]",
      ghost:
        "text-[#2C2823] hover:bg-[#F5F2ED] focus:ring-[#C5A46E]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-8 py-3 text-sm tracking-[1px]",
      lg: "px-10 py-4 text-base tracking-[1.5px]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
