import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, Handshake, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description:
      'We identify and shortlist qualified manufacturers from our vetted network and major B2B platforms, then compare quotes, MOQs, and lead times for you.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    description:
      'On-site checks of business licenses, production lines, capacity, and quality systems — so you know exactly who you are dealing with before you pay.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control Inspection',
    description:
      'Pre-production, during-production, and pre-shipment inspections against your specifications, with detailed photo and video reports.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description:
      'We monitor schedules, resolve issues on the factory floor, and keep you updated weekly — no more chasing suppliers across time zones.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description:
      'We coordinate freight forwarders, consolidate shipments, prepare export documents, and track your cargo from factory to destination port.',
  },
  {
    icon: Handshake,
    title: 'End-to-End Management',
    description:
      'One accountable partner from product brief to delivery. Ideal for brands and importers who want a dedicated team on the ground in China.',
  },
]

const ServicesOverview = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need to buy from China safely"
          description="From the first supplier search to the final shipment, we handle the work on the ground so you can focus on your business."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
            >
              <div className="inline-flex rounded-lg bg-brand-50 p-3">
                <service.icon className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink md:text-xl">{service.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-body">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            Explore all services in detail <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
