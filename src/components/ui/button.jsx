import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant = "primary", size = "default", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-xs font-medium uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-rose disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-brand-rose text-white hover:bg-brand-rose-dark rounded-none",
        variant === "secondary" &&
          "bg-brand-charcoal text-brand-ivory hover:bg-brand-warm-black rounded-none",
        variant === "outline" &&
          "border border-brand-charcoal bg-transparent text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-ivory rounded-none",
        variant === "ghost" &&
          "bg-transparent text-brand-charcoal hover:text-brand-rose-dark underline-offset-4 hover:underline rounded-none",
        size === "default" && "h-12 px-8",
        size === "sm" && "h-9 px-4",
        size === "lg" && "h-14 px-10",
        size === "icon" && "h-10 w-10 p-0",
        className
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
