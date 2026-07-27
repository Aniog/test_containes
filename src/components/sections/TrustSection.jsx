import { trustPoints } from '@/data/siteData'
import SectionIntro from './SectionIntro'

export default function TrustSection() {
  return (
    <section className="bg-brand-navy py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Trust points"
          title="Built for serious overseas buying teams"
          description="The goal is not to add complexity. The goal is to make supplier decisions, production status, quality control, and shipping handover easier to manage from abroad."
          align="center"
          tone="dark"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = point.icon
            return (
              <article key={point.title} className="rounded-2xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200">{point.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
