import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 select-none whitespace-nowrap";

const variants = {
  primary:
    "bg-navy-950 text-paper-50 hover:bg-copper-600 shadow-sm shadow-navy-950/15",
  accent:
    "bg-copper-500 text-paper-50 hover:bg-copper-600 shadow-sm shadow-copper-500/30",
  ghost:
    "bg-transparent text-ink-900 hover:text-copper-600",
  outline:
    "bg-transparent text-ink-900 border border-ink-900/15 hover:border-copper-500 hover:text-copper-600",
  light:
    "bg-paper-50 text-navy-950 hover:bg-copper-100",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-5 py-2.5 text-sm rounded-full",
  lg: "px-7 py-3.5 text-base rounded-full",
};

export default function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  external,
  arrow = "right",
  children,
  className = "",
  ...rest
}) {
  const Icon = arrow === "up-right" ? ArrowUpRight : ArrowRight;
  const content = (
    <>
      {children}
      {arrow ? <Icon className="w-4 h-4" /> : null}
    </>
  );

  const classes = `${base} ${variants[variant] ?? variants.primary} ${
    sizes[size] ?? sizes.md
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={classes}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}