import { Link } from 'react-router-dom'
import { ArrowRight, Send, Search, Factory, ClipboardCheck, Truck, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Send,
    step: '1',
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and delivery timeline. The more detail you provide, the faster we can help.',
    details: ['Product specifications & drawings', 'Target FOB/CIF price', 'Order quantity & MOQ flexibility', 'Required certifications', 'Delivery timeline'],
  },
  {
    icon: Search,
    step: '2',
    title: 'Supplier Research & Shortlist',
    desc: 'Our team researches the market, contacts potential suppliers, and presents you with 3–5 vetted options including pricing, lead times, and sample availability.',
    details: ['Market analysis & supplier mapping', 'Initial supplier screening', 'Price & capability comparison', 'Sample arrangement'],
  },
  {
    icon: Factory,
    step: '3',
    title: 'Factory Verification',
    desc: 'Once you select a supplier, we visit the factory to verify their production capacity, certifications, quality systems, and overall reliability.',
    details: ['On-site factory audit', 'Business license verification', 'Production line inspection', 'Photo & video documentation'],
  },
  {
    icon: ClipboardCheck,
    step: '4',
    title: 'Production & Quality Control',
    desc: 'We monitor production progress with regular updates and conduct quality inspections at key milestones to catch issues before shipment.',
    details: ['Production timeline tracking', 'During-production inspection', 'Pre-shipment final inspection', 'Defect reporting & resolution'],
  },
  {
    icon: Truck,
    step: '5',
    title: 'Shipping & Delivery',
    desc: 'We coordinate logistics from factory to your warehouse — booking freight, managing documentation, supervising container loading, and tracking shipment.',
    details: ['Freight booking & negotiation', 'Export documentation', 'Container loading check', 'Shipment tracking to destination'],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              How It Works
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Our structured 5-step process takes you from initial inquiry to delivered goods — with full transparency at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((item, idx) => (
              <div key={item.step} className="relative">
                {idx < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-slate-200 hidden md:block" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-1">Step {item.step}</div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{item.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
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

      {/* Timeline Summary */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
            Typical Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
            {[
              { label: 'Inquiry Review', time: '1–2 days' },
              { label: 'Supplier Shortlist', time: '5–10 days' },
              { label: 'Factory Audit', time: '3–5 days' },
              { label: 'Production', time: 'Varies' },
              { label: 'Shipping', time: '15–35 days' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-slate-200 rounded-xl p-4">
                <div className="text-lg font-bold text-navy">{item.time}</div>
                <div className="text-sm text-slate-600 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Start Your Sourcing Project
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Submit your requirements and receive a sourcing plan within 24–48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg text-base no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
