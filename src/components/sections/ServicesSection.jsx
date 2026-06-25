import { Link } from 'react-router-dom'
import {
  Search,
  ShieldCheck,
  Package,
  HandCoins,
  ClipboardCheck,
  Factory,
  Ship,
  Tag,
  ArrowRight,
} from 'lucide-react'
import SectionHeader from '../SectionHeader'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description:
      'We identify Chinese manufacturers that match your product specs, target price and order quantity, then shortlist the most credible options.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description:
      'On-site visits to confirm the supplier is a real factory or qualified trader, with the production capacity and certifications they claim.',
  },
  {
    icon: Package,
    title: 'Sample Management',
    description:
      'We collect, consolidate and ship samples to you, document differences between suppliers, and help you make a clear comparison.',
  },
  {
    icon: HandCoins,
    title: 'Price Negotiation',
    description:
      'Local negotiation in Chinese to push for fair prices, reasonable MOQs, and terms that protect your margins on every order.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description:
      'Pre-shipment, during-production and container-loading inspections using AQL standards with detailed photo reports.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description:
      'We track production progress weekly, flag delays early, and keep you informed with clear updates instead of vague answers.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description:
      'Booking sea or air freight, customs documentation, consolidation and door-to-door coordination through trusted forwarders.',
  },
  {
    icon: Tag,
    title: 'Private Labeling',
    description:
      'Custom packaging, logos, barcodes and inserts so your shipment arrives ready for your brand and retail channels.',
  },
]

export default function ServicesSection({ withCta = true }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="What we do"
          title="End-to-end sourcing services from China"
          description="One team, one point of contact, and a clear scope of work covering everything from supplier search to delivered goods."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1B6FB8]/10 text-[#1B6FB8]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-[#0B2545]">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {withCta && (
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#1B6FB8] hover:text-[#155A96]"
            >
              See full service details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
