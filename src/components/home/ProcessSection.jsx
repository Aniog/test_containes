import { Search, ClipboardCheck, Factory, Ship, Package } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Requirement Analysis',
    description: 'We discuss your product specifications, budget, target price, quality standards, and delivery timeline.',
  },
  {
    icon: Factory,
    step: '02',
    title: 'Supplier Matching',
    description: 'We identify and shortlist qualified suppliers, compare quotes, and present you with the best options.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Factory Audit',
    description: 'We conduct on-site verification of facilities, certifications, production capacity, and quality systems.',
  },
  {
    icon: Package,
    step: '04',
    title: 'Sample & Production',
    description: 'Samples are approved, production is monitored, and quality inspections are conducted at key milestones.',
  },
  {
    icon: Ship,
    step: '05',
    title: 'Shipping & Delivery',
    description: 'We handle logistics, documentation, customs clearance, and arrange delivery to your destination.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4" id="process-section-title">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A proven 5-step process that takes you from product concept to delivered goods.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-brand-200" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-brand-500 flex items-center justify-center shadow-lg">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold text-sm z-0">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}