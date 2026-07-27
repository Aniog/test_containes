import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-sm",
  secondary:
    "bg-white text-brand-700 border border-brand-200 hover:border-brand-300 hover:bg-brand-50",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 shadow-sm",
  ghost: "bg-transparent text-ink-700 hover:bg-ink-100",
  outlineLight:
    "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/60",
};

const SIZES = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

export default function Button({
  as = "button",
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  icon: Icon,
  iconPosition = "right",
  ...rest
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
    VARIANTS[variant],
    SIZES[size],
    className
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="h-4 w-4" />}
    </>
  );

  if (as === "link" && to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (as === "a" && href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
