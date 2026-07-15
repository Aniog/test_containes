import { cn } from "@/lib/utils";

export function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full rounded-sm border border-velmora-sand bg-white px-4 py-3 text-sm text-velmora-ink placeholder:text-velmora-taupe/70 focus:outline-none focus:border-velmora-gold focus:ring-1 focus:ring-velmora-gold/30 transition-colors",
        className,
      )}
      {...props}
    />
  );
}
