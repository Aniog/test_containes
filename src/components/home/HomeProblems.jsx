import { AlertTriangle, XCircle, CheckCircle2 } from "lucide-react";

const problems = [
  "Can not tell if a supplier is real or a trading company posing as a factory",
  "Quality issues discovered only after goods arrive at your warehouse",
  "Production delays with no visibility into what is happening on the floor",
  "Hidden costs that inflate your landed price beyond the quoted FOB rate",
  "Language barriers making negotiation and specification unclear",
  "No local presence to enforce contracts or resolve disputes quickly",
];

const solutions = [
  "On-site factory audits with video reports and verified documentation",
  "Pre-shipment inspections with detailed defect photos and AQL standards",
  "Weekly production updates and milestone tracking with photos",
  "All-in pricing breakdown: product, packaging, shipping, and duties",
  "Bilingual project managers for clear specs and direct communication",
  "Local legal and logistics support to protect your interests",
];

export default function HomeProblems() {
  return (
    <section className="bg-primary py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Problems We Solve
          </p>
          <h2 className="mb-4 text-white">
            Sourcing from China Should Not Be a Gamble
          </h2>
          <p className="text-blue-100/80">
            We eliminate the common risks overseas buyers face when sourcing from
            China, so you can order with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <div className="bg-white/10 rounded-lg p-6 md:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-amber-300" />
              <h3 className="text-lg font-semibold text-white">Common Pain Points</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-300 mt-1 shrink-0" />
                  <span className="text-sm text-blue-50/90 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-white/10 rounded-lg p-6 md:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5 text-emerald-300" />
              <h3 className="text-lg font-semibold text-white">How We Fix Them</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 mt-1 shrink-0" />
                  <span className="text-sm text-blue-50/90 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
