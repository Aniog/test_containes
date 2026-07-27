import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  { problem: "Hard to find reliable suppliers", solution: "We pre-vet factories with on-site audits and background checks." },
  { problem: "Language & communication barriers", solution: "Bilingual sourcing managers handle all negotiations and follow-ups." },
  { problem: "Quality issues discovered too late", solution: "In-process and pre-shipment inspections catch defects before shipping." },
  { problem: "Production delays & missed deadlines", solution: "Weekly progress reports and timeline tracking keep orders on schedule." },
  { problem: "Hidden costs and unclear pricing", solution: "Transparent quotes with itemized breakdowns — no surprises." },
  { problem: "Complicated shipping & customs", solution: "We coordinate freight, docs, and clearance end to end." },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Sourcing Problems We Solve
          </h2>
          <p className="text-slate-600 text-lg">
            Importing from China is complex. We remove the friction so you can focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {problems.map((item) => (
            <div
              key={item.problem}
              className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200"
            >
              <div className="shrink-0 mt-0.5">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="font-medium text-slate-900 text-sm mb-1">{item.problem}</p>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-slate-600 text-sm">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
