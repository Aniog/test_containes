import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function AccentButton({
  children,
  variant = "solid",
  className = "",
  as,
  to,
  href,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 text-xs font-medium tracking-widest uppercase transition-all duration-300 ease-out";
  const styles = {
    solid:
      "bg-accent text-white hover:bg-accent-dark focus-visible:ring-2 focus-visible:ring-accent-dark",
    outline:
      "border border-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-foreground",
    ghost: "text-foreground underline-offset-4 hover:underline",
  };

  const classes = cn(base, styles[variant], className);

  if (as === "link" || to) {
    return (
      <Link to={to || "/"} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (as === "a" || href) {
    return (
      <a href={href || "#"} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
