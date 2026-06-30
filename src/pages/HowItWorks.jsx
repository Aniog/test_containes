import { Link } from 'react-router-dom'
import { Search, FileCheck, Factory, ClipboardCheck, Ship, PackageCheck, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery & Requirements Gathering',
    desc: 'We start by understanding your business, product requirements, quality expectations, budget range, and target markets. This helps us create a detailed sourcing brief.',
    details: [
      'Consultation call to discuss your needs',
      'Define product specifications and quality standards',
      'Establish budget parameters and target pricing',
      'Identify any certifications or compliance requirements',
    ],
  },
  {
    icon: FileCheck,
    step: '02',
    title: 'Supplier Shortlisting',
    desc: 'We search our database and networks to find qualified suppliers. Each candidate is pre-screened before being presented to you.',
    details: [
      'Search across B2B platforms and industry contacts',
      'Review business licenses and certifications',
      'Assess production capabilities and product range',
      'Present a curated shortlist of 3-5 qualified suppliers',
    ],
  },
  {
    icon: Factory,
    step: '03',
    title: 'Factory Verification',
    desc: 'Our team visits shortlisted factories in person to verify their capabilities and reliability.',
    details: [
      'On-site visit and production line inspection',
      'Verification of equipment and technology',
      'Assessment of quality control processes',
      'Detailed audit report with photographs',
    ],
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sampling & Negotiation',
    desc: 'We coordinate sample requests and help negotiate the best terms for your order.',
    details: [
      'Request samples from selected suppliers',
      'Evaluate sample quality and specifications',
      'Negotiate pricing, payment terms, and MOQs',
      'Provide side-by-side comparison of offers',
    ],
  },
  {
    icon: Ship,
    step: '05',
    title: 'Production & Quality Control',
    desc: 'Once the order is placed, we monitor production and conduct inspections to ensure everything stays on track.',
    details: [
      'Production schedule monitoring and progress updates',
      'During-production inspection (DPI) at key milestones',
      'Pre-shipment inspection (PSI) before dispatch',
      'Photo and video documentation throughout production',
    ],
  },
  {
    icon: PackageCheck,
    step: '06',
    title: 'Shipping & Final Delivery',
    desc: 'We oversee logistics to get your products delivered safely and on time.',
    details: [
      'Coordinate sea freight, air freight, or express shipping',
      'Prepare and verify all shipping documentation',
      'Handle customs clearance procedures',
      'Track shipment until final delivery confirmation',
    ],
  },
]

export default function HowItWorks() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process designed to minimize risk and deliver results. From your initial inquiry to final delivery, we guide you through every stage.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-6 top-16 bottom-0 w-px bg-gray-200" />
                )}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
                      Step {step.step}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 mt-1 mb-3">{step.title}</h2>
                    <p className="text-gray-600 mb-4">{step.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 mt-2" />
                          {detail}
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Sourcing Journey</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and discover how we can help you source from China with confidence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}