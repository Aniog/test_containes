import React from 'react'
import { Link } from 'react-router-dom'
import { Search, FileCheck, ClipboardCheck, Package, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Requirement Analysis',
    description: 'We discuss your product specifications, budget, target price, quality requirements, and delivery timeline.',
  },
  {
    icon: FileCheck,
    step: '02',
    title: 'Supplier Matching',
    description: 'We identify and vet potential suppliers, verify their credentials, and present you with shortlisted options.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Sample & Quality Check',
    description: 'We coordinate sample requests, conduct inspections, and ensure samples match your requirements before production.',
  },
  {
    icon: Package,
    step: '04',
    title: 'Production & Delivery',
    description: 'We monitor production, perform final inspections, and manage shipping documentation until goods arrive at your door.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 text-center mb-4">
          How Sourcing Works
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          A straightforward process designed to minimize risk and maximize confidence 
          in your supply chain.
        </p>

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-navy-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
                      Step {step.step}
                    </span>
                    <h3 className="text-lg font-semibold text-navy-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            Learn More About Our Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}