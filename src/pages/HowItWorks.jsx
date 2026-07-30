import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, MessageSquare, Search, ClipboardList, Package, Truck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Request',
    desc: 'Fill out our inquiry form with your product requirements — what you need, how many, your target price, and any specific certifications or standards.',
    details: [
      'Product name, description, and specifications',
      'Target quantity and MOQ requirements',
      'Budget or target unit price',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Preferred timeline',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches the Chinese market, identifies qualified manufacturers, and presents you with a shortlist of 3–5 vetted suppliers within 5–10 business days.',
    details: [
      'Search across verified factory databases and trade shows',
      'Filter by production capacity, certifications, and export experience',
      'Initial supplier communication and capability assessment',
      'Detailed supplier profiles with photos and key data',
    ],
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Factory Audit & Sample Approval',
    desc: 'Before you commit to an order, we conduct on-site factory audits and coordinate sample production so you can evaluate quality firsthand.',
    details: [
      'On-site factory visit and audit report',
      'Business license and certification verification',
      'Sample coordination and international shipping',
      'Feedback loop with factory until samples are approved',
    ],
  },
  {
    number: '04',
    icon: Package,
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you approve the sample and confirm the order, we manage the production process — keeping you updated with regular reports and photos.',
    details: [
      'Contract and payment terms review support',
      'Production schedule tracking',
      'In-line quality checks at key milestones',
      'Weekly status updates with photos',
    ],
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Pre-Shipment Quality Inspection',
    desc: 'Before goods leave the factory, our QC inspectors conduct a thorough pre-shipment inspection against your approved specifications.',
    details: [
      'Random sampling per AQL standards',
      'Functional, visual, and packaging checks',
      'Detailed inspection report with photos',
      'Pass/fail recommendation before you release final payment',
    ],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery Coordination',
    desc: 'We coordinate freight booking, export documentation, and customs clearance to ensure your goods arrive on time and without surprises.',
    details: [
      'Sea freight, air freight, or express options',
      'Freight forwarder selection and booking',
      'Export customs documentation',
      'Shipment tracking until delivery confirmation',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-300 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              How SSourcing China Works
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A clear, step-by-step process designed to give you full visibility and control over your China sourcing — from first inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map(({ number, icon: Icon, title, desc, details }, idx) => (
              <div key={number} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Step number + connector */}
                <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-lightblue select-none hidden md:block">{number}</span>
                </div>
                {/* Content */}
                <div className="md:col-span-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent font-bold text-sm">{number}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-textdark">{title}</h2>
                  </div>
                  <p className="text-muted text-base leading-relaxed mb-5">{desc}</p>
                  <div className="bg-lightblue rounded-xl p-5">
                    <ul className="space-y-2">
                      {details.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-textdark text-sm">{d}</span>
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
      <section className="py-16 bg-lightblue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-textdark mb-3">Typical Timeline</h2>
            <p className="text-muted">Timelines vary by product complexity and order size. Here's a general guide.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { phase: 'Supplier Shortlist', time: '5–10 business days' },
              { phase: 'Factory Audit', time: '3–5 business days' },
              { phase: 'Sample Production', time: '7–21 days' },
              { phase: 'Production', time: '15–45 days (varies)' },
              { phase: 'QC Inspection', time: '1–2 business days' },
              { phase: 'Sea Freight', time: '15–35 days to destination' },
            ].map(({ phase, time }) => (
              <div key={phase} className="bg-white rounded-xl p-5 border border-border">
                <p className="font-semibold text-textdark text-sm mb-1">{phase}</p>
                <p className="text-accent font-bold text-base">{time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Submit your sourcing request today and receive a free plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
