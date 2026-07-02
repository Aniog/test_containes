import { cn } from "@/lib/utils";

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full border border-velmora-border bg-white px-4 py-3 text-sm text-velmora-fg placeholder:text-velmora-muted/70 focus:border-velmora-accent focus:outline-none focus:ring-1 focus:ring-velmora-accent",
        className
      )}
      {...props}
    />
  );
}
