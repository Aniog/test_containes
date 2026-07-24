import React from "react";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  invert = false,
}) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";
  const titleColor = invert ? "text-cream" : "text-ink";
  const eyebrowColor = invert ? "text-gold-pale" : "text-muted";
  const descColor = invert ? "text-cream/80" : "text-muted";

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`label-eyebrow ${eyebrowColor}`}>{eyebrow}</span>
      )}
      {title && (
        <h2
          className={`font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight ${titleColor}`}
          style={{ fontWeight: 400 }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`max-w-xl text-sm sm:text-base leading-relaxed ${descColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
