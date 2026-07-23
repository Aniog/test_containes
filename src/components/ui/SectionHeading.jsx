import { cn } from "@/lib/utils";

/**
 * Editorial section heading with optional eyebrow + alignment.
 *
 * <SectionHeading
 *   eyebrow="The Edit"
 *   title={<>New <em>arrivals</em></>}
 *   subtitle="Pieces designed to live with you."
 * />
 */
export default function SectionHeading({
  as: Tag = "h2",
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}) {
  const justify = align === "center" ? "text-center mx-auto" : "text-left";
  const subColor = light ? "text-bone-100/80" : "text-espresso/70";
  const eyebrowColor = light ? "text-bone-100/60" : "text-espresso/55";

  return (
    <div className={cn("max-w-2xl", justify, className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-[11px] font-medium uppercase tracking-widest2",
            eyebrowColor,
          )}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <Tag
          className={cn(
            "display-serif mt-3 text-3xl sm:text-4xl lg:text-5xl",
            light ? "text-bone-50" : "text-espresso",
          )}
        >
          {title}
        </Tag>
      )}
      {subtitle && (
        <p className={cn("mt-4 text-sm sm:text-base", subColor)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
