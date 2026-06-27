import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef(function Input(
  { className, type = "text", ...props },
  ref
) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "w-full bg-transparent text-ink placeholder:text-ink-muted",
        "h-12 px-0 py-2",
        "border-0 border-b border-hairline",
        "focus:outline-none focus:border-cocoa focus:ring-0",
        "transition-colors duration-300",
        className
      )}
      {...props}
    />
  );
});
