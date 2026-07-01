import { cn } from "@/lib/cn";

export default function SectionHeader({ eyebrow, title, subtitle, align = "center", className, light = false }) {
  const tone = light ? "text-ivory-50" : "text-espresso-200";
  const mutedTone = light ? "text-ivory-100/70" : "text-muted";
  const alignClass = align === "left" ? "text-left" : "text-center";
  return (
    <div className={cn("max-w-3xl mx-auto", alignClass, className)}>
      {eyebrow && (
        <div
          className={cn(
            "text-[10px] sm:text-[11px] tracking-widest2 uppercase mb-4",
            light ? "text-gold-300" : "text-gold-400",
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2 className={cn("font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight", tone)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-sm sm:text-base leading-relaxed", mutedTone, align === "left" ? "" : "mx-auto max-w-xl")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
