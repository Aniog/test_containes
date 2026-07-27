import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const CtaButton = ({ to = "/contact", variant = "primary", size = "md", children, className, onClick }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2";

  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-700",
    secondary: "border border-slate-300 bg-white text-slate-700 hover:border-teal-600 hover:text-teal-700",
    ghost: "text-teal-600 hover:text-teal-700 bg-transparent",
    light: "bg-white text-slate-900 hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  if (onClick) {
    return (
      <button onClick={onClick} className={cn(baseStyles, variants[variant], sizes[size], className)}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
};

export default CtaButton;
