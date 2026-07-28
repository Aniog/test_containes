import { cn } from "@/lib/utils";

export default function SectionHeader({ eyebrow, title, subtitle, align = "left", className }) {
  const alignment =
    align === "center"
      ? "text-center mx-auto"
      : "text-left";
  return (
    <div className={cn("max-w-3xl", alignment, className)}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-ink text-balance">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-ink-soft leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
