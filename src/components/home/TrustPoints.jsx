import { trustPoints } from "@/data/content"
import Section from "@/components/ui/Section"

export default function TrustPointsSection() {
  return (
    <Section background="navy" id="trust">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
          Why SSourcing
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
          Track record you can verify
        </h2>
        <p className="mt-4 text-lg text-slate-200 leading-relaxed">
          Twelve years of work, hundreds of clients, and a few numbers we are
          happy to put in writing.
        </p>
      </div>

      <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trustPoints.map((tp) => (
          <div
            key={tp.label}
            className="rounded-xl border border-white/15 bg-white/5 backdrop-blur p-6"
          >
            <dt className="text-4xl font-bold text-white">{tp.metric}</dt>
            <dd className="mt-1 text-sm font-semibold text-accent-500">
              {tp.label}
            </dd>
            <p className="mt-3 text-sm text-slate-200 leading-relaxed">
              {tp.description}
            </p>
          </div>
        ))}
      </dl>
    </Section>
  )
}
