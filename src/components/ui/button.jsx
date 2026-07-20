import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(function Button(
  { className, variant = "primary", size = "md", asChild = false, ...props },
  ref
) {
  const Comp = asChild ? "span" : "button";
  const variants = {
    primary:
      "bg-ink text-bone hover:bg-gold-deep border border-ink hover:border-gold-deep",
    gold: "bg-gold text-ink hover:bg-gold-deep hover:text-bone border border-gold hover:border-gold-deep",
    outline:
      "bg-transparent text-ink border border-ink hover:bg-ink hover:text-bone",
    ghost: "bg-transparent text-ink hover:text-gold-deep",
    light: "bg-bone text-ink hover:bg-ivory border border-hairline",
  };
  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-8 py-4 text-[11px]",
    lg: "px-10 py-5 text-xs",
    icon: "p-2.5",
  };
  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 uppercase tracking-wider2 font-medium transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});

export { Button };
