import { cn } from "@/lib/utils";

export function Badge({ className, children, variant = "default" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase",
        variant === "default" && "bg-velmora-sand text-velmora-ink",
        variant === "outline" && "border border-velmora-sand text-velmora-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
