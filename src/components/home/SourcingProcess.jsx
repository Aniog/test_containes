import { Search, FileCheck, BadgeCheck, ClipboardList, Ship } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Tell Us What You Need',
    desc: 'Share your product specifications, target price, order quantity, and any certifications required. We review your requirements and create a sourcing plan.',
  },
  {
    number: '02',
    icon: BadgeCheck,
    title: 'Supplier Identification & Vetting',
    desc: 'We search our network of 5,000+ factories, shortlist 3-5 candidates, conduct factory audits, and provide detailed comparison reports.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Sampling & Negotiation',
    desc: 'We coordinate samples from shortlisted suppliers, negotiate pricing and payment terms in Mandarin, and help you select the best option.',
  },
  {
    number: '04',
    icon: ClipboardList,
    title: 'Production & Quality Control',
    desc: 'We monitor production with weekly updates, conduct in-line and pre-shipment inspections, and ensure products match approved samples.',
  },
  {
    number: '05',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'We manage freight booking, customs documentation, consolidation (LCL/FCL), and track your shipment until it reaches your destination.',
  },
]

export default function SourcingProcess() {
  return (
    <section className="py-20 md:py-28 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Our Sourcing Process
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            A proven 5-step process designed to eliminate risk and ensure you get
            exactly what you ordered, on time and on budget.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-[50%] w-0.5 h-[calc(100%-96px)] bg-slate-200 -translate-x-1/2" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow z-10 top-10" />

                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
                  <div className={`bg-surface border border-slate-200 rounded-xl p-6 md:p-8 ${
                    i % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-accent font-bold text-sm">{step.number}</span>
                        <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Empty column for balance */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
