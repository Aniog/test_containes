import { AlertTriangle, CheckCircle } from 'lucide-react'
import SectionHeader from '../SectionHeader'
import { problems, trustPoints } from '../../data/siteContent'

export default function ProblemsSection() {
  return (
    <section className="bg-sourcing-navy py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Problems we solve"
            title="Reduce common sourcing risks before they become expensive"
            description="Many sourcing problems start with unclear requirements, unverified suppliers, weak production follow-up, or missed shipment details."
            inverted
          />
          <div className="mt-8 grid gap-3">
            {problems.map((problem) => (
              <div key={problem} className="flex gap-3 rounded-2xl bg-white/10 p-4 text-sourcing-mist">
                <AlertTriangle className="h-5 w-5 shrink-0 text-sourcing-gold" />
                <p className="text-sm leading-6">{problem}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white p-8 text-sourcing-ink shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-wide text-sourcing-blue">Trust points</p>
          <h3 className="mt-3 text-2xl font-bold text-sourcing-navy">Built for clear B2B communication</h3>
          <div className="mt-6 grid gap-4">
            {trustPoints.map((point) => (
              <div key={point} className="flex gap-3">
                <CheckCircle className="h-6 w-6 shrink-0 text-sourcing-blue" />
                <p className="font-medium text-sourcing-ink">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
