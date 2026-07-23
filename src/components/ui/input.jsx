import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        "w-full bg-transparent border-b border-velmora-border-light text-velmora-text-primary font-sans text-sm py-3 px-0 placeholder:text-velmora-text-secondary/60 focus:outline-none focus:border-velmora-gold transition-colors duration-200",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };