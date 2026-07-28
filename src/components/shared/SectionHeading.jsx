import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}) {
  const isCenter = align === "center";
  const headingColor = tone === "light" ? "text-white" : "text-ink-900";
  const descColor = tone === "light" ? "text-white/80" : "text-ink-700";
  const eyebrowColor = tone === "light" ? "text-accent-500" : "text-accent-600";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold tracking-[0.18em] uppercase",
            eyebrowColor
          )}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={cn(
            "mt-3 text-3xl md:text-4xl font-bold tracking-tight",
            headingColor
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed", descColor)}>
          {description}
        </p>
      )}
    </div>
  );
}
