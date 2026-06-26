import { SectionHeading } from './SectionHeading'
import { trustPoints } from '@/data/siteData'

export function TrustSection() {
  return (
    <section className="bg-slate-900 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why SSourcing China"
          title="Built on Experience, Transparency, and Results"
          description="Numbers matter, but long-term client relationships matter more. Here is what our track record looks like."
          className="text-white"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.id}
              className="rounded-xl border border-slate-700 bg-slate-800/50 p-6"
            >
              <div className="text-4xl font-bold text-secondary">{point.stat}</div>
              <div className="mt-2 font-semibold text-white">{point.label}</div>
              <p className="mt-2 text-sm text-slate-400">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
