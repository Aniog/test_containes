import { services } from '@/lib/pageData'
import SectionHeading from './SectionHeading'

export default function ServiceGrid({ compact = false }) {
  return (
    <section className="bg-white py-16 text-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!compact && (
          <SectionHeading
            eyebrow="Services"
            title="Sourcing support from supplier search to export handover"
            text="SSourcing China helps overseas buyers reduce avoidable sourcing risk with structured research, verification, inspection, production follow-up, and shipping coordination."
          />
        )}
        <div className={`grid gap-5 ${compact ? '' : 'mt-10'} md:grid-cols-2 lg:grid-cols-3`}>
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{service.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
