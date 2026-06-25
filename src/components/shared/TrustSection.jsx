import { trustPoints } from '../../data/siteContent'
import SectionHeader from './SectionHeader'

const TrustSection = () => (
  <section className="bg-white py-16 text-slate-950 md:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        align="center"
        eyebrow="Trust points"
        title="Built for practical B2B sourcing decisions"
        description="SSourcing China focuses on clear supplier information, visible production progress, and realistic buyer communication."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point) => {
          const Icon = point.icon
          return (
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-950" key={point.title}>
              <Icon className="h-7 w-7 text-blue-700" />
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{point.text}</p>
            </article>
          )
        })}
      </div>
    </div>
  </section>
)

export default TrustSection
