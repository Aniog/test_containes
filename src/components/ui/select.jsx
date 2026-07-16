import React from "react";
import { cn } from "@/lib/utils";

const Select = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <select
      className={cn(
        "flex h-11 w-full border border-[#E5DFD6] bg-white px-4 py-2 text-sm text-[#2C2522] focus:border-[#B89778] focus:outline-none focus:ring-1 focus:ring-[#B89778] cursor-pointer",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});

Select.displayName = "Select";

export { Select };
