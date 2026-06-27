import React from "react";
import { strings } from "../../data/strings";

const reasons = [
  { titleKey: "why1Title", descKey: "why1Desc", icon: "clock" },
  { titleKey: "why2Title", descKey: "why2Desc", icon: "mobile" },
  { titleKey: "why3Title", descKey: "why3Desc", icon: "gift" },
];

function ReasonIcon({ type }) {
  if (type === "clock") {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2" />
        <path d="M16 8 L16 16 L22 20" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "mobile") {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="16" height="24" rx="3" stroke="#8159BB" strokeWidth="2" />
        <line x1="14" y1="24" x2="18" y2="24" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 4 L16 28" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 10 L16 4 L22 10" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 16 L16 8 L24 16" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WhyStrikingly() {
  const s = strings.en;
  return (
    <section className="why" aria-labelledby="why-heading">
      <div className="container">
        <h2 id="why-heading" className="section-heading">{s.whyHeading}</h2>
        <div className="why-grid">
          {reasons.map((r) => (
            <div key={r.titleKey} className="why-card">
              <ReasonIcon type={r.icon} />
              <h3 className="why-title">{s[r.titleKey]}</h3>
              <p className="why-desc">{s[r.descKey]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
