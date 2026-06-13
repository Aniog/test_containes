import { Link } from 'react-router-dom'
import { ClipboardList, Building2, Search, Eye, Truck, Handshake } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Tell Us Your Needs',
    desc: 'Share your product requirements, target pricing, quality standards, and order volume.',
  },
  {
    icon: Search,
    number: '02',
    title: 'We Find Suppliers',
    desc: 'We research and shortlist verified manufacturers that match your specifications.',
  },
  {
    icon: Building2,
    number: '03',
    title: 'Factory Verification',
    desc: 'On-site audits: check licenses, inspect facilities, and verify production capabilities.',
  },
  {
    icon: Eye,
    number: '04',
    title: 'Quality Control',
    desc: 'Sample approval, in-process inspections, and pre-shipment checks with photo reports.',
  },
  {
    icon: Truck,
    number: '05',
    title: 'Shipping & Delivery',
    desc: 'We coordinate logistics, handle customs documentation, and track until delivery.',
  },
  {
    icon: Handshake,
    number: '06',
    title: 'Ongoing Support',
    desc: 'Continuous supplier relationship management and reorder assistance.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-[#F5EDE3] text-[#C27A3E] text-xs font-medium tracking-wider uppercase rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Our Sourcing Process</h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            A transparent, step-by-step workflow designed to minimize risk and maximize results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#1A365D] rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="hidden lg:block w-px h-full absolute left-6 top-12 -translate-x-1/2 bg-slate-200" />
                    )}
                  </div>
                  <div>
                    <span className="text-[#C27A3E] text-xs font-bold tracking-wider uppercase mb-1 block">
                      Step {step.number}
                    </span>
                    <h3 className="text-lg font-semibold text-[#1A365D] mb-2">{step.title}</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center px-6 py-3 border-2 border-[#1A365D] text-[#1A365D] text-sm font-semibold rounded-md hover:bg-[#1A365D] hover:text-white transition-colors"
          >
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  )
}
