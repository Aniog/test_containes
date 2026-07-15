import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-gold text-white hover:bg-[#B8894A] uppercase tracking-widest text-xs",
    outline: "border border-gold text-gold hover:bg-gold hover:text-white uppercase tracking-widest text-xs",
    ghost: "text-ink hover:text-gold hover:bg-transparent",
    link: "text-gold underline-offset-4 hover:underline",
  };

  const sizes = {
    default: "h-12 px-8 py-3",
    sm: "h-9 px-4 py-2",
    lg: "h-14 px-10 py-4",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-none",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };