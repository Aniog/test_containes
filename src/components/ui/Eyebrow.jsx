import { cn } from "@/lib/utils";

/**
 * Small uppercase eyebrow label used above section titles and on category chips.
 */
export default function Eyebrow({ children, className = "", as = "span" }) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "inline-block text-[11px] md:text-xs font-medium uppercase tracking-eyebrow text-taupe",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
