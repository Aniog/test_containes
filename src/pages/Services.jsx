import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Ship, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    slug: 'supplier-sourcing',
    description: 'We identify and match you with reliable Chinese manufacturers that fit your product requirements, quality standards, and budget.',
    details: [
      'Product category research and supplier mapping',
      'Factory capability and capacity assessment',
      'Price negotiation and terms review',
      'Sample coordination and evaluation support',
    ],
    suitable: 'Ideal for first-time importers and established brands expanding their supplier base.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    slug: 'factory-verification',
    description: 'On-site audits to verify business legitimacy, production capacity, quality systems, and compliance before you place orders.',
    details: [
      'Business license and registration verification',
      'Factory floor and capacity audit',
      'Quality management system review (ISO, BSCI, etc.)',
      'Reference checks with existing clients',
    ],
    suitable: 'Essential before committing to a new or high-value supplier relationship.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    slug: 'quality-inspection',
    description: 'Independent third-party inspections at key production stages to catch defects early and protect your investment.',
    details: [
      'Pre-production material and component checks',
      'During-production inline monitoring',
      'Pre-shipment final inspection with detailed reports',
      'Container loading supervision',
    ],
    suitable: 'Recommended for every production run, especially for new products or suppliers.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    slug: 'shipping-coordination',
    description: 'End-to-end logistics support from factory to your warehouse, including consolidation, customs documentation, and freight forwarding.',
    details: [
      'Inland transportation and factory pickup',
      'Consolidation and warehousing',
      'Customs clearance and documentation',
      'Freight forwarding and tracking',
    ],
    suitable: 'Useful for buyers who want a single point of contact for the full delivery chain.',
  },
]

export default function Services() {
  return (
    <div className="flex flex-col">
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 id="services-page-title" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Our Services
            </h1>
            <p id="services-page-subtitle" className="mt-4 text-lg text-slate-600">
              Comprehensive sourcing support designed to reduce risk, save time, and improve your bottom line.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={service.slug}
                id={`service-${service.slug}-section`}
                className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 id={`service-${service.slug}-title`} className="mt-4 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h2>
                  <p id={`service-${service.slug}-desc`} className="mt-3 text-base text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-slate-500">
                    <span className="font-medium text-slate-700">Best for:</span> {service.suitable}
                  </p>
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/contact">
                        Request this service <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    data-strk-img-id={`service-${service.slug}-img`}
                    data-strk-img={`[service-${service.slug}-desc] [service-${service.slug}-title] [services-page-subtitle] [services-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-900 px-8 py-12 text-center sm:px-12 sm:py-16">
            <h2 id="services-cta-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to streamline your sourcing?
            </h2>
            <p id="services-cta-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Tell us about your project and we will put together a tailored sourcing plan with transparent pricing.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
