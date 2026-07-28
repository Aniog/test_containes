import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-primary text-white hover:bg-primary-700 focus-visible:ring-primary/30",
  accent:
    "bg-accent text-white hover:opacity-90 focus-visible:ring-accent/30",
  secondary:
    "bg-white text-primary border border-line hover:border-primary focus-visible:ring-primary/20",
  ghost:
    "bg-transparent text-primary hover:text-accent focus-visible:ring-primary/20",
  outlineLight:
    "bg-transparent text-white border border-white/40 hover:bg-white/10 focus-visible:ring-white/30",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg whitespace-nowrap";

export default function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  onClick,
  type = "button",
  className,
  children,
  ariaLabel,
  ...rest
}) {
  const cls = cn(base, VARIANTS[variant], SIZES[size], className);

  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={cls}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
}
