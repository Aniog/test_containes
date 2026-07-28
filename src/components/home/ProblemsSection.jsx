import { problemsWeSolve } from "@/data/siteData"
import { XCircle, CheckCircle } from "lucide-react"

export function ProblemsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">
              Problems We Solve
            </span>
            <h2 className="mt-2 section-title text-white">
              Sourcing from China without the usual headaches
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Overseas buyers often face unreliable suppliers, quality gaps, and
              logistics confusion. We reduce those risks with verified processes
              and on-the-ground support.
            </p>
          </div>

          <div className="grid gap-4">
            {problemsWeSolve.map((problem) => (
              <div
                key={problem.title}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="mt-1 shrink-0">
                  <XCircle className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {problem.title}
                  </h3>
                  <p className="mt-1 text-white/70">{problem.description}</p>
                </div>
                <div className="ml-auto hidden shrink-0 sm:block">
                  <CheckCircle className="h-6 w-6 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
