import React from "react";

const SectionHeading = ({ eyebrow, title, subtitle, align = "left", light = false }) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-[0.18em] uppercase mb-3 ${
            light ? "text-accent" : "text-ink-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-ink-100" : "text-ink-700"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;