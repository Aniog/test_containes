import { ClipboardList, Factory, FileSearch, Handshake, PackageCheck, Ship } from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'
import { services } from '@/data/siteContent'

const icons = {
  'supplier-search': FileSearch,
  'factory-verification': Factory,
  'price-negotiation': Handshake,
  'quality-control': PackageCheck,
  'production-follow-up': ClipboardList,
  'shipping-coordination': Ship,
}

export default function ServicesSection({ compact = false }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Sourcing services that support the full buying process"
          description="Use SSourcing China as your local execution partner for supplier discovery, verification, quality control, production follow-up, and export coordination."
          align={compact ? 'left' : 'center'}
          id="services-section-title"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.id]
            return (
              <article key={service.id} className="rounded-3xl border border-brand-line bg-white p-6 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-brand-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
