import { Link } from "react-router-dom";

export function SectionTitle({ eyebrow, title, subtitle, align = "center", cta, dark = false }) {
  const titleColor = dark ? "text-cream" : "text-ink";
  const eyebrowColor = dark ? "text-champagne" : "text-taupe";
  const subColor = dark ? "text-cream/70" : "text-muted";
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignClass} gap-3`}>
      {eyebrow && (
        <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>
      )}
      {title && (
        <h2
          className={`font-display text-4xl md:text-5xl leading-[1.05] ${titleColor}`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`max-w-xl text-sm md:text-base leading-relaxed ${subColor}`}>
          {subtitle}
        </p>
      )}
      {cta && (
        <Link to={cta.to} className="mt-2">
          <span className="eyebrow text-ink link-underline">{cta.label}</span>
        </Link>
      )}
    </div>
  );
}
