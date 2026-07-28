import { ClipboardCheck, Factory, PackageCheck, SearchCheck, Ship, TimerReset } from 'lucide-react'
import { services } from '@/data/siteData'
import SectionHeader from '@/components/shared/SectionHeader'

const icons = [SearchCheck, Factory, ClipboardCheck, TimerReset, PackageCheck, Ship]

const ServicesGrid = () => (
  <section className="bg-brand-white py-16 text-brand-navy md:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Services"
        title="End-to-end China sourcing support"
        description="Choose focused help for one sourcing stage or coordinate the full supplier search, order follow-up, quality check, and shipping handover process."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[index]
          return (
            <article key={service.title} className="rounded-3xl border border-brand-line bg-white p-6 text-brand-navy shadow-soft transition hover:-translate-y-1 hover:border-brand-blue/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-brand-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-slate">{service.description}</p>
            </article>
          )
        })}
      </div>
    </div>
  </section>
)

export default ServicesGrid
