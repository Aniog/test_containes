import { AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/site/SectionHeader";

const ITEMS = [
  {
    problem: "Trading companies pretending to be factories",
    solution:
      "We visit the facility in person, verify business licenses, and confirm production happens on-site.",
  },
  {
    problem: "Quality drops after the golden sample",
    solution:
      "We define an inspection plan up front and run AQL pre-shipment checks before goods leave the factory.",
  },
  {
    problem: "Hidden costs and unclear quotations",
    solution:
      "We standardize quotes across suppliers — unit cost, MOQ, mold fees, packaging, and shipping terms.",
  },
  {
    problem: "Communication gaps and time-zone delays",
    solution:
      "A dedicated English-speaking sourcing manager handles your project end-to-end with weekly updates.",
  },
  {
    problem: "Production delays without warning",
    solution:
      "We track production milestones with photo evidence and flag risks early so you can adjust plans.",
  },
  {
    problem: "Shipping surprises at destination",
    solution:
      "Clear Incoterms, accurate HS codes, and pre-arranged forwarding partners keep import costs predictable.",
  },
];

const HomeProblems = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader
          eyebrow="Problems We Solve"
          title="Common issues when buying from China — handled."
          description="Most overseas buyers run into the same problems. We've built our service around solving them, not selling around them."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ITEMS.map((it) => (
            <div
              key={it.problem}
              className="rounded-xl border border-border-soft bg-white p-6 md:p-7"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-50 text-red-600 shrink-0">
                  <AlertTriangle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-red-600">Problem</p>
                  <p className="mt-1 text-base font-semibold text-brand">{it.problem}</p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent">How we solve it</p>
                  <p className="mt-1 text-sm text-slate-700 leading-relaxed">{it.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProblems;
