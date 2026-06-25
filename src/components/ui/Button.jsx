import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-red disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-2 focus-visible:ring-brand-red shadow-sm",
  secondary:
    "bg-white text-brand-navy border border-brand-navy hover:bg-brand-navy hover:text-white",
  navy:
    "bg-brand-navy text-white hover:bg-brand-navy-2 focus-visible:ring-brand-navy",
  ghost:
    "bg-transparent text-brand-navy hover:text-brand-red",
  outline:
    "bg-transparent text-brand-navy border border-brand-line hover:border-brand-navy",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  xl: "h-14 px-8 text-base md:text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  as,
  to,
  href,
  className,
  children,
  ...rest
}) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  const Tag = as || "button";
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
