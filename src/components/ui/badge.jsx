import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-none px-3 py-1 text-xs font-medium uppercase tracking-wider transition-colors",
        variant === "default" && "bg-beige-light text-taupe",
        variant === "gold" && "bg-gold text-white",
        variant === "outline" && "border border-beige text-taupe",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };