import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  FileText,
  Search,
  ClipboardCheck,
  Eye,
  Truck,
  MessageCircle,
  CheckCircle,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Consultation & Requirements',
    duration: '1-3 Days',
    desc: 'We start with a detailed consultation to understand your product requirements, target price, order volume, quality standards, and timeline. This forms the foundation of your sourcing brief.',
    details: [
      'Product specifications and technical requirements',
      'Target price range and order volume',
      'Quality standards and certification needs',
      'Timeline and delivery expectations',
      'Budget and payment terms preferences',
    ],
    imgId: 'process-step1-a1b2',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification & Vetting',
    duration: '1-2 Weeks',
    desc: 'We search our network of 500+ pre-qualified manufacturers, conduct on-site factory audits, verify certifications, and shortlist the best-matched suppliers for your project.',
    details: [
      'Supplier identification from our verified network',
      'On-site factory audit and capability assessment',
      'Business license and certification verification',
      'Production capacity and financial health check',
      'Shortlist of 3-5 best-matched suppliers with comparison',
    ],
    imgId: 'process-step2-c3d4',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Sampling, Negotiation & Contract',
    duration: '2-4 Weeks',
    desc: 'We manage the sampling process, negotiate pricing and terms on your behalf, and ensure the contract clearly defines all specifications, quality standards, and delivery terms.',
    details: [
      'Sample request and evaluation coordination',
      'Price negotiation with multiple suppliers',
      'Payment terms and production timeline agreement',
      'Quality specification documentation',
      'Contract review ensuring your interests are protected',
    ],
    imgId: 'process-step3-e5f6',
  },
  {
    number: '04',
    icon: Eye,
    title: 'Production Monitoring & QC',
    duration: 'Ongoing',
    desc: 'Our team conducts regular factory visits during production, performs in-line and final QC inspections, and provides weekly status reports with photos and data.',
    details: [
      'Pre-production sample approval',
      'In-line production inspection (DUPRO)',
      'Final random inspection before shipment (FRI)',
      'Weekly progress reports with photos',
      'Issue identification and resolution',
    ],
    imgId: 'process-step4-g7h8',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: '2-6 Weeks',
    desc: 'We coordinate the entire logistics chain — freight forwarding, customs documentation, and delivery to your destination. You receive real-time tracking updates.',
    details: [
      'Freight booking (sea, air, or express)',
      'Customs documentation preparation',
      'Container loading supervision',
      'Cargo insurance arrangement',
      'Delivery tracking until goods arrive at your door',
    ],
    imgId: 'process-step5-i9j0',
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
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-gold font-semibold text-sm tracking-wide uppercase mb-3">
            The Process
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Work With You
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A proven 5-step framework that has delivered results for hundreds of
            global buyers across 20+ industries.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative flex flex-col lg:flex-row gap-8 pb-16 ${
                i < steps.length - 1
                  ? 'border-l-2 border-gray-200 ml-6 lg:ml-0 lg:border-l-0'
                  : ''
              }`}
            >
              {/* Step number & icon */}
              <div className="flex items-start gap-4 lg:w-72 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {step.number}
                  </span>
                </div>
                <div>
                  <div className="w-10 h-10 bg-accent-gold/10 rounded-lg flex items-center justify-center mb-1">
                    <step.icon className="w-5 h-5 text-accent-gold" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {step.title}
                  </h3>
                  <span className="text-xs text-accent-red font-medium">
                    {step.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 lg:pl-8">
                <p className="text-gray-500 leading-relaxed mb-5">
                  {step.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {step.details.map((d) => (
                    <div key={d} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{d}</span>
                    </div>
                  ))}
                </div>
                <div className="aspect-[2/1] rounded-xl overflow-hidden bg-gray-100">
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[process-${step.number}-title]`}
                    data-strk-img-ratio="2x1"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span id={`process-${step.number}-title`} className="hidden">
                  {step.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to start your sourcing project?
            </h2>
            <p className="text-gray-300 text-lg">
              Contact us today and we&apos;ll guide you through the process step by
              step.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-red hover:bg-red-700 text-white font-semibold rounded-lg px-8 py-3.5 transition-colors shadow-lg flex-shrink-0"
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}