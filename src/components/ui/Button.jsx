import React from "react";
import { cn } from "@/lib/utils";

const variantMap = {
  primary: "btn-primary",
  accent: "btn-accent",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

export function Button({
  variant = "primary",
  as: As = "button",
  className,
  children,
  fullWidth,
  size = "md",
  ...props
}) {
  return (
    <As
      className={cn(
        "btn",
        variantMap[variant],
        fullWidth && "w-full",
        size === "sm" && "!py-2.5 !px-4 !text-[0.62rem]",
        className
      )}
      {...props}
    >
      {children}
    </As>
  );
}
