import { ClipboardList, Search, Building2, ClipboardCheck, PackageCheck, Ship, Handshake } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Tell Us Your Needs',
    description: 'Share product specs, quantities, target price, and delivery requirements.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Research',
    description: 'We shortlist qualified suppliers from our network and new market research.',
  },
  {
    step: '03',
    icon: Building2,
    title: 'Factory Verification',
    description: 'We audit or visit factories to confirm legitimacy, capacity, and compliance.',
  },
  {
    step: '04',
    icon: ClipboardCheck,
    title: 'Sampling & Quoting',
    description: 'Collect samples and detailed quotations for your evaluation and approval.',
  },
  {
    step: '05',
    icon: PackageCheck,
    title: 'QC & Production Tracking',
    description: 'Monitor production, perform inspections, and resolve issues in real time.',
  },
  {
    step: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'Coordinate logistics, documentation, and final delivery to your warehouse.',
  },
  {
    step: '07',
    icon: Handshake,
    title: 'Ongoing Support',
    description: 'Stay in touch for reorders, supplier management, and continuous improvement.',
  },
]

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">How It Works</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
            A simple, transparent sourcing process
          </h2>
          <p className="text-lg text-slate-600">
            We keep you informed at every step so there are no surprises.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200" />
          <div className="space-y-12 lg:space-y-0">
            {steps.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0
              return (
                <div key={item.step} className="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                  <div className={`${isEven ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                    <div className={`card p-6 lg:p-8 inline-block w-full ${isEven ? '' : 'lg:col-start-2'}`}>
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-brand-700" />
                        </div>
                        <span className="text-3xl font-bold text-slate-200">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-700 border-4 border-white shadow" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
