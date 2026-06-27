import React from "react";
import { cn } from "@/lib/utils";

export default function Container({ className, children, size = "default", ...rest }) {
  const sizes = {
    narrow: "max-w-5xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
  };
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-10",
        sizes[size],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}