import { cn } from "@/lib/utils";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  asChild,
  ...props
}) {
  const Comp = asChild ? "a" : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variant === "primary" && "bg-blue-800 text-white hover:bg-blue-900",
        variant === "secondary" && "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50",
        variant === "outline" && "bg-transparent text-blue-800 border-2 border-blue-800 hover:bg-blue-50",
        variant === "ghost" && "bg-transparent text-slate-700 hover:bg-slate-100",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-base",
        size === "lg" && "px-8 py-4 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
