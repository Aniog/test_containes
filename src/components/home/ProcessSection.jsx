import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Camera, Ship, Box } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Requirement Analysis',
    desc: 'We discuss your product needs, target price, quality standards, and timeline.',
  },
  {
    num: '02',
    icon: Building2,
    title: 'Supplier Identification',
    desc: 'We research and shortlist qualified manufacturers from our network and trade platforms.',
  },
  {
    num: '03',
    icon: ClipboardCheck,
    title: 'Factory Audit & Verification',
    desc: 'On-site inspection of factory licenses, capacity, equipment, and quality systems.',
  },
  {
    num: '04',
    icon: Camera,
    title: 'Sampling & Negotiation',
    desc: 'We obtain samples, negotiate pricing and terms, and finalize the contract.',
  },
  {
    num: '05',
    icon: Box,
    title: 'Production & QC',
    desc: 'Regular factory visits, progress reports, and quality inspections at every stage.',
  },
  {
    num: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'Logistics coordination, customs clearance, and delivery to your warehouse.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            How We Source for You
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A proven six-step process that ensures you get the right products from
            reliable suppliers, delivered on time and on budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-tint flex items-center justify-center">
                <span className="text-xs font-bold text-accent">{step.num}</span>
              </div>
              <div>
                <div className="w-10 h-10 bg-accent/5 rounded-lg flex items-center justify-center mb-3">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center px-6 py-3 text-navy font-semibold text-sm rounded-lg border-2 border-gray-200 hover:border-navy transition-colors"
          >
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  )
}
