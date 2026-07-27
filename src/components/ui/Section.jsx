import { cn } from "@/lib/utils";

export default function Section({
  as: Tag = "section",
  className,
  containerClassName,
  children,
  id,
  bg = "white",
}) {
  const bgClass = {
    white: "bg-white",
    ink: "bg-ink-50",
    brand: "bg-brand-700 text-white",
    brandSoft: "bg-brand-50",
    dark: "bg-ink-900 text-white",
  }[bg];

  return (
    <Tag id={id} className={cn("py-16 md:py-24", bgClass, className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-5 md:px-8", containerClassName)}>
        {children}
      </div>
    </Tag>
  );
}

export function SectionHeader({ eyebrow, title, description, align = "left", light = false }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleClass = light ? "text-white" : "text-ink-900";
  const eyebrowClass = light ? "text-brand-200" : "text-brand-600";
  const descClass = light ? "text-ink-200" : "text-ink-600";
  return (
    <div className={cn("max-w-3xl", alignClass)}>
      {eyebrow && (
        <p
          id={eyebrowId(eyebrow)}
          className={cn("text-sm font-semibold uppercase tracking-wider", eyebrowClass)}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={cn(
            "mt-2 text-3xl md:text-4xl font-bold leading-tight tracking-tight balance",
            titleClass
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p className={cn("mt-4 text-base md:text-lg leading-relaxed", descClass)}>
          {description}
        </p>
      )}
    </div>
  );
}

function eyebrowId(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
