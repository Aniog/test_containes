import { ClipboardCheck, Factory, Handshake, PackageCheck, Search, Ship } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import CTAButton from '@/components/shared/CTAButton'
import { services } from '@/data/siteContent'

const icons = [Search, Factory, ClipboardCheck, PackageCheck, Handshake, Ship]

export default function ServicesOverview({ compact = false }) {
  const shownServices = compact ? services.slice(0, 3) : services

  return (
    <section className="bg-brand-mist py-16 text-brand-ink md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Services"
            title="Practical sourcing support from supplier search to shipment"
            description="Use SSourcing China as your local coordination team for clearer supplier communication, better verification, and more controlled production follow-up."
          />
          {compact && <CTAButton href="/services" variant="secondary">All Services</CTAButton>}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shownServices.map((service, index) => {
            const Icon = icons[index]
            return (
              <article key={service.title} className="rounded-2xl border border-brand-line bg-white p-6 text-brand-ink shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-sky text-brand-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
