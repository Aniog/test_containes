import { Search, ClipboardCheck, Building2, ShieldCheck, Ship, Package } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Requirement Analysis',
    description: 'We discuss your product specifications, quality standards, budget, and delivery timeline.',
  },
  {
    icon: Building2,
    step: '02',
    title: 'Supplier Matching',
    description: 'We identify and vet suitable suppliers, providing you with shortlisted options and comparisons.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Sample Approval',
    description: 'We coordinate sample development and revisions until the product meets your expectations.',
  },
  {
    icon: ShieldCheck,
    step: '04',
    title: 'Order & QC',
    description: 'Once the order is placed, we monitor production and conduct inspections at key milestones.',
  },
  {
    icon: Ship,
    step: '05',
    title: 'Shipping & Delivery',
    description: 'We handle freight booking, documentation, and track your shipment until it arrives.',
  },
  {
    icon: Package,
    step: '06',
    title: 'Post-Delivery Support',
    description: 'We remain available for any quality issues, after-sales service, or repeat orders.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            How Sourcing Works
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A structured, transparent process designed to minimize risk and maximize results.
          </p>
        </div>

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gray-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-bold text-primary tracking-widest mb-1">{step.step}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}