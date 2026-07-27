import { Search, ClipboardCheck, Factory, Truck, FileCheck, HeadphonesIcon } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Requirement Analysis',
    description: 'We discuss your product specifications, budget, target quality, and delivery timeline to create a clear sourcing plan.',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Supplier Matching',
    description: 'We identify and vet potential suppliers from our database, checking credentials, capabilities, and past performance.',
  },
  {
    icon: Factory,
    step: '03',
    title: 'Factory Audit',
    description: 'Our team visits shortlisted factories to verify facilities, production capacity, quality systems, and working conditions.',
  },
  {
    icon: FileCheck,
    step: '04',
    title: 'Sample & Approval',
    description: 'We coordinate sample production, evaluate quality against specifications, and get your approval before mass production.',
  },
  {
    icon: Truck,
    step: '05',
    title: 'Production & QC',
    description: 'We monitor production progress, conduct in-process inspections, and perform final quality checks before shipment.',
  },
  {
    icon: HeadphonesIcon,
    step: '06',
    title: 'Delivery & Support',
    description: 'We handle shipping documentation, track delivery, and provide ongoing support for any post-delivery issues.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            How Sourcing Works
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A structured, transparent process designed to minimize risk and maximize results.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative bg-white rounded-xl p-6 lg:p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-navy-700 text-white flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-navy-700" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-navy-700 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}