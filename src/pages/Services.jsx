import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, ShieldCheck, Truck, HandCoins, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import CtaBanner from '@/components/CtaBanner'
import { services } from '@/data/siteData'

const iconMap = {
  'supplier-sourcing': Search,
  'factory-verification': Factory,
  'quality-inspection': ClipboardCheck,
  'production-follow-up': ShieldCheck,
  'shipping-coordination': Truck,
  'price-negotiation': HandCoins,
}

export default function Services() {
  return (
    <>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Practical sourcing services designed to reduce risk, control quality, and save time when buying from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <SectionHeader
            title="What we do for buyers"
            subtitle="From first supplier search to final delivery, we cover the full sourcing cycle."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.id]
              return (
                <div key={service.id} className="flex gap-5 p-6 md:p-8 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 rounded-lg bg-brand-light text-brand flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title mb-4">Why work with a local sourcing agent?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Buying directly from China can work for simple, low-risk orders. But when product quality, delivery timelines, and supplier reliability matter, a local agent gives you an on-the-ground advantage.
              </p>
              <ul className="space-y-3">
                {[
                  'Faster supplier identification and response times',
                  'Real factory visits and unbiased audit reports',
                  'Clearer communication in Chinese and English',
                  'Better pricing through local negotiation',
                  'Proactive problem solving during production',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <ArrowRight className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">Get a Free Sourcing Quote</Link>
              </div>
            </div>
            <div className="relative h-72 md:h-96 rounded-xl overflow-hidden bg-slate-200">
              <img
                data-strk-img-id="services-discussion-8f4d2e"
                data-strk-img="[services-title] [services-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sourcing team discussion"
                className="w-full h-full object-cover"
              />
              <span id="services-title" className="sr-only">Why work with a local sourcing agent</span>
              <span id="services-subtitle" className="sr-only">Local sourcing team in China factory meeting</span>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure which service you need?"
        subtitle="Describe your project and we will recommend the right support."
      />
    </>
  )
}
