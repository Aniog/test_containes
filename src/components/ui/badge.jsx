import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary-100 text-primary-700",
        secondary: "border-transparent bg-slate-100 text-slate-600",
        destructive: "border-transparent bg-red-100 text-red-700",
        outline: "text-slate-600",
        success: "border-transparent bg-green-100 text-green-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Badge = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} ref={ref} {...props} />
  );
});
Badge.displayName = "Badge";

export { Badge, badgeVariants };