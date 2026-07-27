import React from 'react'
import { Link } from 'react-router-dom'
import { ClipboardList, Search, ShieldCheck, ClipboardCheck, Ship, PackageCheck } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    step: '1',
    title: 'Submit Your Request',
    desc: 'Tell us what you need — product type, specifications, quantity, and target price. We review and confirm within 24 hours.',
  },
  {
    icon: Search,
    step: '2',
    title: 'Supplier Search & Screening',
    desc: 'We search our verified supplier network, evaluate candidates, and present you with 3-5 qualified options with detailed profiles.',
  },
  {
    icon: ShieldCheck,
    step: '3',
    title: 'Factory Verification',
    desc: 'We conduct on-site audits to verify production capacity, quality systems, and business legitimacy of your chosen supplier.',
  },
  {
    icon: ClipboardCheck,
    step: '4',
    title: 'Sample & Quality Check',
    desc: 'We arrange sample production, evaluate quality against your specs, and conduct inspections throughout production.',
  },
  {
    icon: PackageCheck,
    step: '5',
    title: 'Production Follow-up',
    desc: 'We monitor production progress, track timelines, and keep you updated with regular reports and photos.',
  },
  {
    icon: Ship,
    step: '6',
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight, handle customs documentation, and track your shipment until it reaches your warehouse.',
  },
]

const Process = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">How It Works</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            A clear, step-by-step process that takes you from initial request to delivered goods — with full transparency at every stage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s) => (
            <div key={s.step} className="relative p-6 rounded-lg bg-white border border-neutral-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm">
                  {s.step}
                </div>
                <s.icon className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-medium px-5 py-2.5 rounded-md no-underline transition-colors"
          >
            View Full Process Details
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Process
