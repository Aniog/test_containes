import React from "react";
import { cn } from "@/lib/utils";

export default function Pill({
  selected = false,
  onClick,
  children,
  className,
  ...rest
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "inline-flex items-center justify-center min-w-[64px] px-5 py-2.5 text-xs uppercase tracking-label font-medium transition-all duration-300",
        "border",
        selected
          ? "bg-espresso text-bone border-espresso"
          : "bg-transparent text-espresso border-line hover:border-espresso",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}