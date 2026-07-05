import React from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-ink text-cream hover:bg-accent",
  outline:
    "border border-ink text-ink hover:bg-ink hover:text-cream",
  ghost:
    "text-ink hover:text-accent",
  light:
    "bg-cream text-ink hover:bg-white",
};

const sizes = {
  md: "px-8 py-4 text-[11px]",
  lg: "px-10 py-5 text-xs",
  sm: "px-5 py-2.5 text-[10px]",
};

const PrimaryButton = React.forwardRef(function PrimaryButton(
  {
    as: Tag = "button",
    variant = "primary",
    size = "md",
    className,
    children,
    fullWidth = false,
    ...rest
  },
  ref
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium uppercase tracking-widest2 transition-colors duration-300",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default PrimaryButton;
