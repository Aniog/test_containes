import { Search, ClipboardCheck, Factory, Package, Ship, FileText, MessageSquare, Shield } from 'lucide-react'
import CTASection from '@/components/home/CTASection'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Requirements',
    description: 'Fill out our inquiry form with details about your product, quantity, budget, and timeline. The more information you provide, the more accurate our proposal will be.',
    details: [
      'Product specifications and drawings',
      'Target price range and MOQ',
      'Quality standards and certifications needed',
      'Preferred shipping method and destination',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    description: 'We research and identify suppliers that match your requirements. Our team leverages our network of 500+ pre-vetted factories and conducts fresh market research as needed.',
    details: [
      'Market analysis and supplier mapping',
      'Capability and capacity assessment',
      'Request for quotations (RFQ) from shortlisted suppliers',
      'Comparative analysis of quotes and terms',
    ],
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Verification',
    description: 'We visit shortlisted factories in person to verify their credentials, inspect facilities, and assess production capabilities. You receive a detailed audit report for each factory.',
    details: [
      'On-site physical audit',
      'Business license and certification verification',
      'Production line and equipment inspection',
      'Quality control system evaluation',
      'Audit report with photos and video',
    ],
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sample & Quotation Review',
    description: 'We coordinate sample production and review all quotes with you. Once samples are approved and terms are finalized, we help you negotiate the best commercial terms.',
    details: [
      'Sample production coordination',
      'Sample evaluation and feedback',
      'Price and payment term negotiation',
      'Contract review and finalization',
    ],
  },
  {
    number: '05',
    icon: Package,
    title: 'Production & Quality Control',
    description: 'Once the order is placed, we monitor production closely, conduct inspections at key milestones, and keep you updated with regular progress reports.',
    details: [
      'Production schedule confirmation',
      'Raw material inspection',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'Weekly progress reports with photos',
    ],
  },
  {
    number: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We handle all logistics arrangements including packaging, documentation, customs clearance, and shipping. Your goods are tracked from factory to your doorstep.',
    details: [
      'Export documentation and customs clearance',
      'Freight booking (sea, air, or express)',
      'Cargo insurance arrangement',
      'Real-time tracking updates',
      'Delivery confirmation and follow-up',
    ],
  },
]

const whyChoose = [
  {
    icon: Shield,
    title: 'On-the-Ground Presence',
    desc: 'Our team is based in China, giving us direct access to factories and real-time market intelligence.',
  },
  {
    icon: MessageSquare,
    title: 'English Communication',
    desc: 'Dedicated English-speaking account managers ensure clear, consistent communication throughout your project.',
  },
  {
    icon: Search,
    title: 'Risk Mitigation',
    desc: 'We identify and address potential issues before they become problems, protecting your investment.',
  },
  {
    icon: Ship,
    title: 'Full Service Support',
    desc: 'From first inquiry to final delivery, we manage every aspect of the sourcing process.',
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            A straightforward, transparent process designed to take the complexity out of sourcing from China.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-20 bottom-0 w-0.5 bg-brand-200" />
                )}
                <div className="grid lg:grid-cols-5 gap-8">
                  {/* Step indicator */}
                  <div className="lg:col-span-1">
                    <div className="flex lg:flex-col items-center lg:items-start gap-4">
                      <div className="w-16 h-16 bg-brand-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-brand-500">Step {step.number}</span>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="lg:col-span-4">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-3">{step.title}</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">{step.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-neutral-600">
                          <span className="w-1.5 h-1.5 bg-brand-400 rounded-full flex-shrink-0 mt-2" />
                          {d}
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

      {/* Why choose us */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Why Work With Us</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We combine local expertise with international service standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-neutral-100 text-center">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}