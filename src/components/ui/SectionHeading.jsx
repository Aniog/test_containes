import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {label && (
        <span className="inline-block text-sm font-semibold tracking-wider uppercase text-blue-800 mb-3">
          {label}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
