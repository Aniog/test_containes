import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import { problems, trustPoints } from '../../data/siteContent'
import SectionHeading from '../common/SectionHeading'

export default function ProblemsTrustSection() {
  return (
    <section className="bg-white px-4 py-20 text-brand-ink sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Problems we solve"
            title="Reduce uncertainty before orders, production, and export"
            text="Sourcing from China can work well when suppliers, specifications, quality checks, and shipment details are handled in a structured way."
          />
          <div className="mt-8 grid gap-3">
            {problems.map((problem) => (
              <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-950" key={problem}>
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-none text-brand-amber" />
                <p className="text-sm font-medium leading-6">{problem}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-brand-navy p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Trust points</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Built for practical B2B sourcing work</h2>
          <div className="mt-8 grid gap-5">
            {trustPoints.map((point) => {
              const Icon = point.icon
              return (
                <div className="flex gap-4 rounded-3xl bg-white/10 p-5 text-white" key={point.title}>
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-white text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{point.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{point.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white p-4 text-brand-navy">
            <CheckCircle2 className="h-5 w-5 text-brand-blue" />
            <p className="text-sm font-semibold">Clear updates, documented checks, and realistic supplier communication.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
