import { cn } from "@/lib/utils";

export default function SectionHeader({ eyebrow, title, subtitle, align = "center", className }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="display-2 text-espresso max-w-3xl">{title}</h2>}
      {subtitle && (
        <p className="text-sm md:text-[15px] text-graphite/80 max-w-xl leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
