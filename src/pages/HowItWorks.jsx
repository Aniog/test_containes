import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Search, Building2, ClipboardCheck, Package, Ship, ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import InquiryForm from '@/components/home/InquiryForm'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what you need — product details, specifications, target quantity, budget range, and timeline. The more information you provide, the more accurate our sourcing will be.',
    details: [
      'Product description and specifications',
      'Target quantity and budget range',
      'Quality standards and certifications needed',
      'Preferred timeline and delivery date',
    ],
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Research & Shortlisting',
    description: 'Our team researches potential suppliers across multiple channels. We evaluate each supplier based on capability, capacity, quality systems, and reliability before presenting you with a shortlist.',
    details: [
      'Multi-channel supplier identification',
      'Capability and capacity assessment',
      'Quotation collection and comparison',
      'Shortlist presentation with analysis',
    ],
  },
  {
    icon: Building2,
    step: '03',
    title: 'Factory Verification & Audit',
    description: 'Before you commit, we visit the factory to verify their credentials, production capabilities, and quality management. You receive a detailed audit report with photos and our recommendation.',
    details: [
      'Business license and export credential verification',
      'On-site factory tour and assessment',
      'Production line and equipment evaluation',
      'Quality management system review',
    ],
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample Evaluation & Order Placement',
    description: 'We coordinate sample production, evaluate samples against your specifications, and help you negotiate terms. Once approved, we manage the order placement and production scheduling.',
    details: [
      'Sample request and coordination',
      'Sample evaluation against specifications',
      'Price and term negotiation',
      'Order placement and contract review',
    ],
  },
  {
    icon: Package,
    step: '05',
    title: 'Production Monitoring & Quality Control',
    description: 'Throughout production, we monitor progress, conduct inspections, and keep you informed. Any issues are identified and resolved before they impact your order.',
    details: [
      'Production schedule tracking',
      'Regular progress updates with photos',
      'During-production quality checks',
      'Pre-shipment inspection (PSI)',
    ],
  },
  {
    icon: Ship,
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics — from factory pickup to port loading, documentation, and freight forwarding. Your goods arrive at your destination port ready for customs clearance.',
    details: [
      'Freight forwarding coordination',
      'Export documentation preparation',
      'Container loading supervision',
      'Shipment tracking and updates',
    ],
  },
]

export default function HowItWorksPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Our Process</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2 mb-4">
              How We Source for You
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A clear, transparent process that keeps you informed and in control at every stage — from initial request to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, index) => (
        <section key={step.step} className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-slate-100">{step.step}</span>
                </div>
                <h2 className="heading-2 mb-4">{step.title}</h2>
                <p className="body-text mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div
                  className="aspect-video rounded-lg bg-slate-100"
                  data-strk-bg-id={`process-step-${step.step}`}
                  data-strk-bg={`[${step.title}-heading] [process-step-${step.step}-desc]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Timeline summary */}
      <section className="section-padding bg-blue-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Typical Sourcing Timeline
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: 'Week 1-2', task: 'Supplier Research' },
              { step: 'Week 2-3', task: 'Factory Verification' },
              { step: 'Week 3-5', task: 'Sample Evaluation' },
              { step: 'Week 5-6', task: 'Order Placement' },
              { step: 'Week 6-10', task: 'Production' },
              { step: 'Week 10-14', task: 'Shipping' },
            ].map((item) => (
              <div key={item.step} className="bg-blue-700/50 rounded-lg p-4 text-center">
                <div className="text-amber-400 font-semibold text-sm mb-1">{item.step}</div>
                <div className="text-white text-sm">{item.task}</div>
              </div>
            ))}
          </div>
          <p className="text-blue-200 text-sm text-center mt-6">
            Timelines vary based on product complexity, order quantity, and supplier availability.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Start Sourcing?</h2>
          <p className="body-text max-w-2xl mx-auto mb-8">
            Submit your requirements and we will begin researching suppliers within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <InquiryForm />
    </div>
  )
}
