import { cn } from "@/lib/utils";

export default function Eyebrow({ children, className, light = false }) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[11px] md:text-xs font-medium uppercase tracking-[0.22em]",
        light ? "text-accent" : "text-accent",
        className
      )}
    >
      <span className="accent-dot" aria-hidden="true" />
      {children}
    </span>
  );
}