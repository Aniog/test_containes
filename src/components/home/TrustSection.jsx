import { BadgeCheck, FileText, MapPinned, Network } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { trustPoints } from '@/data/siteContent'

const icons = [MapPinned, FileText, BadgeCheck, Network]

export default function TrustSection() {
  return (
    <section className="bg-brand-navy py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Trust points"
          title="A grounded sourcing partner for buyer-side decisions"
          description="We support your team with local coordination, practical verification, and clear reporting so you can make informed sourcing decisions."
          align="center"
          inverse
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => {
            const Icon = icons[index]
            return (
              <article key={point.label} className="rounded-2xl border border-white/15 bg-white/8 p-6 text-white">
                <Icon className="h-8 w-8 text-brand-amber" />
                <h3 className="mt-5 text-lg font-semibold text-white">{point.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{point.detail}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
