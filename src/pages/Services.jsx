import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Search, ShieldCheck, ClipboardCheck, Factory, Truck, Globe, FileCheck2, Users, Package, HeadphonesIcon } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers in China that match your product requirements, budget, and quality standards.',
    details: ['Market research and supplier identification', 'Initial qualification and capability review', 'Price benchmarking and negotiation support', 'Sample coordination and feedback management'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-ground audits to verify business licenses, production capacity, quality systems, and social compliance.',
    details: ['Business license and legal status check', 'Production line and capacity assessment', 'Quality management system review', 'Social compliance and safety audit'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, in-line, and pre-shipment inspections to catch defects before they reach your customers.',
    details: ['Pre-production material and first-article check', 'During-production inspection for early defect detection', 'Pre-shipment inspection with AQL sampling', 'Container loading supervision'],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress reports to keep your production on schedule and within spec.',
    details: ['Weekly or milestone-based progress reports', 'On-site visits and production line checks', 'Schedule and delay management', 'Issue escalation and resolution support'],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'Consolidation, customs documentation, and freight forwarding to get your goods delivered efficiently.',
    details: ['Incoterms guidance and freight quoting', 'Cargo consolidation and warehousing', 'Customs documentation and clearance support', 'Last-mile delivery tracking'],
  },
  {
    icon: Globe,
    title: 'Sourcing Consultation',
    description: 'Market insights, cost optimization, and negotiation support to improve your sourcing strategy.',
    details: ['Category-specific sourcing strategy', 'Total landed cost analysis', 'Supplier negotiation support', 'Risk assessment and mitigation planning'],
  },
]

export default function Services() {
  return (
    <div>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">Services</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Full-service China sourcing support</h1>
            <p className="mt-4 text-lg text-slate-600">We offer a complete set of sourcing services so you can manage your supply chain from one trusted partner.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-900">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-3">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <ul className="space-y-2 text-sm text-slate-600">
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
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">One partner for your entire sourcing journey</h2>
              <p className="mt-4 text-slate-600">Instead of juggling multiple agents, freight forwarders, and inspectors, you get a single point of contact who manages the full process.</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Dedicated sourcing specialist</div>
                    <div className="text-sm text-slate-600">A single contact who knows your products and priorities.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <FileCheck2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Transparent reporting</div>
                    <div className="text-sm text-slate-600">Regular updates with photos, videos, and inspection reports.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <Package className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">End-to-end coordination</div>
                    <div className="text-sm text-slate-600">From supplier search to final delivery, we manage the details.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-900">Typical service engagement</span>
                  <Badge variant="secondary">Flexible</Badge>
                </div>
                <Separator />
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Project-based sourcing</span>
                    <span className="font-medium text-slate-900">Custom quote</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Monthly retainer</span>
                    <span className="font-medium text-slate-900">Custom quote</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Per-inspection fee</span>
                    <span className="font-medium text-slate-900">Custom quote</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Shipping coordination</span>
                    <span className="font-medium text-slate-900">Custom quote</span>
                  </div>
                </div>
                <Separator />
                <p className="text-xs text-slate-500">Pricing depends on product category, order volume, and service scope. Contact us for a tailored proposal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
