import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-extrabold tracking-tight text-ink md:text-4xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-body md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
