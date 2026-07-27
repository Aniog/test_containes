import React from "react";
import { Check } from "lucide-react";

export const SectionHeader = ({ kicker, title, subtitle, align = "left", light = false }) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleClass = light ? "text-white" : "text-navy";
  const subtitleClass = light ? "text-white/80" : "text-muted";
  return (
    <div className={`max-w-3xl ${alignClass} mb-12`}>
      {kicker && <p className="kicker mb-3">{kicker}</p>}
      <h2 className={titleClass}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg ${subtitleClass}`}>{subtitle}</p>}
    </div>
  );
};

export const Section = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-content">{children}</div>
    </section>
  );
};

export const SectionHeader2 = ({ kicker, title, subtitle, align = "left", light = false }) => {
  return null;
};

export const StatCard = ({ value, label }) => {
  return (
    <div className="text-center md:text-left">
      <div className="text-3xl md:text-4xl font-bold text-navy tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
};

export const Bullet = ({ children }) => (
  <li className="flex items-start gap-3 text-ink/80">
    <Check className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" strokeWidth={2.5} />
    <span>{children}</span>
  </li>
);


