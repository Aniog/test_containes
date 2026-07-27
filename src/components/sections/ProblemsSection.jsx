import React from "react";
import { Section, SectionHeader } from "../ui/Primitives.jsx";
import { problems } from "../../data/site.js";
import { iconMap } from "../../data/icons.js";

export default function ProblemsSection() {
  return (
    <Section id="problems">
      <SectionHeader
        kicker="Problems we solve"
        title="If any of these sound familiar, we can help"
        subtitle="We built SSourcing China to address the specific sourcing frustrations we saw buyers encounter again and again."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {problems.map((p) => {
          const Icon = iconMap[p.icon] || iconMap.AlertTriangle;
          return (
            <div
              key={p.title}
              className="rounded-lg border border-hairline bg-white p-5"
            >
              <div className="w-10 h-10 rounded-md bg-accent/10 text-accent flex items-center justify-center mb-3">
                <Icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="text-navy font-semibold text-base leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/75 leading-relaxed">{p.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
