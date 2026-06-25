import {
  AlertTriangle,
  ShieldCheck,
  Globe2,
  TimerReset,
  PackageX,
  Wallet,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const PROBLEMS = [
  {
    icon: AlertTriangle,
    problem: "Wrong supplier, wrong product",
    solution:
      "We pre-vet factories, verify business licenses, and require physical samples that match your specs before any deposit is paid.",
  },
  {
    icon: Globe2,
    problem: "Language and time-zone friction",
    solution:
      "We communicate with suppliers in Mandarin on your behalf, and consolidate everything in clear English updates.",
  },
  {
    icon: PackageX,
    problem: "Quality drops between samples and production",
    solution:
      "Documented golden samples, in-line inspections, and AQL-based pre-shipment QC catch defects before goods leave the factory.",
  },
  {
    icon: TimerReset,
    problem: "Missed deadlines and silent delays",
    solution:
      "Weekly production reports with photos and a delivery countdown, so delays surface early — not at the last minute.",
  },
  {
    icon: Wallet,
    problem: "Hidden costs and surprise fees",
    solution:
      "Transparent service fees, supplier quotations passed through at cost, and a single combined cost sheet before you commit.",
  },
  {
    icon: ShieldCheck,
    problem: "Risk of paying upfront to a stranger",
    solution:
      "Milestone-based payments, contracts in both English and Chinese, and the option to pay through our entity for added security.",
  },
];

export default function ProblemsSolved() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problems We Solve"
          title="The real risks of sourcing from China"
          description="If you've sourced before, you've probably seen at least one of these. Here's how we keep them from happening to you."
        />

        <div className="mt-12 grid gap-6 md:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.problem}
                className="rounded-2xl bg-surface border border-line p-6 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/5 text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-ink">{p.problem}</h3>
                <div className="mt-3 h-px w-10 bg-accent/60" />
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.solution}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
