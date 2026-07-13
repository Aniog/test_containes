import { useEffect, useRef } from 'react'
import { Search, Factory, ClipboardCheck, FileCheck, Ship, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import SectionLabel from '@/components/shared/SectionLabel'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist manufacturers that match your product, price target, and capacity requirements.',
    imgId: 'service-supplier-sourcing',
    titleId: 'service-title-supplier-sourcing',
    descId: 'service-desc-supplier-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site audits of business licenses, production lines, equipment, certifications, and export experience.',
    imgId: 'service-factory-verification',
    titleId: 'service-title-factory-verification',
    descId: 'service-desc-factory-verification',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container-loading inspections to reduce defect risk before goods leave China.',
    imgId: 'service-quality-inspection',
    titleId: 'service-title-quality-inspection',
    descId: 'service-desc-quality-inspection',
  },
  {
    icon: FileCheck,
    title: 'Production Follow-up',
    description: 'Regular updates on material preparation, sample approval, production milestones, and delivery schedules.',
    imgId: 'service-production-followup',
    titleId: 'service-title-production-followup',
    descId: 'service-desc-production-followup',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We coordinate with freight forwarders, prepare export documents, and track shipments until delivery.',
    imgId: 'service-shipping-coordination',
    titleId: 'service-title-shipping-coordination',
    descId: 'service-desc-shipping-coordination',
  },
  {
    icon: MessageSquare,
    title: 'Negotiation Support',
    description: 'We handle price, payment terms, and contract terms with suppliers in their local language and business context.',
    imgId: 'service-negotiation-support',
    titleId: 'service-title-negotiation-support',
    descId: 'service-desc-negotiation-support',
  },
]

export default function ServicesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="services" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <SectionLabel>What We Do</SectionLabel>
          <h2 id="services-title" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            End-to-End Sourcing Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From the first supplier search to final delivery, we manage the details so you can focus on growing your business.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group overflow-hidden border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[${service.descId}] [${service.titleId}] [services-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <service.icon className="h-5 w-5" />
                </div>
                <CardTitle id={service.titleId} className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription id={service.descId} className="text-sm leading-relaxed text-slate-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 no-underline hover:no-underline"
          >
            View all services
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
