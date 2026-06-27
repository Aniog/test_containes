import React from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-champagne text-espresso border border-champagne hover:bg-champagne-soft hover:border-champagne-soft",
  secondary:
    "bg-transparent text-espresso border border-champagne hover:bg-champagne hover:text-espresso",
  dark:
    "bg-espresso text-bone border border-espresso hover:bg-espresso-soft hover:border-espresso-soft",
  ghost:
    "bg-transparent text-espresso border border-transparent hover:text-espresso-soft",
  fullPrimary:
    "w-full bg-champagne text-espresso border border-champagne hover:bg-champagne-soft hover:border-champagne-soft",
};

const sizes = {
  sm: "px-5 py-2.5 text-[11px]",
  md: "px-7 py-3.5 text-xs",
  lg: "px-10 py-4 text-sm",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center gap-2 uppercase tracking-label font-medium transition-all duration-300 ease-out cursor-pointer select-none",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}