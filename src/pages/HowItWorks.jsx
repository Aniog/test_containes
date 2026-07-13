import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Search, Factory, ClipboardCheck, Package, Truck, CheckCircle, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Sourcing Request',
    desc: 'Fill out our inquiry form with your product requirements — specifications, target price, quantity, and timeline. The more detail you provide, the faster we can get started.',
    details: [
      'Product name and description',
      'Target unit price (FOB or CIF)',
      'Minimum order quantity (MOQ)',
      'Required certifications (CE, FCC, etc.)',
      'Delivery deadline',
    ],
    titleId: 'step-01-title',
    descId: 'step-01-desc',
    imgId: 'step-01-img-a1b2c3',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches suppliers across trade databases, industry contacts, and manufacturing hubs. We shortlist 3–5 candidates that best match your requirements and send you a comparative report.',
    details: [
      'Database and trade show research',
      'Initial supplier screening calls',
      'Comparative supplier report',
      'Recommendation with rationale',
    ],
    titleId: 'step-02-title',
    descId: 'step-02-desc',
    imgId: 'step-02-img-d4e5f6',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'For shortlisted suppliers, we conduct on-site factory audits to verify legitimacy, production capacity, and compliance. You receive a detailed audit report with photos before committing to any order.',
    details: [
      'Business license verification',
      'On-site visit and photography',
      'Production capacity assessment',
      'Compliance and safety check',
    ],
    titleId: 'step-03-title',
    descId: 'step-03-desc',
    imgId: 'step-03-img-g7h8i9',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sample Review & Price Negotiation',
    desc: 'We request samples from approved suppliers, review them against your specifications, and negotiate pricing, payment terms, and lead times on your behalf.',
    details: [
      'Sample request and coordination',
      'Quality review against specs',
      'Price and MOQ negotiation',
      'Contract and payment term review',
    ],
    titleId: 'step-04-title',
    descId: 'step-04-desc',
    imgId: 'step-04-img-j1k2l3',
  },
  {
    number: '05',
    icon: Package,
    title: 'Production Monitoring',
    desc: 'Once you place your order, we monitor production milestones, verify raw materials, and conduct in-line inspections. You receive regular updates so there are no surprises.',
    details: [
      'Production schedule tracking',
      'Raw material verification',
      'In-line quality checks',
      'Weekly progress reports',
    ],
    titleId: 'step-05-title',
    descId: 'step-05-desc',
    imgId: 'step-05-img-m4n5o6',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Pre-Shipment Inspection & Delivery',
    desc: 'Before goods leave the factory, our inspectors conduct a final pre-shipment inspection. Once approved, we coordinate freight booking, customs documentation, and delivery to your destination.',
    details: [
      'Pre-shipment inspection (AQL standard)',
      'Inspection report within 24 hours',
      'Freight booking and documentation',
      'Shipment tracking until delivery',
    ],
    titleId: 'step-06-title',
    descId: 'step-06-desc',
    imgId: 'step-06-img-p7q8r9',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-navy-900 py-20">
        <div className="container-xl text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            How It Works
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process from your first inquiry to goods arriving at your warehouse. No guesswork, no surprises.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="flex flex-col gap-20">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0
              return (
                <div key={step.number} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl font-extrabold text-navy-800/10">{step.number}</span>
                      <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h2 id={step.titleId} className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h2>
                    <p id={step.descId} className="text-gray-500 text-lg leading-relaxed mb-6">{step.desc}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-navy-800 flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden aspect-[4/3] shadow-lg ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={step.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQAABjE+ibYAAAAASUVORK5CYII="
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline summary */}
      <section className="py-20 bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Typical Project Timeline</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Most sourcing projects follow this general timeline. Complex products or certifications may require additional time.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { phase: 'Week 1–2', label: 'Supplier Research & Shortlisting' },
              { phase: 'Week 2–3', label: 'Factory Audit & Sample Request' },
              { phase: 'Week 3–5', label: 'Sample Review & Order Placement' },
              { phase: 'Week 6+', label: 'Production, Inspection & Shipping' },
            ].map((t) => (
              <div key={t.phase} className="card text-center">
                <div className="text-navy-800 font-bold text-sm mb-2">{t.phase}</div>
                <div className="text-gray-600 text-sm">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Sourcing Project Today</h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Submit your requirements and we will send you a free sourcing plan within 24 hours.
          </p>
          <Link to="/contact" className="inline-block bg-white text-brand-red hover:bg-gray-100 font-bold px-10 py-4 rounded-lg text-lg transition-colors">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
