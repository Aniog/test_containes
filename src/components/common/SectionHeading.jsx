import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, align = "center", className, as: As = "h2" }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <As
        className={cn(
          "font-serif text-3xl md:text-5xl leading-[1.1] text-espresso",
          align === "center" ? "max-w-2xl" : "max-w-xl"
        )}
      >
        {title}
      </As>
    </div>
  );
}
