import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader.jsx'
import { problems, trustPoints } from '@/data/siteData.js'

export default function ProblemsTrustSection() {
  return (
    <section className="bg-sourcing-navy py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Problems we solve"
            title="Reduce avoidable sourcing confusion before it becomes expensive"
            description="China sourcing can work well when suppliers, samples, quality expectations, and shipping details are checked early and followed carefully."
            dark
          />
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-wide text-sourcing-sky">Best fit for buyers who need</p>
            <p className="mt-3 text-lg font-semibold leading-8 text-white">A China-side partner to communicate with suppliers, verify details, and keep sourcing decisions organized.</p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="rounded-2xl border border-white/10 bg-white p-6 text-sourcing-ink shadow-b2b">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-sourcing-amber" />
              <h3 className="text-xl font-bold text-sourcing-navy">Common buyer risks</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {problems.map((problem) => (
                <p key={problem} className="flex gap-3 text-sm leading-6 text-sourcing-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sourcing-amber" /> {problem}
                </p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {trustPoints.map((point) => {
              const Icon = point.icon
              return (
                <article key={point.title} className="rounded-2xl border border-white/10 bg-white/10 p-5 text-white">
                  <Icon className="h-6 w-6 text-sourcing-sky" />
                  <h3 className="mt-4 font-bold text-white">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">{point.description}</p>
                </article>
              )
            })}
          </div>
          <p className="flex items-start gap-3 rounded-2xl bg-sourcing-green p-5 text-sm font-semibold leading-6 text-white">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" /> Clear reports, realistic updates, and practical supplier follow-up help buyers make better sourcing decisions.
          </p>
        </div>
      </div>
    </section>
  )
}
