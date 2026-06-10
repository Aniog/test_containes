import { Link } from 'react-router-dom'
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Ship, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    description: 'Fill out our inquiry form with your product details — specifications, target price, quantity, certifications, and timeline. The more detail you provide, the faster we can help.',
    details: ['Product specifications & drawings', 'Target FOB/CIF price', 'Required certifications (CE, FDA, etc.)', 'Estimated order quantity', 'Desired delivery timeline'],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    description: "Our team searches across China's manufacturing regions to identify 3–5 qualified suppliers. We request quotes, evaluate capabilities, and present you with a comparison report.",

    details: ['Database search + market visits', 'Initial supplier screening', 'Quote comparison table', 'Sample requests coordinated', 'Recommendation with rationale'],
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'Once you select a supplier, we visit the factory to verify their legitimacy, production capacity, quality systems, and working conditions. You receive a detailed audit report.',
    details: ['On-site factory visit', 'Business license verification', 'Production line inspection', 'Quality system assessment', 'Photo & video documentation'],
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Order Placement & Production',
    description: 'We help finalize contracts, manage sample approvals, and monitor production progress. You receive regular updates with photos so you always know the status.',
    details: ['Contract negotiation support', 'Pre-production sample approval', 'Weekly production updates', 'Material & component checks', 'Timeline management'],
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Quality Inspection',
    description: 'Before shipment, our inspectors visit the factory to check your goods against specifications using AQL sampling standards. Defective goods are flagged and resolved.',
    details: ['AQL-based sampling inspection', 'Functionality & appearance checks', 'Packaging & labeling verification', 'Detailed defect report', 'Pass/fail recommendation'],
  },
  {
    number: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate freight booking, export documentation, and customs clearance. Your goods are tracked from factory to your warehouse with full visibility.',
    details: ['Freight method selection', 'Export documentation', 'Container loading supervision', 'Shipment tracking', 'Delivery confirmation'],
  },
]

export default function HowItWorks() {
  return (
    <div>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              How It Works
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Our proven 6-step sourcing process takes you from product idea to delivered goods — with full transparency and professional support at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative pl-16 md:pl-20">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  {step.number !== '06' && (
                    <div className="absolute left-6 top-14 w-px h-[calc(100%+12px)] bg-neutral-200" />
                  )}
                  <div>
                    <span className="text-accent font-bold text-sm">Step {step.number}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-neutral-800 mt-1 mb-3">{step.title}</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">{step.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Ready to Get Started?</h2>
          <p className="text-neutral-600 text-lg mb-8">Submit your sourcing requirements and receive a free consultation within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
