import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  FileText,
  Truck,
  Shield,
  Clock,
  Users,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    number: '01',
    title: 'Submit Your Request',
    description:
      'Tell us about your product requirements, including specifications, quantity, target price, and any supplier preferences.',
    details: [
      'Product specifications and technical drawings',
      'Target price range and budget',
      'Required certifications (CE, FCC, etc.)',
      'Preferred supplier location',
      'Timeline expectations',
    ],
    icon: FileText,
  },
  {
    number: '02',
    title: 'Supplier Matching',
    description:
      'We identify and verify suitable suppliers from our extensive network, presenting you with options that match your criteria.',
    details: [
      'Supplier identification from verified database',
      'Capability and capacity assessment',
      'Price and MOQ comparison',
      'Background and reference checks',
      'Shortlist presentation within 1-2 weeks',
    ],
    icon: Users,
  },
  {
    number: '03',
    title: 'Negotiation & Sampling',
    description:
      'We negotiate favorable terms on your behalf and arrange product samples for your approval before production begins.',
    details: [
      'Price and payment term negotiation',
      'MOQ (Minimum Order Quantity) flexibility',
      'Custom packaging and labeling',
      'Sample coordination and shipping',
      'Sample approval workflow',
    ],
    icon: MessageSquare,
  },
  {
    number: '04',
    title: 'Production & Quality Control',
    description:
      'We monitor production progress and conduct quality inspections at key stages to ensure everything meets your standards.',
    details: [
      'Production schedule monitoring',
      'During Production Inspection (DPI)',
      'Pre-shipment Inspection (PSI)',
      'Defect identification and resolution',
      'Detailed inspection reports with photos',
    ],
    icon: Shield,
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    description:
      'We coordinate all logistics, from factory pickup to final delivery, handling documentation and customs clearance.',
    details: [
      'Freight forwarding coordination',
      'Customs clearance handling',
      'Documentation management',
      'Cargo tracking and updates',
      'Door-to-door delivery option',
    ],
    icon: Truck,
  },
]

const timeline = [
  { phase: 'Initial Consultation', duration: '1-2 days' },
  { phase: 'Supplier Matching', duration: '1-2 weeks' },
  { phase: 'Sampling Phase', duration: '2-4 weeks' },
  { phase: 'Production', duration: '2-8 weeks' },
  { phase: 'Inspection & Shipping', duration: '1-3 weeks' },
  { phase: 'Total Timeline', duration: '6-17 weeks' },
]

const communication = [
  {
    icon: MessageSquare,
    title: 'Dedicated Account Manager',
    description:
      'Your personal point of contact who understands your project and keeps you informed.',
  },
  {
    icon: FileText,
    title: 'Detailed Reporting',
    description:
      'Regular updates with photos, videos, and comprehensive reports at every stage.',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description:
      'We respond to all inquiries within 24 hours during business days.',
  },
  {
    icon: CheckCircle,
    title: 'Transparent Process',
    description:
      'Full visibility into every step of your sourcing project with no surprises.',
  },
]

export default function HowItWorksPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-plus text-4xl sm:text-5xl font-bold text-white mb-6">
              How It Works
            </h1>
            <p className="font-inter text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Our proven 5-step process ensures a smooth, transparent, and
              successful sourcing experience from start to finish.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Number & Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#E67E22] rounded-xl flex items-center justify-center">
                      <span className="font-plus text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-[#1E3A5F]" />
                    </div>
                  </div>
                  <h2 className="font-plus text-2xl sm:text-3xl font-bold text-[#1E293B] mb-4">
                    {step.title}
                  </h2>
                  <p className="font-inter text-lg text-[#64748B] mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 font-inter text-[#64748B]"
                      >
                        <CheckCircle className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#F8FAFC] border border-[#E2E8F0]">
                    <img
                      data-strk-img-id={`process-step-${index}-8f2a9c`}
                      data-strk-img={`[process-title-${index}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p
                        id={`process-title-${index}`}
                        className="font-plus text-white font-semibold text-lg"
                      >
                        Step {step.number}: {step.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-plus text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Typical Project Timeline
            </h2>
            <p className="font-inter text-lg text-[#64748B]">
              Expected duration for each phase of your sourcing project
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
            <div className="grid md:grid-cols-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 text-center ${
                    index < timeline.length - 1
                      ? 'md:border-r border-[#E2E8F0]'
                      : ''
                  }`}
                >
                  <div className="font-plus text-sm font-semibold text-[#1E3A5F] mb-2">
                    {item.phase}
                  </div>
                  <div className="font-inter text-lg font-bold text-[#E67E22]">
                    {item.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center font-inter text-sm text-[#64748B] mt-4">
            * Timeline varies based on product complexity, supplier availability,
            and sample iterations
          </p>
        </div>
      </section>

      {/* Communication */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-plus text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Communication & Support
            </h2>
            <p className="font-inter text-lg text-[#64748B] max-w-2xl mx-auto">
              We keep you informed and involved throughout the entire process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communication.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#F8FAFC] rounded-xl"
              >
                <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#1E3A5F]" />
                </div>
                <h3 className="font-plus font-semibold text-[#1E293B] mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-[#64748B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#2D5A87]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-plus text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="font-inter text-lg text-white/80 mb-8">
            Get a free consultation and quote tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] text-white font-inter font-semibold text-lg rounded-lg hover:bg-[#D35400] transition-all hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}