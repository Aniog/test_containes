import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, FileCheck, Ship, MessageSquare, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import PageHeader from '@/components/shared/PageHeader'
import SectionLabel from '@/components/shared/SectionLabel'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify manufacturers that match your specifications, price expectations, and order volume. Our research includes supplier background checks, product range review, and export readiness assessment.',
    imgId: 'services-page-supplier-sourcing',
    titleId: 'services-page-title-supplier-sourcing',
    descId: 'services-page-desc-supplier-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site audits covering business licenses, production capacity, quality systems, equipment, certifications, and social compliance. You receive a detailed report with photos and a clear recommendation.',
    imgId: 'services-page-factory-verification',
    titleId: 'services-page-title-factory-verification',
    descId: 'services-page-desc-factory-verification',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container-loading inspections. We check quantity, workmanship, packaging, labeling, and functionality against your approved sample or specification.',
    imgId: 'services-page-quality-inspection',
    titleId: 'services-page-title-quality-inspection',
    descId: 'services-page-desc-quality-inspection',
  },
  {
    icon: FileCheck,
    title: 'Production Follow-up',
    description: 'We monitor material preparation, sample approval, production milestones, and packing. Weekly reports keep you informed of progress and flag delays before they affect delivery.',
    imgId: 'services-page-production-followup',
    titleId: 'services-page-title-production-followup',
    descId: 'services-page-desc-production-followup',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We coordinate with freight forwarders, compare sea and air options, prepare export documents, arrange customs paperwork support, and track shipments through to delivery.',
    imgId: 'services-page-shipping-coordination',
    titleId: 'services-page-title-shipping-coordination',
    descId: 'services-page-desc-shipping-coordination',
  },
  {
    icon: MessageSquare,
    title: 'Negotiation Support',
    description: 'We negotiate price, payment terms, minimum order quantities, lead time, and contract clauses directly with suppliers in Chinese, then summarize the terms clearly for you.',
    imgId: 'services-page-negotiation-support',
    titleId: 'services-page-title-negotiation-support',
    descId: 'services-page-desc-negotiation-support',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader
        title="Our Services"
        subtitle="Practical sourcing support at every stage of your supply chain."
        backgroundId="services-page-header-bg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <SectionLabel>End-to-End Support</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Services Designed for Overseas Buyers
            </h2>
          </div>

          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="overflow-hidden border-slate-200 shadow-sm">
                <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`aspect-[4/3] md:aspect-auto overflow-hidden bg-slate-100 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className={`p-6 md:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <CardHeader className="p-0 pb-4">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <CardTitle id={service.titleId} className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <CardDescription id={service.descId} className="text-base leading-relaxed text-slate-600">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-slate-900 p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Not sure which service you need?</h3>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Tell us about your product and goals. We will recommend the right mix of sourcing, verification, inspection, and logistics support.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/contact?quote=true" className="no-underline hover:no-underline">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
