import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Search, ShieldCheck, ClipboardCheck, Ship, PackageCheck } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Submit Your Request',
    description: 'Tell us what you need to source — product type, specifications, target price, and quantity.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Supplier Search',
    description: 'We search our network and visit factories to find suppliers that match your requirements.',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Factory Verification',
    description: 'We verify the factory\'s legitimacy, production capacity, and quality systems before you proceed.',
  },
  {
    icon: ClipboardCheck,
    number: '04',
    title: 'Sample & Quality Check',
    description: 'We arrange samples, conduct inspections, and ensure product quality meets your standards.',
  },
  {
    icon: PackageCheck,
    number: '05',
    title: 'Production Follow-up',
    description: 'We monitor production progress, track timelines, and keep you informed at every milestone.',
  },
  {
    icon: Ship,
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle documentation, and ensure your goods reach you on time.',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A clear, step-by-step process from your initial request to final delivery. You stay informed at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-primary-500">{step.number}</span>
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary-500" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors no-underline"
          >
            See Full Process Details
          </Link>
        </div>
      </div>
    </section>
  )
}
