import { AlertCircle } from "lucide-react"
import SectionHeader from "../shared/SectionHeader"
import { problems } from "../../data/siteData"

export default function ProblemsSection() {
  return (
    <section className="bg-brand-navy py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Problems We Solve
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Sourcing in China comes with real risks. We reduce them.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
            These are the issues we hear from buyers most often, and how our
            services address each one in practice.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-red/20 text-brand-red">
                <AlertCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white md:text-lg">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
