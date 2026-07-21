import React from "react";

/**
 * Editorial section header used between homepage blocks.
 * Renders a small uppercase eyebrow, a serif title, and an optional subline.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  light = false,
  id,
  titleId,
  subtitleId,
}) {
  const alignClass =
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";
  const tone = light ? "text-ivory-100/80" : "text-taupe-500";
  const titleTone = light ? "text-ivory-50" : "text-espresso";

  return (
    <div
      id={id}
      className={[
        "max-w-2xl mx-auto",
        align === "left" ? "md:mx-0" : "",
        align === "right" ? "md:ml-auto md:mr-0" : "",
        className,
      ].join(" ")}
    >
      {eyebrow && (
        <p className={`eyebrow ${tone} ${alignClass}`}>{eyebrow}</p>
      )}
      {title && (
        <h2
          id={titleId}
          className={[
            "font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] mt-3",
            titleTone,
            alignClass,
          ].join(" ")}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          id={subtitleId}
          className={[
            "mt-4 text-sm sm:text-base leading-relaxed max-w-md",
            alignClass,
            align === "center" ? "mx-auto" : "",
            light ? "text-ivory-100/70" : "text-taupe-500",
          ].join(" ")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
