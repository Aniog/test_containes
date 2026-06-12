import { cn } from "@/lib/utils";

export const Eyebrow = ({ children, className, light = false }) => (
  <div
    className={cn(
      "flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium",
      light ? "text-gold" : "text-steel",
      className
    )}
  >
    <span
      aria-hidden
      className={cn("inline-block w-8 h-px", light ? "bg-gold" : "bg-gold")}
    />
    <span>{children}</span>
  </div>
);

export const SectionHeading = ({ eyebrow, title, subtitle, light = false, align = "left", titleId }) => (
  <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
    {eyebrow && <Eyebrow light={light} className={cn(align === "center" && "justify-center")}>{eyebrow}</Eyebrow>}
    <h2
      id={titleId}
      className={cn(
        "mt-5 font-serif font-medium tracking-tight text-3xl md:text-4xl lg:text-5xl",
        light ? "text-bone" : "text-ink"
      )}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={cn(
          "mt-5 text-base md:text-[17px] leading-relaxed",
          light ? "text-mist" : "text-steel"
        )}
      >
        {subtitle}
      </p>
    )}
  </div>
);
