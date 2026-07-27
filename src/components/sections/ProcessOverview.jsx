import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeader } from "../ui/Primitives.jsx";
import { processSteps } from "../../data/site.js";

export default function ProcessOverview() {
  return (
    <Section id="process">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <SectionHeader
          kicker="Our process"
          title="A clear, documented workflow from RFQ to delivery"
          subtitle="Five steps. Every step has a written deliverable. You always know what is happening, what is next, and what you need to decide."
        />
        <Link
          to="/how-it-works"
          className="btn-ghost md:self-start md:mt-2 text-sm font-semibold"
        >
          Full process detail
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {processSteps.map((step, idx) => (
          <div
            key={step.step}
            className="relative rounded-lg border border-hairline bg-white p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-md bg-navy text-white font-bold text-sm flex items-center justify-center">
                {step.step}
              </div>
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block flex-1 h-px bg-hairline" />
              )}
            </div>
            <h3 className="text-navy font-semibold text-base leading-snug">{step.title}</h3>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-steel border border-hairline p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-md bg-navy/10 text-navy flex items-center justify-center flex-shrink-0">
            <Check className="w-5 h-5" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-navy font-semibold">Every step is documented</div>
            <div className="text-sm text-ink/75">
              You receive written reports, sample photos, and inspection findings at every milestone.
            </div>
          </div>
        </div>
        <Link to="/how-it-works" className="btn-secondary-dark !text-sm">
          Read the full workflow
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
