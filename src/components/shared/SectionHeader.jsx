import { cn } from "@/lib/utils"

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}) {
  const isDark = tone === "dark"
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className={isDark ? "eyebrow-light" : "eyebrow"}>{eyebrow}</span>
      )}
      <h2
        className={cn(
          "mt-4 font-serif text-3xl font-medium leading-[1.1] md:text-4xl lg:text-5xl text-balance",
          isDark ? "text-bone" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            isDark ? "text-bone/70" : "text-steel-soft",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
