import { AlertTriangle, X, CheckCircle2 } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";

const PROBLEMS = [
  {
    bad: "Tradeshow leads go nowhere",
    good: "We follow up with verified factories in 3–5 working days.",
  },
  {
    bad: "Alibaba listings look great, but no one can verify the factory",
    good: "On-site audits with photos, license checks, and capacity reports.",
  },
  {
    bad: "Sample quality differs from bulk",
    good: "Golden sample program locks specs before mass production.",
  },
  {
    bad: "Defects caught only at destination",
    good: "Pre-shipment inspections with photo-rich reports before payment.",
  },
  {
    bad: "Production delays with no explanation",
    good: "Weekly written status updates and escalation when milestones slip.",
  },
  {
    bad: "Shipping quotes full of hidden fees",
    good: "Transparent FOB / CIF / DDP quotes with line-item breakdown.",
  },
];

export default function Problems() {
  return (
    <Section tone="default" id="problems">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Problems we solve"
            title="The familiar headaches of buying from China"
            lead="If any of these have cost you time, money, or trust, you are not alone. We have built our service around the gaps that catch first-time and experienced importers alike."
          />
          <div className="mt-8 rounded-lg border border-line bg-surface p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-100 text-accent">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <div>
                <h4 className="text-base font-semibold text-primary">
                  Why importers come to us
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Most buyers who contact us have been burned by at least one
                  of the scenarios on the right — or are determined to avoid
                  them. We focus on closing those gaps with practical, on-the-
                  ground work.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="space-y-3">
            {PROBLEMS.map((p) => (
              <li
                key={p.bad}
                className="grid grid-cols-1 gap-3 rounded-lg border border-line bg-surface p-5 shadow-card sm:grid-cols-[1fr_auto_1fr] sm:items-center"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                    <X className="h-4 w-4" />
                  </span>
                  <p className="text-sm text-ink">{p.bad}</p>
                </div>
                <span className="hidden h-px w-full bg-line sm:block" />
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-50 text-success">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium text-ink">{p.good}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
