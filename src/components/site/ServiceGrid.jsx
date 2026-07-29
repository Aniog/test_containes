import { ShieldCheck, Factory, ClipboardCheck, Truck, Handshake, Search } from 'lucide-react'

const iconMap = [Search, Factory, ClipboardCheck, ShieldCheck, Handshake, Truck]

const ServiceGrid = ({ items }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const Icon = iconMap[index % iconMap.length]

        return (
          <article key={item.title} className="rounded-3xl border border-brand-line bg-white p-6 shadow-card md:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-brand-ink">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-brand-slate">{item.description}</p>
          </article>
        )
      })}
    </div>
  )
}

export default ServiceGrid
