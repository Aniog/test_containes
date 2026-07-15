import React from "react";

export default function SectionHeading({ eyebrow, title, align = "center", className = "" }) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col gap-3 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.05]">
        {title}
      </h2>
    </div>
  );
}
