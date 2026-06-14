import React from "react";
import { BRAND } from "@/data/site";

const TrustStrip = () => {
  return (
    <section className="bg-brand-mist border-y border-brand-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <p className="text-xs tracking-eyebrow uppercase text-brand-muted">
          Trusted by fabricators in
        </p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-brand-ink/70 font-display font-medium text-base">
          {[
            "HVAC Industries",
            "Lindemann Group",
            "Cladtech",
            "Northwind Architectural",
            "Volta Switchgear",
            "Arclight White Goods",
            "Polaris Elevator",
          ].map((name) => (
            <span
              key={name}
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-2 text-xs text-brand-muted">
          <span className="block w-1.5 h-1.5 rounded-full bg-brand-brass" />
          {BRAND.certifications.join(" · ")}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
