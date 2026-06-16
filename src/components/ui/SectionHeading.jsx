import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "ink",
  className,
}) {
  const titleColor = tone === "cream" ? "text-cream-soft" : "text-ink";
  const descColor = tone === "cream" ? "text-cream-soft/75" : "text-ink-muted";
  const eyebrowColor = "text-brass";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "right" && "ml-auto text-right",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs uppercase tracking-wider2 font-medium mb-5",
            eyebrowColor,
          )}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={cn(
            "font-serif text-4xl md:text-5xl leading-[1.1] font-light",
            titleColor,
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            "mt-6 text-base md:text-lg leading-relaxed",
            descColor,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
