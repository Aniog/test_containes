import { useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, Package, ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Search',
    description: 'We identify and shortlist suppliers that match your product specifications, quality standards, and target pricing. Our network covers 15+ provinces across China.',
    benefits: ['3-5 supplier shortlists within 72 hours', 'Pre-negotiated pricing benchmarks', 'Supplier capability assessment reports'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site audits to confirm factory legitimacy, production capacity, certifications, and working conditions. We visit the factory so you do not have to.',
    benefits: ['Business license & certification verification', 'Production line & capacity assessment', 'Detailed photo & video audit reports'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and pre-production inspections with detailed reports and photo evidence for every batch.',
    benefits: ['AQL-based sampling inspections', 'Real-time photo & video reporting', 'Defect classification & remediation tracking'],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Weekly progress reports, sample approvals, and milestone tracking to keep your orders on schedule and within spec.',
    benefits: ['Weekly production status updates', 'Sample approval workflows', 'Milestone-based payment releases'],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'Freight forwarding, customs documentation, and logistics management from factory to your warehouse door.',
    benefits: ['FOB, CIF, DDP quote comparisons', 'Customs documentation handling', 'Multi-modal freight optimization'],
  },
  {
    icon: Package,
    title: 'Custom Packaging & Branding',
    description: 'Design and sourcing of branded packaging, labeling, and inserts to strengthen your brand presence in the market.',
    benefits: ['Packaging design & prototyping', 'Label compliance review', 'Branded insert & manual sourcing'],
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      return ImageHelper.loadImages(strkImgConfig, ref.current)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Sourcing Services | Supplier Verification, QC &amp; Shipping | SSourcing China</title>
        <meta name="description" content="End-to-end China sourcing services: supplier search, factory verification, quality inspection, production follow-up, and shipping coordination." />
      </Helmet>

      {/* Hero */}
      <section className="w-full bg-navy-900 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Our Sourcing Services</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            From supplier identification to doorstep delivery, we handle every step of the sourcing process so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section ref={ref} className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="space-y-16">
            {services.map((service, idx) => {
              const Icon = service.icon
              const isEven = idx % 2 === 0
              return (
                <div key={service.title} className={`grid gap-8 lg:grid-cols-2 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
                      <img
                        data-strk-img-id={`svc-detail-${idx}`}
                        data-strk-img={`[svc-title-${idx}]`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <h2 id={`svc-title-${idx}`} className="text-2xl font-bold text-slate-900">{service.title}</h2>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Not sure which services you need?</h2>
          <p className="text-slate-600 mb-6">Book a free consultation and we will recommend the right approach for your product and budget.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
