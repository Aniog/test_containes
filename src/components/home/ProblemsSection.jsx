import { AlertTriangle, XCircle, CheckCircle2 } from "lucide-react";

const problems = [
  "Suppliers disappear after receiving deposits",
  "Samples look great, bulk quality is poor",
  "Production delays with no clear updates",
  "Hidden costs and surprise fees at every stage",
  "Language barriers and miscommunication",
  "No way to verify if a factory actually exists",
];

const solutions = [
  "On-site factory verification before any payment",
  "Inline and pre-shipment inspections with photo reports",
  "Weekly production updates with milestone tracking",
  "Transparent quoting with no hidden charges",
  "Bilingual project managers based in China",
  "Real-time video factory tours and license checks",
];

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            The Problems We Solve
          </h2>
          <p className="text-lg text-slate-600">
            Sourcing from China without local support is risky. Here is how we
            protect you at every step.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h3 className="text-lg font-semibold text-red-700">
                Common Sourcing Risks
              </h3>
            </div>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-700">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-green-100 bg-green-50/50 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-green-700">
                How We Protect You
              </h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
