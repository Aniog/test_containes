import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full border border-warm-300 bg-white px-4 py-2 text-sm font-sans text-warm-900",
        "placeholder:text-warm-400",
        "focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}