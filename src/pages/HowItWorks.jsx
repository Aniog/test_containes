import { Link } from 'react-router-dom'
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Share your product specifications, target price, quantity, quality standards, and timeline. We respond within 24 hours with an initial assessment.',
    details: [
      'Product description and specifications',
      'Target price range and order quantity',
      'Quality standards and certifications needed',
      'Timeline and delivery requirements',
    ],
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Matching & Shortlisting',
    desc: 'We search our network of 5,000+ vetted factories and identify 3-5 qualified suppliers that match your requirements.',
    details: [
      'Database search and direct factory outreach',
      'Capability assessment and price comparison',
      'Supplier profile with factory photos and certifications',
      'Shortlist presentation for your review',
    ],
  },
  {
    icon: ShieldCheck,
    step: '03',
    title: 'Factory Verification & Audit',
    desc: 'We conduct on-site audits of shortlisted factories and send you a detailed verification report with photos and recommendations.',
    details: [
      'Business license and registration check',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Compliance and worker conditions evaluation',
    ],
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample & Order Management',
    desc: 'We arrange samples for your approval, then manage the order placement, production timeline, and quality checkpoints.',
    details: [
      'Sample production and shipping coordination',
      'Order placement and contract support',
      'Production schedule with milestone checkpoints',
      'Pre-production and during-production inspections',
    ],
  },
  {
    icon: Truck,
    step: '05',
    title: 'Quality Control & Shipping',
    desc: 'Pre-shipment inspection ensures quality, then we coordinate freight booking, customs documentation, and delivery.',
    details: [
      'Pre-shipment inspection (PSI) with AQL standards',
      'Container loading supervision',
      'Freight booking and customs documentation',
      'Shipment tracking and delivery coordination',
    ],
  },
  {
    icon: CheckCircle,
    step: '06',
    title: 'Ongoing Support & Partnership',
    desc: 'We provide continuous support for reorders, new product development, and long-term supplier relationship management.',
    details: [
      'Reorder management and production scheduling',
      'New product development and supplier diversification',
      'Annual supplier performance reviews',
      'Dedicated account manager for your business',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-2">How It Works</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Your Sourcing Process, Simplified
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              A clear, step-by-step process that takes you from initial inquiry to delivered goods — with full transparency at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative">
                <div className="flex gap-6 md:gap-8">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-slate-200 mt-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-amber font-bold text-sm">Step {step.step}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1 mb-3">{step.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">{detail}</span>
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

      {/* Timeline Summary */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Typical Timeline</h2>
            <p className="text-slate-600 text-lg">From inquiry to delivery, here's what to expect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { phase: 'Inquiry & Matching', time: 'Week 1', desc: 'Requirements review and supplier shortlisting' },
              { phase: 'Verification & Samples', time: 'Weeks 2-3', desc: 'Factory audit and sample production' },
              { phase: 'Production & QC', time: 'Weeks 4-8', desc: 'Order management and quality inspections' },
              { phase: 'Shipping & Delivery', time: 'Weeks 8-10', desc: 'Freight coordination and customs clearance' },
            ].map((item) => (
              <div key={item.phase} className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <p className="text-amber font-bold text-sm mb-1">{item.time}</p>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.phase}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-slate-600 text-lg mb-8">
            Submit your sourcing requirements and receive supplier recommendations within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
