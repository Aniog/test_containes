import React from "react";

const INDUSTRIES = [
  "Aerospace",
  "Architectural Cladding",
  "Automotive",
  "HVAC",
  "Cabinetry",
  "Electronics Enclosures",
  "Energy",
  "Rail & Transit",
  "Medical Equipment",
];

export default function IndustriesBar() {
  return (
    <section
      aria-label="Industries served"
      className="border-y border-mist bg-sand"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <p className="text-xs uppercase tracking-[0.3em] text-smoke shrink-0">
            Trusted across
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-ink/80">
            {INDUSTRIES.map((industry, index) => (
              <li key={industry} className="flex items-center gap-8">
                <span>{industry}</span>
                {index < INDUSTRIES.length - 1 && (
                  <span
                    aria-hidden
                    className="h-1 w-1 rounded-full bg-brass"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
