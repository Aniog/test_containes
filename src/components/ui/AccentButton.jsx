import React from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 font-body font-semibold uppercase tracking-widest2 text-[12px] px-7 py-3.5 transition-all duration-300 ease-luxe select-none disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  solid:
    "bg-gold text-espresso hover:bg-gold-deep hover:text-ivory shadow-soft",
  outlineDark:
    "border border-espresso text-espresso bg-transparent hover:bg-espresso hover:text-ivory",
  outlineLight:
    "border border-ivory text-ivory bg-transparent hover:bg-ivory hover:text-espresso",
  espresso:
    "bg-espresso text-ivory hover:bg-cocoa",
};

export default function AccentButton({
  children,
  variant = "solid",
  className,
  as: Tag = "button",
  ...props
}) {
  return (
    <Tag className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Tag>
  );
}
