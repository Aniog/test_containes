import React from 'react'
import { Link } from 'react-router-dom'
import { Search, FileSearch, Factory, ClipboardCheck, Package, Ship, ArrowRight, MessageSquare, FileText, CheckSquare, BarChart3, Truck, Handshake } from 'lucide-react'
import Button from '@/components/ui/button'

const phases = [
  {
    phase: 'Phase 1: Discovery',
    steps: [
      { icon: MessageSquare, title: 'Initial Consultation', desc: 'We discuss your product requirements, target budget, quality expectations, and timeline in detail.' },
      { icon: FileText, title: 'Requirements Document', desc: 'We create a detailed specification document covering materials, dimensions, packaging, certifications, and compliance needs.' },
      { icon: Search, title: 'Supplier Identification', desc: 'Our team searches our database and network to find suppliers that match your specific requirements.' },
    ],
  },
  {
    phase: 'Phase 2: Evaluation',
    steps: [
      { icon: FileSearch, title: 'Supplier Shortlisting', desc: 'We review and shortlist 3-5 qualified suppliers based on capabilities, certifications, and past performance.' },
      { icon: Factory, title: 'Factory Verification', desc: 'On-site or virtual factory audits to verify production capacity, quality systems, and working conditions.' },
      { icon: CheckSquare, title: 'Quotation Comparison', desc: 'We collect and compare quotations, negotiate pricing, and present findings with our recommendations.' },
    ],
  },
  {
    phase: 'Phase 3: Validation',
    steps: [
      { icon: Package, title: 'Sample Coordination', desc: 'We coordinate sample production, track delivery, and review samples against your specifications.' },
      { icon: ClipboardCheck, title: 'Sample Approval', desc: 'Detailed sample inspection report with photos, measurements, and fit-for-purpose assessment.' },
      { icon: Handshake, title: 'Supplier Confirmation', desc: 'Final supplier selection, contract review, and order placement with clear quality benchmarks.' },
    ],
  },
  {
    phase: 'Phase 4: Production & Delivery',
    steps: [
      { icon: BarChart3, title: 'Production Monitoring', desc: 'Regular production progress updates with milestone tracking and timeline management.' },
      { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'During-production and pre-shipment inspections with detailed reporting and defect tracking.' },
      { icon: Truck, title: 'Logistics & Shipping', desc: 'Freight booking, export documentation, cargo inspection, and door-to-door delivery coordination.' },
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-900 to-brand-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">How It Works</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            A clear, structured process from your initial inquiry to final delivery. No guesswork, no surprises.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {phases.map((phase, pi) => (
            <div key={pi} className="mb-16 last:mb-0">
              <div className="text-center mb-10">
                <span className="inline-block bg-brand-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                  {phase.phase}
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {phase.steps.map((step, si) => (
                  <div key={si} className="bg-white rounded-xl p-6 border border-neutral-200 text-center hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-brand-600" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-neutral-600">{step.desc}</p>
                  </div>
                ))}
              </div>
              {pi < phases.length - 1 && (
                <div className="flex justify-center mt-8">
                  <ArrowRight className="w-6 h-6 text-brand-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-50 rounded-2xl p-8 lg:p-12 border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Typical Timeframe</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-1">1-2</div>
                <div className="text-sm text-neutral-500">Weeks</div>
                <div className="font-medium text-neutral-900 mt-2">Supplier Matching</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-1">2-4</div>
                <div className="text-sm text-neutral-500">Weeks</div>
                <div className="font-medium text-neutral-900 mt-2">Sample Production</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-1">4-8</div>
                <div className="text-sm text-neutral-500">Weeks</div>
                <div className="font-medium text-neutral-900 mt-2">Mass Production</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-1">2-4</div>
                <div className="text-sm text-neutral-500">Weeks</div>
                <div className="font-medium text-neutral-900 mt-2">Shipping & Delivery</div>
              </div>
            </div>
            <p className="text-center text-sm text-neutral-400 mt-6">
              Actual timelines vary depending on product complexity, order quantity, and seasonality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-brand-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Sourcing Project</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Tell us about your product, and we\'ll outline the process and timeline specific to your needs.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg" className="bg-white text-brand-700 hover:bg-neutral-100">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}