import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-luxe text-[13px] transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:pointer-events-none select-none";

const variants = {
  solid:
    "bg-gold text-cream hover:bg-goldDark shadow-soft hover:shadow-card hover:-translate-y-px",
  outline: "border border-gold text-gold hover:bg-gold hover:text-cream",
  ghost: "text-ink hover:text-gold underline-offset-4 hover:underline",
  dark: "bg-ink text-cream hover:bg-black shadow-soft hover:-translate-y-px",
  light: "bg-cream text-ink hover:bg-goldSoft",
  outlineLight:
    "border border-cream/60 text-cream hover:bg-cream hover:text-ink",
};

const sizes = {
  md: "px-8 py-4",
  sm: "px-5 py-2.5 text-[12px]",
  lg: "px-10 py-4 text-sm",
  full: "w-full px-8 py-4",
};

export function Button({
  variant = "solid",
  size = "md",
  className,
  to,
  href,
  ...props
}) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (to) {
    return <Link to={to} className={cls} {...props} />;
  }
  if (href) {
    return <a href={href} className={cls} {...props} />;
  }
  return <button className={cls} {...props} />;
}

export default Button;
