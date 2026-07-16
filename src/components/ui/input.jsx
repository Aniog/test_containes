import React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full border border-[#E5DFD6] bg-white px-4 py-2 text-sm text-[#2C2522] placeholder:text-[#9A8F82] focus:border-[#B89778] focus:outline-none focus:ring-1 focus:ring-[#B89778] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
