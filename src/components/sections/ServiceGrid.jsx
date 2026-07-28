import { ClipboardCheck, Factory, SearchCheck, ShieldCheck, ShipWheel, TimerReset } from 'lucide-react'
import { services } from '@/data/siteContent'

const icons = [SearchCheck, ShieldCheck, Factory, ClipboardCheck, TimerReset, ShipWheel]

const ServiceGrid = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => {
        const Icon = icons[index]

        return (
          <article key={service.title} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
            <div className="inline-flex rounded-2xl bg-brand-sky p-3 text-brand-blue">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-brand-navy">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
          </article>
        )
      })}
    </div>
  )
}

export default ServiceGrid
