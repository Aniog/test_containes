import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { PROCESS_STEPS } from "@/data/site";

export default function SourcingProcess() {
  return (
    <section className="bg-ink-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="How it works"
            title="From inquiry to delivery in 6 clear steps"
            description="A structured process with fixed milestones, written reports, and a single point of contact for every project."
          />
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent-700 hover:text-accent-800"
          >
            See full process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.n}
              className="relative flex flex-col gap-3 rounded-2xl border border-ink-200 bg-white p-7"
            >
              <span className="text-3xl font-semibold tracking-tight text-accent-600">
                {step.n}
              </span>
              <h3 className="text-lg font-semibold text-brand-900">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-600">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}