import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/data/content.js";

const ProcessSection = () => {
  return (
    <section className="bg-ink-50 border-b border-ink-200">
      <div className="container-page section-pad">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">Sourcing process</p>
            <h2
              id="process-title"
              className="mt-3 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight"
            >
              A predictable six-step path from inquiry to delivered cargo
            </h2>
            <p
              id="process-sub"
              className="mt-4 text-base text-ink-700 leading-relaxed"
            >
              We do not hide behind jargon. Every step has a written deliverable
              and a clear approval point, so you always know what happens next
              and what it costs.
            </p>
            <Link
              to="/how-it-works"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Read the full process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-8">
            <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {processSteps.map((step) => (
                <li
                  key={step.n}
                  className="relative rounded-lg border border-ink-200 bg-white p-5"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-bold tracking-widest text-brand-600">
                      STEP {step.n}
                    </span>
                  </div>
                  <h3
                    id={`step-${step.n}-title`}
                    className="mt-2 text-lg font-semibold text-ink-900"
                  >
                    {step.title}
                  </h3>
                  <p
                    id={`step-${step.n}-body`}
                    className="mt-1.5 text-sm text-ink-700 leading-relaxed"
                  >
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
