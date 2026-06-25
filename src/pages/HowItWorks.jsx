import { Link } from 'react-router-dom'
import { getPickedImageUrl } from '@/lib/img.js'
import {
  ArrowRight, MessageSquare, Search, FileText, ClipboardCheck,
  Package, Truck, CheckCircle, Clock
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    time: 'Day 1-2',
    desc: 'Share your product requirements, target price range, order volume, quality standards, and timeline. We analyze your needs and propose a sourcing strategy.',
    details: [
      'Product specification review',
      'Target price and volume analysis',
      'Quality standard definition',
      'Timeline and milestone planning',
      'Sourcing strategy proposal',
    ],
    imgId: 'hiw-step1-consultation',
    titleId: 'hiw-title-step1',
    descId: 'hiw-desc-step1',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification',
    time: 'Day 3-7',
    desc: 'We search our database and network to identify factories that match your requirements. We present a shortlist of 3-5 qualified suppliers with detailed profiles.',
    details: [
      'Supplier database search across 10,000+ factories',
      'Industry network outreach',
      'Supplier capability assessment',
      'Shortlist presentation with profiles',
      'Client review and selection',
    ],
    imgId: 'hiw-step2-supplier',
    titleId: 'hiw-title-step2',
    descId: 'hiw-desc-step2',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Factory Audit & Verification',
    time: 'Day 8-12',
    desc: 'Our local team conducts on-site audits of shortlisted factories. We verify licenses, production capacity, equipment, quality systems, and export history.',
    details: [
      'Physical factory visit and inspection',
      'License and certification check',
      'Production line evaluation',
      'Quality management system audit',
      'Comprehensive audit report with photos',
    ],
    imgId: 'hiw-step3-audit',
    titleId: 'hiw-title-step3',
    descId: 'hiw-desc-step3',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sampling & Negotiation',
    time: 'Week 2-4',
    desc: 'We coordinate sample development with your chosen supplier(s), manage revisions, and negotiate pricing, payment terms, and production timelines on your behalf.',
    details: [
      'Sample request and coordination',
      'Sample evaluation and feedback',
      'Revision management',
      'Price and terms negotiation',
      'Purchase agreement finalization',
    ],
    imgId: 'hiw-step4-sample',
    titleId: 'hiw-title-step4',
    descId: 'hiw-desc-step4',
  },
  {
    number: '05',
    icon: Package,
    title: 'Production & Quality Control',
    time: 'Week 4-12+',
    desc: 'We monitor production with regular factory visits, conduct in-line inspections, and perform pre-shipment quality checks to ensure your products meet specifications.',
    details: [
      'Production start confirmation',
      'In-line quality inspections (DUPRO)',
      'Weekly progress updates with photos',
      'Pre-shipment inspection (AQL standard)',
      'Defect resolution and re-inspection',
    ],
    imgId: 'hiw-step5-production',
    titleId: 'hiw-title-step5',
    descId: 'hiw-desc-step5',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    time: 'Week 12-16+',
    desc: 'We coordinate container loading, freight booking, documentation, and customs clearance. We track your shipment until it reaches your destination.',
    details: [
      'Container loading supervision',
      'Freight booking and rate negotiation',
      'Export documentation preparation',
      'Customs clearance assistance',
      'Delivery tracking to final destination',
    ],
    imgId: 'hiw-step6-shipping',
    titleId: 'hiw-title-step6',
    descId: 'hiw-desc-step6',
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-lg text-white/70 leading-relaxed">
              A proven 6-step process to source products from China with confidence. From initial consultation to final delivery, we manage every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => {
              const stepImg = getPickedImageUrl(step.imgId)
              return (
              <div key={step.number} className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                {/* Timeline indicator */}
                <div className="lg:w-32 flex-shrink-0 flex lg:flex-col items-center lg:items-start gap-4">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Clock className="w-4 h-4" />
                    <span>{step.time}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-text-primary">{step.title}</h2>
                  </div>
                  <p id={step.descId} className="text-text-secondary leading-relaxed mb-6">{step.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((d, di) => (
                      <div key={di} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-sm">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="lg:w-80 flex-shrink-0">
                  <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                    {stepImg && (
                      <img
                        alt={step.title}
                        src={stepImg}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Typical Timeline</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              While every project is unique, here's a general timeline for a typical sourcing project.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
              <div className="space-y-8">
                {[
                  { phase: 'Consultation & Planning', time: '1-2 days', side: 'left' },
                  { phase: 'Supplier Shortlisting', time: '5-7 days', side: 'right' },
                  { phase: 'Factory Audits', time: '3-5 days', side: 'left' },
                  { phase: 'Sample Development', time: '2-4 weeks', side: 'right' },
                  { phase: 'Production', time: '4-8 weeks', side: 'left' },
                  { phase: 'Quality Inspection', time: 'Ongoing', side: 'right' },
                  { phase: 'Shipping & Delivery', time: '2-6 weeks', side: 'left' },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1 hidden md:block" />
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background flex-shrink-0 mx-4 hidden md:block" />
                    <div className="flex-1 bg-white rounded-lg border border-border p-5">
                      <h3 className="font-semibold text-text-primary">{item.phase}</h3>
                      <p className="text-sm text-text-muted">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Tell us about your sourcing needs and we'll create a tailored plan for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-hover transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}