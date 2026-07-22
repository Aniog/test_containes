import { cn } from "@/lib/utils";

export default function SectionHeader({ eyebrow, title, align = "center", subtitle, className }) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      {title && (
        <h2 className="display-2 text-balance max-w-2xl">{title}</h2>
      )}
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-[15px] md:text-base text-ink-muted font-sans font-light leading-relaxed max-w-xl",
            align === "center" && "text-center"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
