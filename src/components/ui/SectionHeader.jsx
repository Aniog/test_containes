import { cn } from "@/lib/utils";

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  titleId,
  subtitleId,
  className,
}) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={cn("max-w-3xl", alignClass, className)}>
      {eyebrow && (
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs uppercase tracking-widest2 text-accent font-medium">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        id={titleId}
        className={cn(
          "mt-5 font-serif font-light tracking-tight text-3xl md:text-5xl leading-[1.1]",
          light ? "text-bone" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          id={subtitleId}
          className={cn(
            "mt-6 text-[17px] leading-relaxed",
            light ? "text-silver" : "text-steel"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
