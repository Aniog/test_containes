import React from 'react';
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-primary text-secondary hover:bg-opacity-90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-secondary",
    accent: "bg-accent text-secondary hover:bg-opacity-90",
    ghost: "text-primary hover:bg-hairline/50",
  };
  const sizes = {
    default: "px-6 py-3",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg",
    full: "w-full py-4 text-lg uppercase tracking-widest",
  };

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none font-sans font-medium",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
