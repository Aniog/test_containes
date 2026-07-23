import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-velmora-gold/20 text-velmora-gold border border-velmora-gold/30",
    outline: "border border-velmora-border-light text-velmora-text-secondary",
    new: "bg-transparent text-velmora-gold border border-velmora-gold",
  };

  return (
    <span
      className={cn(
        "inline-block font-sans text-[10px] uppercase tracking-widest px-3 py-1",
        variants[variant],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Badge.displayName = "Badge";

export { Badge };