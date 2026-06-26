import React from "react";
import Container from "@/components/layout/Container";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  children,
  className = "",
  surface = "paper",
  innerClassName = "",
}) {
  const surfaces = {
    paper: "bg-paper-50",
    mist: "bg-mist-100",
    paperTinted: "bg-paper-100",
    navy: "bg-navy-950 text-paper-50",
  };

  const isDark = surface === "navy";
  const eyebrowColor = isDark ? "text-copper-400" : "text-copper-600";
  const titleColor = isDark ? "text-paper-50" : "text-ink-900";
  const descColor = isDark ? "text-paper-50/70" : "text-ink-700";

  const alignment = {
    left: "text-left",
    center: "text-center mx-auto",
  };

  return (
    <section
      id={id}
      className={`relative ${surfaces[surface] ?? surfaces.paper} ${className}`}
    >
      <Container className={`py-20 md:py-28 ${innerClassName}`}>
        {(eyebrow || title || description) && (
          <div
            className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-14`}
          >
            {eyebrow && (
              <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>
            )}
            {title && (
              <h2
                className={`mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight text-balance ${titleColor}`}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl ${descColor} ${
                  align === "center" ? "mx-auto" : ""
                }`}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}