import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  default: "bg-slate-900 text-white hover:bg-slate-800",
  primary: "bg-blue-700 text-white hover:bg-blue-800",
  outline: "border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50",
  ghost: "hover:bg-slate-100 text-slate-700",
  link: "text-blue-700 underline-offset-4 hover:underline",
};

const buttonSizes = {
  default: "h-10 px-5 py-2",
  sm: "h-8 px-3 text-sm",
  lg: "h-12 px-8 text-lg",
  icon: "h-10 w-10 p-2",
};

const Button = React.forwardRef(function Button(
  { className, variant = "default", size = "default", asChild = false, ...props },
  ref
) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
