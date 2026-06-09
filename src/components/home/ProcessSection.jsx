import { useEffect, useRef } from 'react'
import { Search, FileCheck, Truck, PackageCheck, ClipboardList, Handshake } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Tell Us What You Need',
    description: 'Share your product specifications, target price, quantity, and quality requirements. We analyze your needs and create a sourcing plan.',
  },
  {
    icon: FileCheck,
    number: '02',
    title: 'Supplier Matching & Verification',
    description: 'We search our network, shortlist qualified factories, verify their credentials, and send you detailed supplier profiles with quotes.',
  },
  {
    icon: ClipboardList,
    number: '03',
    title: 'Sample & Order Confirmation',
    description: 'We arrange samples for your approval, negotiate terms, and confirm the order with the selected supplier on your behalf.',
  },
  {
    icon: PackageCheck,
    number: '04',
    title: 'Production Monitoring & QC',
    description: 'We follow production progress, conduct inspections at key stages, and keep you updated with detailed reports and photos.',
  },
  {
    icon: Truck,
    number: '05',
    title: 'Shipping & Delivery',
    description: 'We coordinate freight, handle customs documentation, consolidate shipments, and track delivery to your door or warehouse.',
  },
  {
    icon: Handshake,
    number: '06',
    title: 'Ongoing Support',
    description: 'Reorder management, supplier performance reviews, cost optimization, and continuous support for your long-term sourcing needs.',
  },
]

export default function ProcessSection() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-surface" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-4">
            Your Sourcing Process, Simplified
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            A clear, step-by-step process from initial inquiry to delivered goods — with full transparency at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative bg-white rounded-xl p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-primary/10">{step.number}</span>
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">{step.title}</h3>
              <p className="text-steel text-sm leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-200 z-10">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
