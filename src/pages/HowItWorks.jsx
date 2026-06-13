import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Search, Factory, ClipboardCheck, Package, Truck, Shield } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Share Your Requirements',
    description: 'Tell us what product you need. You can provide specifications, samples, sketches, or even just an idea. We accept any level of detail and will help you refine the requirements if needed.',
    timeline: 'Day 1-2',
    details: [
      'Product type, materials, dimensions, and functionality',
      'Target price range and order quantity',
      'Required certifications (CE, FDA, UL, etc.)',
      'Packaging and labeling requirements',
      'Delivery timeline and destination',
    ],
  },
  {
    icon: Search,
    number: '02',
    title: 'Supplier Identification & Verification',
    description: 'Our sourcing team identifies 3-5 qualified suppliers from our verified network. We check their credentials, production capabilities, and track record before recommending them to you.',
    timeline: 'Day 3-10',
    details: [
      'Search our database of 2,000+ verified factories',
      'Verify business licenses and registrations',
      'Assess production capacity and equipment',
      'Check quality certifications and compliance history',
      'Review references from existing clients',
    ],
  },
  {
    icon: Factory,
    number: '03',
    title: 'Factory Audit & Sample Development',
    description: 'We visit the shortlisted factories on your behalf, audit their facilities, and arrange product samples so you can evaluate quality before committing to a bulk order.',
    timeline: 'Day 10-25',
    details: [
      'On-site factory visits and detailed audit reports',
      'Sample production and quality evaluation',
      'Multiple sample comparison if needed',
      'Price negotiation and terms discussion',
      'Final supplier recommendation with full documentation',
    ],
  },
  {
    icon: ClipboardCheck,
    number: '04',
    title: 'Order Placement & Production Monitoring',
    description: 'Once you approve the supplier and samples, we manage the entire production process. You receive regular updates with photos and milestone tracking.',
    timeline: 'Day 25-60',
    details: [
      'Purchase order preparation and contract signing',
      'Production schedule confirmation',
      'Raw material and component verification',
      'In-line quality inspection during production',
      'Weekly progress reports with photos',
    ],
  },
  {
    icon: Shield,
    number: '05',
    title: 'Pre-Shipment Quality Inspection',
    description: 'Before goods leave the factory, we conduct a thorough inspection using AQL (Acceptable Quality Level) standards. You receive a detailed report with photos, measurements, and findings.',
    timeline: 'Day 55-65',
    details: [
      'Random sampling using AQL 2.5 standards',
      'Visual inspection and functionality testing',
      'Measurements and specification verification',
      'Packaging and labeling check',
      'Full inspection report with defect analysis',
    ],
  },
  {
    icon: Package,
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We handle all logistics from factory pickup to your warehouse door. This includes packing, customs documentation, freight booking, and delivery tracking.',
    timeline: 'Day 60-90',
    details: [
      'Professional export packing and container loading',
      'Ocean freight (FCL/LCL) or air cargo booking',
      'Customs documentation and export declaration',
      'Import clearance and duty calculation assistance',
      'Last-mile delivery coordination and tracking',
    ],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/20 text-primary-light text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              How SSourcing China Works
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              A clear, step-by-step process designed to minimize your risk and ensure quality at every stage.
              From your first inquiry to final delivery, we keep you informed and in control.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-neutral-200 hidden md:block" />
                )}

                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 py-8 md:py-10">
                  {/* Step number */}
                  <div className="flex md:flex-col items-center md:items-start gap-3">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 relative z-10">
                      {step.number}
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {step.timeline}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-6 h-6 text-primary" />
                      <h2 className="text-xl md:text-2xl font-bold text-neutral-900">{step.title}</h2>
                    </div>
                    <p className="text-neutral-600 leading-relaxed mb-5">{step.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-500">
                          <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-1" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline summary */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Typical Timeline: 60-90 Days
          </h2>
          <p className="text-neutral-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            From your initial inquiry to goods arriving at your warehouse. Simple products with
            existing molds can be faster. Complex custom products may take longer.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Sourcing & Quotes', time: '3-5 days' },
              { label: 'Samples & Audit', time: '10-15 days' },
              { label: 'Production', time: '30-45 days' },
              { label: 'Shipping', time: '15-35 days' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-lg p-5 border border-neutral-200">
                <div className="text-2xl font-bold text-primary mb-1">{item.time}</div>
                <div className="text-sm text-neutral-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Sourcing Project Today</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Submit your product requirements and receive a detailed quotation within 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-lg text-base transition-all shadow-lg"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
