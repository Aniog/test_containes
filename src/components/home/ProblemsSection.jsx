import { XCircle, CheckCircle2 } from "lucide-react";

const problems = [
  "Cannot verify if a supplier is legitimate",
  "Language barriers and slow communication",
  "Hidden costs and unclear pricing",
  "Poor product quality on arrival",
  "Production delays with no updates",
  "Complex export paperwork and customs",
];

const solutions = [
  "On-site factory audits and license verification",
  "Bilingual sourcing team based in China",
  "Transparent quotes with itemized cost breakdowns",
  "Pre-shipment and in-process quality inspections",
  "Weekly production reports and milestone tracking",
  "Full logistics coordination and documentation support",
];

export default function ProblemsSection() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Problems We Solve
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Sourcing from China can be risky. Here is how we remove the common pain points.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="p-6 lg:p-8 rounded-xl bg-white border border-red-100">
            <h3 className="text-lg font-semibold text-red-600 mb-5 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Common Sourcing Risks
            </h3>
            <ul className="space-y-3">
              {problems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 lg:p-8 rounded-xl bg-white border border-green-100">
            <h3 className="text-lg font-semibold text-success mb-5 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              How We Fix Them
            </h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
