import React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "btn-primary",
    secondary: "btn-secondary",
    ghost: "text-primary hover:bg-primary/10 font-medium px-4 py-2 rounded-lg transition-colors",
    outline: "border border-slate-300 hover:border-primary text-slate-700 hover:text-primary font-medium px-4 py-2 rounded-lg transition-colors",
  };

  const sizes = {
    default: "px-6 py-3",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;