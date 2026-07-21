import React from "react";

const base =
  "inline-flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 ease-out select-none";

const variants = {
  primary: "bg-gold text-ivory hover:bg-gold-deep px-8 py-4 rounded-none",
  secondary:
    "border border-ink text-ink hover:bg-ink hover:text-ivory px-8 py-4 rounded-none",
  dark: "border border-gold-soft text-gold-soft hover:bg-gold-soft hover:text-ink px-8 py-4 rounded-none",
  ghost:
    "text-ink underline underline-offset-8 decoration-gold hover:text-gold-deep px-0 py-2",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
