import React from "react";
import { cn } from "@/lib/utils";

/**
 * Premium button primitives — sharp corners, uppercase tracking,
 * solid dark on light / solid light on dark / outlined / accent.
 */
export function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...rest
}) {
  const base = {
    primary: "btn-primary",
    "primary-inverse": "btn-primary-inverse",
    accent: "btn-accent",
    outline: "btn-outline",
    "outline-inverse": "btn-outline-inverse",
  }[variant];

  const sizes = {
    sm: "px-5 py-2.5 text-[0.625rem] tracking-[0.18em]",
    md: "",
    lg: "px-10 py-5 text-[0.75rem] tracking-[0.24em]",
  };

  return (
    <Tag
      className={cn(
        base,
        sizes[size],
        fullWidth && "w-full",
        "inline-flex items-center justify-center gap-2",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}