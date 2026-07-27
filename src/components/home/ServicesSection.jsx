import { Search, ClipboardCheck, ShieldCheck, Truck, Factory, HandCoins } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { services } from '@/data/siteData'

const icons = {
  'supplier-sourcing': Search,
  'factory-verification': Factory,
  'quality-inspection': ClipboardCheck,
  'production-follow-up': ShieldCheck,
  'shipping-coordination': Truck,
  'price-negotiation': HandCoins,
}

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <SectionHeader
          label="Our Services"
          title="End-to-end sourcing support from China"
          subtitle="From supplier discovery to final delivery, we act as your local team on the ground."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = icons[service.id]
            return (
              <div
                key={service.id}
                className="group p-6 md:p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand/20 transition"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-light text-brand flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
