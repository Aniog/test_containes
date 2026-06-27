import React from "react";
import { cn } from "@/lib/utils";

export function Container({ as: Component = "div", className = "", children, ...rest }) {
  return (
    <Component
      className={cn(
        "w-full mx-auto px-6 sm:px-8 lg:px-12",
        "max-w-[1400px]",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Container;