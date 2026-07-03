import { cn } from "../../lib/cn.js";

export default function Eyebrow({ children, className = "", tone = "muted" }) {
  const toneClass =
    tone === "gold"
      ? "text-gold-300"
      : tone === "ink"
      ? "text-ink-300"
      : "text-ink-300";
  return (
    <span
      className={cn(
        "inline-block font-sans text-[11px] font-medium uppercase tracking-widest2",
        toneClass,
        className
      )}
    >
      {children}
    </span>
  );
}
