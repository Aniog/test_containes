import { cn } from "@/lib/utils";

/**
 * SectionTitle — the recurring section heading style.
 * Use with an Eyebrow above it for the full editorial header.
 */
export default function SectionTitle({ as = "h2", className = "", children }) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "font-serif font-light text-espresso leading-[1.08] tracking-tight",
        "text-3xl sm:text-4xl md:text-5xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
