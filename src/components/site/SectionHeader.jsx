import { cn } from "@/lib/utils";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleId,
  descId,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          id={titleId}
          className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-navy-900"
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          id={descId}
          className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed"
        >
          {description}
        </p>
      )}
    </div>
  );
}
