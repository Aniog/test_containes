import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "btn-primary",
    outline: "btn-outline",
    ghost:
      "bg-transparent text-velmora-text-primary hover:text-velmora-gold transition-colors duration-200",
  };

  const sizes = {
    default: "",
    sm: "px-6 py-2 text-xs",
    lg: "px-12 py-5 text-base",
    icon: "p-2",
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

export { Button };