import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, FileText, ClipboardCheck, Ship, MessageSquare, DollarSign, Calendar, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: '1. Initial Consultation',
    subtitle: 'Understanding Your Needs',
    description: 'We start with a detailed discussion about your product requirements, quality standards, target budget, and timeline. This helps us create a precise sourcing brief that guides every subsequent step.',
    details: [
      'Product specifications and requirements',
      'Target price range and MOQ expectations',
      'Quality standards and certification needs',
      'Timeline and delivery expectations',
    ],
  },
  {
    icon: Search,
    title: '2. Supplier Research',
    subtitle: 'Finding the Right Partners',
    description: 'Our team taps into our network of vetted suppliers and conducts targeted searches to identify manufacturers that match your criteria. We typically present 3-5 qualified candidates per project.',
    details: [
      'Database search and industry connections',
      'Capability and capacity assessment',
      'Request for quotations (RFQs)',
      'Initial price and terms comparison',
    ],
  },
  {
    icon: FileText,
    title: '3. Evaluation & Sampling',
    subtitle: 'Verifying Quality',
    description: 'We evaluate shortlisted suppliers through document verification, reference checks, and sample requests. Shortlisted factories undergo on-site audits to confirm their capabilities.',
    details: [
      'Factory documentation review',
      'On-site audit and assessment',
      'Sample collection and evaluation',
      'Negotiation of final terms and pricing',
    ],
  },
  {
    icon: ClipboardCheck,
    title: '4. Production Management',
    subtitle: 'Monitoring Your Order',
    description: 'Once the order is placed, we monitor production closely, conduct quality inspections at key milestones, and provide regular progress reports so you always know where your order stands.',
    details: [
      'Raw material verification',
      'During-production inspections',
      'Pre-shipment quality checks',
      'Weekly progress reporting',
    ],
  },
  {
    icon: Ship,
    title: '5. Shipping & Delivery',
    subtitle: 'Getting Products to You',
    description: 'We coordinate all logistics including freight booking, customs documentation, and final delivery. We handle the complexity so your products arrive on time and in good condition.',
    details: [
      'Freight booking and consolidation',
      'Customs documentation and clearance',
      'Cargo tracking and updates',
      'Door-to-door delivery options',
    ],
  },
  {
    icon: Calendar,
    title: '6. Ongoing Support',
    subtitle: 'Building Long-Term Partnerships',
    description: 'After your first order, we continue to support repeat orders, quality monitoring, and any issues that arise. We aim to build lasting partnerships, not one-time transactions.',
    details: [
      'Repeat order management',
      'Continuous quality monitoring',
      'Supplier relationship management',
      'Market intelligence and updates',
    ],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-500 py-16 md:py-24" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            A transparent, structured process from your first inquiry to delivered products.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 bottom-0 w-0.5 bg-surface-200" />
                )}
                <div className="md:flex gap-8">
                  <div className="md:w-16 shrink-0">
                    <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/20 mb-4 md:mb-0">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold text-surface-800 mb-1">{step.title}</h2>
                    <p className="text-brand-500 font-medium text-sm mb-3">{step.subtitle}</p>
                    <p className="text-surface-500 text-sm leading-relaxed mb-4">{step.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-sm text-surface-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-surface-800 mb-4">Ready to Start Sourcing?</h2>
          <p className="text-surface-500 mb-8">
            Contact us today for a free consultation and discover how we can help you source from China with confidence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 text-white rounded-lg font-semibold hover:bg-accent-600 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}