import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquareQuote, Search, ShieldCheck, ClipboardCheck, Clock, Ship } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquareQuote,
    title: 'Tell Us What You Need',
    desc: 'Share your product requirements, specifications, target price, and desired quantity. We analyze your needs and develop a sourcing plan.',
    details: [
      'Free initial consultation to understand your requirements',
      'Product specification review and sourcing strategy development',
      'Budget analysis and timeline planning',
      'Risk assessment for your specific product category',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Search & Verification',
    desc: 'We search our network, shortlist candidates, verify factories on-site, and present you with qualified supplier options with detailed reports.',
    details: [
      'Search across our verified supplier network and industry contacts',
      'Shortlist 3–5 candidates based on your requirements',
      'On-site factory verification for each shortlisted supplier',
      'Detailed supplier comparison report with pricing, capacity, and quality data',
    ],
  },
  {
    num: '03',
    icon: ClipboardCheck,
    title: 'Sample & Price Negotiation',
    desc: 'We coordinate sample production, evaluate quality, negotiate pricing and terms on your behalf, and ensure clear agreement before production.',
    details: [
      'Coordinate sample production and delivery to you',
      'Evaluate sample quality against your specifications',
      'Negotiate pricing, payment terms, and delivery schedules',
      'Draft and review purchase agreements and contracts',
    ],
  },
  {
    num: '04',
    icon: Clock,
    title: 'Production & Quality Control',
    desc: 'We follow production progress, conduct inspections at key stages, and address issues proactively to keep your order on track and up to standard.',
    details: [
      'Weekly production progress updates with photos',
      'Pre-production inspection to verify raw materials',
      'During-production inspection to catch issues early',
      'Pre-shipment inspection with AQL sampling before goods leave the factory',
    ],
  },
  {
    num: '05',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'We arrange freight, handle customs documentation, coordinate logistics, and track your shipment until it reaches your door.',
    details: [
      'Freight rate comparison and booking (air, sea, rail)',
      'Customs documentation preparation and compliance review',
      'Cargo insurance arrangement',
      'Real-time shipment tracking and delivery confirmation',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      <section className="bg-navy-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">How It Works</h1>
          <p className="text-navy-100 text-lg max-w-2xl mx-auto leading-relaxed">
            A clear, step-by-step process that keeps you informed and in control at every stage of sourcing.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step, i) => (
            <div key={step.num} className="mb-12 md:mb-16 last:mb-0">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-navy-600 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-accent-400 font-bold text-2xl">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-600 mb-2">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
                <div className="lg:w-2/3 bg-navy-50 rounded-xl p-6 md:p-8">
                  <h4 className="text-sm font-semibold text-navy-600 uppercase tracking-wide mb-4">What We Do</h4>
                  <ul className="space-y-3">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-1.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex justify-center my-8">
                  <ArrowRight className="w-8 h-8 text-navy-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Start Your Sourcing Project Today</h2>
          <p className="text-navy-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            The first step is free. Tell us what you need and we'll provide a sourcing plan within 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
