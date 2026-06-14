import { cn } from "@/lib/utils";

/**
 * Reusable section header. Provides consistent eyebrow + title + subtitle.
 * Centered is the default; pass `align="left"` for left-aligned variants.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  inverse = false,
}) {
  const isCenter = align === "center";
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
            "eyebrow",
            inverse && "text-brand"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "section-title mt-3",
          inverse && "text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "section-subtitle",
            isCenter ? "mx-auto" : "",
            inverse ? "text-white/75" : ""
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
