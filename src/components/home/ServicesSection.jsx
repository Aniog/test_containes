import { ClipboardCheck, Factory, PackageCheck, Search, Ship, TimerReset } from 'lucide-react'
import SectionHeader from '../site/SectionHeader'
import { services } from '../../content'

const icons = [Search, ClipboardCheck, Factory, PackageCheck, TimerReset, Ship]

function ServicesSection() {
  return (
    <section className="bg-brand-bg py-16 text-brand-ink lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Practical sourcing support from supplier search to shipment"
          description="Choose one service or combine them into a full sourcing workflow. The focus is on reliable information, clear communication, and practical risk control."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <article key={service.title} className="rounded-2xl border border-brand-line bg-white p-6 text-brand-ink shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-navy/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-softBlue text-brand-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-brand-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-ink/70">{service.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
