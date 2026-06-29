import { ArrowUpRight } from 'lucide-react'
import { industries } from './content'

function ApplicationSection() {
  return (
    <section id="applications" className="rounded-[2rem] bg-slate-950 px-6 py-12 text-white md:px-10 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">Applications</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Built for the industries that demand clean, reliable folding.
          </h2>
          <p className="text-base leading-7 text-slate-300">
            From general sheet metal production to specialist fabrication, ARTITECT MACHINERY supports teams that need
            accuracy, durability, and a workflow operators can trust.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {industries.map((industry) => (
            <article key={industry} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-amber-400" />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Practical machine performance suited to quality-focused metal forming environments.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ApplicationSection
