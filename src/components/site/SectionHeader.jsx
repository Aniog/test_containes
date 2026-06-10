import React from "react";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  titleId,
  descId,
  className = "",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-500 mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        id={titleId}
        className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-800"
      >
        {title}
      </h2>
      {description && (
        <p
          id={descId}
          className="mt-4 text-base md:text-lg leading-relaxed text-ink-700"
        >
          {description}
        </p>
      )}
    </div>
  );
}
