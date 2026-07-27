import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  FileText,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import InquiryForm from '@/components/InquiryForm'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    summary: 'Find manufacturers that match your product, price, and volume requirements.',
    details: [
      'Market research across Alibaba, 1688, trade shows, and our private supplier network',
      'Initial supplier screening and capability assessment',
      'Request for quotation (RFQ) management and quote comparison',
      'Sample coordination and evaluation support',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    summary: 'Confirm that a factory is legitimate, capable, and compliant before you place an order.',
    details: [
      'Business license and registration verification',
      'On-site factory audit including production lines and equipment',
      'Social compliance and working conditions review',
      'Detailed audit report with photos and recommendations',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    summary: 'Protect product quality with independent inspections at critical stages.',
    details: [
      'Pre-production material and component checks',
      'During-production (DUPRO) inspections',
      'Pre-shipment inspection (PSI) against AQL standards',
      'Container loading supervision (CLS)',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    summary: 'Stay informed throughout manufacturing so delays and issues are caught early.',
    details: [
      'Production schedule tracking and milestone reporting',
      'Material arrival and in-process quality checks',
      'Supplier communication and issue escalation',
      'Weekly status updates with photos and reports',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    summary: 'Coordinate freight, documents, and customs to get goods to your door.',
    details: [
      'Freight forwarder comparison and booking support',
      'Export documentation and customs clearance assistance',
      'Container consolidation for multiple suppliers',
      'Delivery tracking to warehouse or fulfillment center',
    ],
  },
  {
    icon: FileText,
    title: 'Contract & Negotiation Support',
    summary: 'Reduce risk with clear terms, payment safeguards, and protect your IP.',
    details: [
      'Purchase order and contract term review',
      'Payment term negotiation and escrow guidance',
      'Trademark and NDA support with legal partners',
      'Dispute mediation and resolution assistance',
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Sourcing Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Full-service support for every stage of buying from China.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="border-slate-100 transition hover:shadow-md">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Not Sure Which Service You Need?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Tell us about your project and we will recommend the right support plan.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-white">
            <Link to="/contact">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}
