import { ClipboardCheck, Factory, PackageCheck, Search, ShieldCheck, Truck } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading.jsx?ssourcing=20260728'
import { services } from '@/data/siteContent.js'

const icons = [Search, ShieldCheck, Factory, ClipboardCheck, PackageCheck, Truck]

const ServicesSection = ({ compact = false }) => (
  <section className="bg-slate-50 py-16 text-slate-950 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Sourcing support from supplier search to shipment handoff"
        description="Choose individual services or combine them into a practical sourcing workflow for your China purchases."
        align={compact ? 'left' : 'center'}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[index]
          return (
            <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm font-medium text-slate-700">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-700" /> {point}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </div>
  </section>
)

export default ServicesSection
