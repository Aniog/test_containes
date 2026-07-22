import React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full px-4 py-3 bg-white border border-[#E5E0D8] text-[#2C2823] placeholder:text-[#9A8F7E] focus:outline-none focus:border-[#C5A46E] transition-colors duration-200",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
