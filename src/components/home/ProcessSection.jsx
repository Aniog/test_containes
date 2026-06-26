import { Search, FileCheck, ClipboardCheck, Package, Ship, Building2 } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Requirement Analysis',
    description: 'We start by understanding your product specifications, quality standards, budget, and timeline.',
  },
  {
    icon: FileCheck,
    step: '02',
    title: 'Supplier Matching',
    description: 'We identify and pre-screen suppliers from our verified database that match your specific needs.',
  },
  {
    icon: Building2,
    step: '03',
    title: 'Factory Audit',
    description: 'On-site verification of production capacity, certifications, and compliance before proceeding.',
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample & Production',
    description: 'Sample approval followed by production monitoring with regular quality checkpoints.',
  },
  {
    icon: Package,
    step: '05',
    title: 'Inspection & Packing',
    description: 'Final quality inspection and professional packing supervised by our team.',
  },
  {
    icon: Ship,
    step: '06',
    title: 'Shipping & Delivery',
    description: 'Logistics coordination, customs clearance, and delivery to your door.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Sourcing Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our proven 6-step process ensures transparency and quality at every stage.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-slate-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
                  <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-brand-700" />
                  </div>
                  <span className="text-xs font-bold text-brand-600 tracking-wider mb-1 block">
                    STEP {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}