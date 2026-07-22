import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-none border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest transition-colors",
        variant === "default" &&
          "border-transparent bg-brand-rose text-white",
        variant === "secondary" &&
          "border-transparent bg-brand-cream text-brand-charcoal",
        variant === "outline" &&
          "border-brand-charcoal/20 text-brand-charcoal",
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
