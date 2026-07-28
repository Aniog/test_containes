import { ClipboardCheck, Factory, PackageCheck, Search, ShieldCheck, Ship } from 'lucide-react'
import { services } from '@/lib/siteData'
import SectionHeader from '@/components/shared/SectionHeader'

const icons = [Search, Factory, ClipboardCheck, ShieldCheck, PackageCheck, Ship]

const ServicesSection = () => (
  <section className="bg-white py-16 text-slate-950 md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Services"
          title="Practical sourcing support from supplier search to shipment"
          description="SSourcing China helps buyers reduce uncertainty in China sourcing with structured checks, clear communication, and on-the-ground coordination."
        />
        <a href="/contact" className="inline-flex w-fit rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
          Discuss your project
        </a>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[index]
          return (
            <article key={service.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            </article>
          )
        })}
      </div>
    </div>
  </section>
)

export default ServicesSection
