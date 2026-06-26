import { Link } from 'react-router-dom'
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck, PackageCheck } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Tell Us What You Need',
    description: 'Share your product requirements, specifications, target price, and quantity. We assess feasibility and propose a sourcing plan.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Supplier Identification',
    description: 'We search our verified supplier network and conduct new supplier outreach to find the best matches for your requirements.',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Factory Verification',
    description: 'We visit and audit shortlisted factories to verify capabilities, certifications, and quality management systems.',
  },
  {
    icon: ClipboardCheck,
    number: '04',
    title: 'Sample & Quality Check',
    description: 'We arrange samples, evaluate quality, and confirm specifications before production begins.',
  },
  {
    icon: Truck,
    number: '05',
    title: 'Production & Inspection',
    description: 'We monitor production progress and conduct inspections at key milestones to ensure quality and timeline compliance.',
  },
  {
    icon: PackageCheck,
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle customs documentation, and track your shipment to final delivery.',
  },
]

export default function SourcingProcess() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">
            Your Sourcing Process, Simplified
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            A clear, step-by-step process that keeps you informed and in control at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative bg-white rounded-xl border border-neutral-200 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-extrabold text-primary-100">{step.number}</span>
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            See Full Process Details
          </Link>
        </div>
      </div>
    </section>
  )
}
