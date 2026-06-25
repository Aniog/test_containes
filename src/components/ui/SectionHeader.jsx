import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}) {
  const alignClass =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";
  return (
    <div
      className={cn(
        "flex flex-col gap-3 max-w-3xl",
        alignClass,
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "eyebrow",
            invert ? "text-brand-amber" : "text-brand-teal"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      {title ? (
        <h2
          className={cn(
            "font-semibold tracking-tight text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.15]",
            invert ? "text-white" : "text-brand-navy"
          )}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed",
            invert ? "text-white/80" : "text-brand-ink-muted"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
