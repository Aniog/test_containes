import { Search, FileCheck, Factory, ClipboardCheck, Ship, PackageCheck } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery & Requirements',
    desc: 'We discuss your product needs, budget, quality standards, and target markets to create a clear sourcing brief.',
  },
  {
    icon: FileCheck,
    step: '02',
    title: 'Supplier Shortlisting',
    desc: 'We search our network and public channels to find qualified suppliers, then present you with a curated shortlist.',
  },
  {
    icon: Factory,
    step: '03',
    title: 'Factory Verification',
    desc: 'We conduct on-site audits of shortlisted factories to verify capabilities, certifications, and working conditions.',
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sampling & Negotiation',
    desc: 'We manage sample requests, evaluate product quality, and help negotiate pricing and payment terms.',
  },
  {
    icon: Ship,
    step: '05',
    title: 'Production & QC',
    desc: 'We monitor production milestones, conduct inspections, and ensure quality standards are maintained throughout.',
  },
  {
    icon: PackageCheck,
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate logistics, handle documentation, and track shipments until they arrive at your destination.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Our Sourcing Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A structured, transparent process designed to minimize risk and maximize results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{step.step}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}