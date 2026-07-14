import { cn } from "@/lib/utils";

export default function SectionHeader({ eyebrow, title, subtitle, align = "center", className }) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-3">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl md:text-[44px] leading-[1.1] text-espresso">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm md:text-base text-ash leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
