import { cn } from "@/lib/utils";

export function Badge({ children, className, variant = "default" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
        variant === "default" && "bg-velmora-cream text-velmora-fg",
        variant === "accent" && "bg-velmora-accent text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
