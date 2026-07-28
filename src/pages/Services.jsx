import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Search, ShieldCheck, ClipboardList, Ship, Factory, Truck, FileCheck, Globe } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist manufacturers that match your product specs, quality requirements, and budget.',
    details: ['Supplier research and qualification', 'Capability and capacity checks', 'Price benchmarking and negotiation support', 'Sample coordination'],
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'On-site audits to confirm factory legitimacy, certifications, and operational stability.',
    details: ['Business registration verification', 'Factory visit and production line review', 'Certification and compliance checks', 'Risk assessment report'],
    icon: ShieldCheck,
  },
  {
    title: 'Quality Inspection',
    description: 'Independent inspections at key production stages to reduce defects and protect your brand.',
    details: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection', 'Container loading supervision'],
    icon: ClipboardList,
  },
  {
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support from factory to your warehouse or distribution center.',
    details: ['Freight forwarding and consolidation', 'Customs documentation support', 'Insurance and tracking', 'Last-mile coordination'],
    icon: Ship,
  },
  {
    title: 'Product Development Support',
    description: 'Guidance on materials, tolerances, packaging, and manufacturability to improve product readiness.',
    details: ['Design for manufacturing review', 'Material and finish guidance', 'Packaging optimization', 'Prototype feedback'],
    icon: Factory,
  },
  {
    title: 'Supplier Management',
    description: 'Ongoing relationship management to help maintain consistent quality and delivery performance.',
    details: ['Performance tracking', 'Issue escalation and resolution', 'Repeat order coordination', 'Continuous improvement support'],
    icon: Globe,
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
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="secondary" className="mb-4">Services</Badge>
          <h1 className="text-4xl font-bold text-slate-900">End-to-end sourcing services</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            From supplier discovery to final delivery, we provide practical support at every stage of your China sourcing journey.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-white">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {service.details.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Built for clarity, not complexity</h2>
              <p className="mt-3 text-slate-600">
                Many buyers struggle with fragmented suppliers, unclear costs, and inconsistent quality. Our service model is designed to reduce those risks with structured processes and clear reporting.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <FileCheck className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Documented process</div>
                    <div className="text-slate-600">Every stage includes reports, photos, and actionable notes.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Logistics visibility</div>
                    <div className="text-slate-600">Tracking and milestone updates from factory to destination.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Risk reduction</div>
                    <div className="text-slate-600">Factory checks and inspections help prevent costly mistakes.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-slate-100 overflow-hidden">
                <img
                  alt="Sourcing services and factory operations"
                  data-strk-img-id="services-hero-img-1a2b3c"
                  data-strk-img="[services-hero-subtitle] [services-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <p id="services-hero-title" className="sr-only">Sourcing services and factory operations</p>
              <p id="services-hero-subtitle" className="sr-only">Professional sourcing services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Industries we support</h2>
          <p className="mt-3 text-slate-600">Common categories, with flexibility for specialized products.</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Consumer Electronics', 'Home & Kitchen', 'Textiles & Apparel', 'Hardware & Tools', 'Packaging', 'Garden & Outdoor', 'Toys & Gifts', 'Industrial Components'].map((industry) => (
              <div key={industry} className="rounded-xl border border-slate-200 bg-white p-4 text-center text-sm font-medium text-slate-700">
                {industry}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild>
              <Link to="/contact">Discuss your product category</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
