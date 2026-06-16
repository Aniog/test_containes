import { cn } from "@/lib/utils";

export default function Logo({ className, tone = "ink" }) {
  const color = tone === "cream" ? "text-cream-soft" : "text-ink";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="inline-flex h-9 w-9 items-center justify-center border border-brass text-brass font-serif text-lg leading-none">
        A
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-lg md:text-xl tracking-widest2 uppercase",
            color,
          )}
        >
          Artitect
        </span>
        <span
          className={cn(
            "text-[10px] uppercase tracking-widest2 mt-1",
            tone === "cream" ? "text-cream-soft/60" : "text-ink-muted",
          )}
        >
          Machinery
        </span>
      </span>
    </div>
  );
}
