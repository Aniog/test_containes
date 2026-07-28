import { problemsWeSolve } from "@/data/siteData";
import { XCircle, CheckCircle } from "lucide-react";

export default function ProblemsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Problems We Solve
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Sourcing from China is complex. We make it manageable.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Importers often struggle with unreliable suppliers, quality issues, and logistics surprises. Our process is built to reduce those risks.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {problemsWeSolve.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <h3 className="text-sm font-semibold text-slate-900 line-through decoration-red-400/60">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-3 flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
