import { Link } from 'react-router-dom'
import {
  MessageSquare, Search, Package, Eye, Truck, CheckCircle,
  ArrowRight, ArrowDown, Clock, Shield, Globe, Users
} from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    subtitle: 'Submit Your Requirements',
    desc: 'Fill out our simple inquiry form with your product details, specifications, target price, order quantity, and any certifications you need. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product description and specifications',
      'Target unit price and order quantity',
      'Required certifications (CE, FCC, FDA, etc.)',
      'Preferred shipping method and timeline',
    ],
    color: 'bg-blue-500',
  },
  {
    num: '02',
    icon: Search,
    title: 'We Find & Verify Suppliers',
    subtitle: 'Supplier Sourcing & Factory Audit',
    desc: 'Our team searches our vetted supplier database and industry networks to identify factories that match your requirements. We verify each supplier through background checks, license verification, and on-site factory visits.',
    details: [
      'Search across 500+ verified suppliers',
      'Factory background and license verification',
      'On-site audit by our local team',
      'Shortlist of 3-5 qualified suppliers',
    ],
    color: 'bg-green-500',
  },
  {
    num: '03',
    icon: Package,
    title: 'Sample & Price Negotiation',
    subtitle: 'Evaluate Quality & Finalize Terms',
    desc: 'We arrange product samples from your shortlisted suppliers and ship them to you for evaluation. We also assist with price negotiation, MOQ discussions, and payment terms to get you the best deal.',
    details: [
      'Sample collection from shortlisted suppliers',
      'Quality evaluation and comparison',
      'Price negotiation on your behalf',
      'Payment terms and contract finalization',
    ],
    color: 'bg-purple-500',
  },
  {
    num: '04',
    icon: Clock,
    title: 'Production Monitoring',
    subtitle: 'Track Progress at Every Stage',
    desc: 'Once production begins, we monitor the entire manufacturing process. We track milestones, conduct in-line quality checks, and provide you with regular progress reports including photos and updates.',
    details: [
      'Weekly production progress reports',
      'In-line quality inspections (DUPRO)',
      'Milestone tracking and delay alerts',
      'Photo documentation at each stage',
    ],
    color: 'bg-amber-500',
  },
  {
    num: '05',
    icon: Eye,
    title: 'Final Quality Inspection',
    subtitle: 'Pre-Shipment Inspection',
    desc: 'Before your goods leave the factory, we conduct a thorough pre-shipment inspection using international AQL standards. We check product quality, quantity, packaging, labeling, and carton markings.',
    details: [
      'AQL 2.5 sampling inspection',
      'Function, appearance, and measurement checks',
      'Quantity and packaging verification',
      'Detailed inspection report with photos',
    ],
    color: 'bg-orange-500',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    subtitle: 'Door-to-Door Logistics',
    desc: 'We coordinate the entire shipping process from factory pickup to your warehouse. This includes container loading supervision, customs clearance, documentation, and freight management.',
    details: [
      'Container loading supervision',
      'Customs documentation and clearance',
      'Sea, air, or rail freight coordination',
      'Door-to-door delivery tracking',
    ],
    color: 'bg-teal-500',
  },
]

const HowItWorks = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">How It Works</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Our Sourcing Process</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            A clear, six-step process from your initial inquiry to final delivery.
            Transparent, efficient, and designed to minimize your risk.
          </p>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-slate-200 hidden sm:block" />
                )}
                <div className="flex gap-6 sm:gap-8 pb-12">
                  {/* Step number circle */}
                  <div className="relative shrink-0">
                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step {step.num}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-500 font-medium mb-3">{step.subtitle}</p>
                    <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">Key Activities</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {step.details.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Typical Timeline</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: 'Supplier Shortlist', time: '3-5 days', icon: Search },
              { label: 'Samples & Negotiation', time: '7-15 days', icon: Package },
              { label: 'Production & Delivery', time: '30-60 days', icon: Truck },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent mb-1">{item.time}</div>
                <div className="text-sm font-medium text-slate-700">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Start Your Sourcing Journey Today</h2>
          <p className="text-slate-500 text-lg mb-8">Submit your requirements and receive a tailored sourcing plan within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
