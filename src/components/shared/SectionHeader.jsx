import { cn } from "@/lib/utils";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "light",
  className,
}) {
  const alignment =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";

  const isDark = variant === "dark";
  const eyebrowClass = isDark
    ? "border border-ink-700 bg-ink-800/60 text-accent-300"
    : "bg-accent-50 text-accent-700 ring-1 ring-inset ring-accent-200";
  const titleClass = isDark ? "text-white" : "text-brand-900";
  const descriptionClass = isDark ? "text-ink-200" : "text-ink-600";

  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-3",
        alignment,
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
            eyebrowClass,
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight sm:text-4xl",
          titleClass,
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("text-base leading-relaxed", descriptionClass)}>
          {description}
        </p>
      )}
    </div>
  );
}