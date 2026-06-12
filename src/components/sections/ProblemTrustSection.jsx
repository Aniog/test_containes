import { problems, trustPoints } from '@/data/siteData'
import SectionHeading from './SectionHeading'

export default function ProblemTrustSection() {
  return (
    <section className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-300">Problems we solve</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">Reduce sourcing uncertainty before it becomes costly</h2>
          <div className="mt-8 grid gap-4">
            {problems.map((problem) => (
              <article key={problem.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white">
                <h3 className="font-bold text-white">{problem.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{problem.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading
            tone="dark"
            eyebrow="Trust points"
            title="A practical China-side partner for your purchasing team"
            text="We focus on clear communication, documented checks, and actionable updates that help buyers make better decisions."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {trustPoints.map((point) => {
              const Icon = point.icon
              return (
                <article key={point.title} className="rounded-2xl border border-white/10 bg-white p-5 text-slate-900 shadow-sm">
                  <Icon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-slate-950">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{point.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
