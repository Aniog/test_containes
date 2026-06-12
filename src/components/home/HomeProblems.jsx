import { AlertTriangle, ArrowRight, X } from 'lucide-react';

const problems = [
  {
    problem: 'Suppliers on B2B platforms often turn out to be traders, not factories.',
    solution:
      'We visit factories on site and verify production capacity, certifications and ownership before you place an order.',
  },
  {
    problem: 'Quotations look similar but final products vary in quality.',
    solution:
      'We compare offers on a clear scoring sheet and run sample evaluations against your written specification.',
  },
  {
    problem: 'Production delays and silence after the deposit is paid.',
    solution:
      'We follow production weekly with photos, status updates and on-site visits to push timelines.',
  },
  {
    problem: 'Defects discovered only after the goods arrive at your warehouse.',
    solution:
      'AQL-based pre-shipment inspections catch defects before the container is sealed and sent.',
  },
  {
    problem: 'Confusing freight quotations and customs paperwork.',
    solution:
      'We coordinate sea, air and rail freight with trusted forwarders and prepare clean export documentation.',
  },
  {
    problem: 'Hard to manage multiple suppliers, samples and shipments at once.',
    solution:
      'One project manager handles communication, consolidation and reporting across all your suppliers.',
  },
];

export default function HomeProblems() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Problems we solve
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            The real challenges of buying from China — and how we handle them
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.problem}
              className="rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-card"
            >
              <div className="flex items-start gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-50 text-red-600 shrink-0">
                  <X className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
                    Problem
                  </p>
                  <p className="mt-1 text-slate-900 font-medium">{p.problem}</p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3 border-t border-slate-100 pt-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-50 text-emerald-700 shrink-0">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                    How we help
                  </p>
                  <p className="mt-1 text-slate-700 text-sm leading-relaxed">
                    {p.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
