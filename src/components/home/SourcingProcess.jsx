import { MessageSquare, Search, FileCheck, Factory, PackageCheck, Truck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    description: 'Share your product specifications, target price, quantity, and timeline. We\'ll understand your requirements in detail.',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Find & Verify Suppliers',
    description: 'Our team sources and vettes suppliers across China, conducting factory audits and checking certifications.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Samples & Negotiations',
    description: 'We coordinate product samples for your approval and negotiate pricing and terms on your behalf.',
  },
  {
    number: '04',
    icon: Factory,
    title: 'Production & QC',
    description: 'We monitor production progress and conduct quality inspections at key stages to ensure standards are met.',
  },
  {
    number: '05',
    icon: PackageCheck,
    title: 'Final Inspection',
    description: 'Pre-shipment inspection verifies the final products match your specifications before they leave the factory.',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We arrange freight, handle customs documentation, and coordinate delivery to your specified destination.',
  },
]

export default function SourcingProcess() {
  return (
    <section className="py-20 bg-brand-slate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">How It Works</span>
          <h2 id="process-title" className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy">
            Simple, Transparent Sourcing Process
          </h2>
          <p id="process-subtitle" className="mt-4 text-lg text-gray-600">
            From your first inquiry to final delivery, here is how we make China sourcing straightforward and risk-free.
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white font-bold text-lg shrink-0">
                      {step.number}
                    </div>
                    <Icon className="h-6 w-6 text-brand-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
