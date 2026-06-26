import { cn } from "@/lib/utils";

/**
 * Section
 * A vertical-rhythm container with consistent padding and width cap.
 *
 * Props:
 *   id            – anchor id
 *   tone          – "default" | "ink" | "muted"
 *   compact       – reduces vertical rhythm for nested sections
 *   containerSize – "default" | "wide" | "narrow"
 */
export default function Section({
  id,
  tone = "default",
  compact = false,
  containerSize = "default",
  className,
  children,
}) {
  const tones = {
    default: "bg-background text-foreground",
    ink: "bg-ink text-ink-foreground steel-grid",
    muted: "bg-muted text-foreground",
  };

  const sizes = {
    narrow: "max-w-5xl",
    default: "max-w-7xl",
    wide: "max-w-[88rem]",
  };

  return (
    <section
      id={id}
      className={cn(
        tones[tone],
        compact ? "py-14 md:py-20" : "py-20 md:py-28 lg:py-32",
        className
      )}
    >
      <div className={cn("mx-auto px-6 md:px-10", sizes[containerSize])}>
        {children}
      </div>
    </section>
  );
}