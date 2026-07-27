import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Globe2, Factory, ShieldCheck, Ship, ClipboardCheck, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify manufacturers and suppliers that match your product specs, price targets, and minimum order requirements.',
    details: ['Product category mapping', 'Supplier shortlist with profiles', 'Price and capability comparison', 'Communication support'],
  },
  {
    title: 'Factory Verification',
    description: 'On-site audits to confirm legitimacy, capacity, quality systems, and compliance before you commit.',
    details: ['Business license verification', 'Factory floor audit', 'Production capacity review', 'Compliance and certification checks'],
  },
  {
    title: 'Quality Inspection',
    description: 'Structured inspections at key production stages with documented findings and actionable reports.',
    details: ['Pre-production checks', 'In-line monitoring', 'Pre-shipment inspection', 'AQL-based sampling support'],
  },
  {
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support from factory to your door, including consolidation and customs assistance.',
    details: ['Freight forwarding', 'Consolidation options', 'Customs documentation support', 'Door-to-door delivery options'],
  },
]

const Services = () => {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge className="mb-3">Services</Badge>
          <h1 className="text-4xl font-bold text-slate-900">End-to-end sourcing support</h1>
          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            From finding suppliers to delivering goods, we provide practical support at every stage of the sourcing process.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-white">
                      {service.title === 'Supplier Sourcing' && <Globe2 className="h-5 w-5" />}
                      {service.title === 'Factory Verification' && <Factory className="h-5 w-5" />}
                      {service.title === 'Quality Inspection' && <ShieldCheck className="h-5 w-5" />}
                      {service.title === 'Shipping Coordination' && <Ship className="h-5 w-5" />}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {service.details.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ClipboardCheck className="mt-0.5 h-4 w-4 text-slate-900" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">How we work with buyers</h2>
              <p className="mt-3 text-slate-600">
                Every engagement starts with your requirements. We then align sourcing, verification, inspection, and shipping into one practical workflow.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-slate-900" /> Clear requirements and product specs</li>
                <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-slate-900" /> Supplier shortlist and factory checks</li>
                <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-slate-900" /> Sample review and inspection planning</li>
                <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-slate-900" /> Production follow-up and final QC</li>
                <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-slate-900" /> Shipping coordination and delivery</li>
              </ul>
              <div className="mt-8">
                <Link to="/contact">
                  <Button>Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>What you get</CardTitle>
                  <CardDescription>A practical set of deliverables designed to reduce risk.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li>Supplier profiles with verified contact details</li>
                    <li>Factory audit reports and photos</li>
                    <li>Inspection reports with pass/fail findings</li>
                    <li>Shipping options and timeline estimates</li>
                    <li>Regular status updates during production</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
