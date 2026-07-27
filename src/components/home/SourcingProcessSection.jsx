import { MessageSquare, Search, Factory, ClipboardCheck, Package, Ship, Handshake } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    description: 'Tell us what you need — product specs, target price, quantity, and timeline.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research',
    description: 'We search our network and market databases to find matching manufacturers.',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site or virtual audits to confirm legitimacy, capacity, and certifications.',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sample & Quote Review',
    description: 'Compare quotations, evaluate samples, and negotiate terms on your behalf.',
  },
  {
    number: '05',
    icon: Package,
    title: 'Production Monitoring',
    description: 'Weekly updates, milestone checks, and quality gates throughout manufacturing.',
  },
  {
    number: '06',
    icon: Ship,
    title: 'Inspection & Shipping',
    description: 'Pre-shipment QC, export paperwork, and freight coordination to your door.',
  },
  {
    number: '07',
    icon: Handshake,
    title: 'After-Sales Support',
    description: 'Ongoing supplier relationship management and issue resolution.',
  },
]

export default function SourcingProcessSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            How Our Sourcing Process Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A transparent, step-by-step workflow designed to minimize risk and maximize efficiency.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={step.number}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                    index > 0 ? 'lg:mt-12' : ''
                  }`}
                >
                  <div className={`${isLeft ? 'lg:text-right lg:pr-16' : 'lg:order-2 lg:pl-16'}`}>
                    <div className={`flex items-center gap-4 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
                      <span className="text-4xl font-bold text-slate-100 select-none">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <step.icon className="w-5 h-5 text-brand" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>

                  <div className={`hidden lg:block ${isLeft ? 'lg:order-2' : ''}`} />

                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand border-4 border-white shadow-sm z-10" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
