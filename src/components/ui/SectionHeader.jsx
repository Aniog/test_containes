import { cn } from "@/lib/utils";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-brand-ink tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-brand-slate leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
