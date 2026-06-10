import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Ship, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    description: 'Tell us what you need — product specs, target price, MOQ, certifications, and timeline.',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Source & Shortlist',
    description: 'Our team identifies qualified suppliers, requests samples, and compares quotes for you.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'We visit the factory, audit their capabilities, and confirm they can deliver to your standards.',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'During and pre-shipment inspections ensure your order meets specifications before it leaves China.',
  },
  {
    number: '05',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate freight, handle customs paperwork, and track your shipment to destination.',
  },
  {
    number: '06',
    icon: CheckCircle,
    title: 'Ongoing Support',
    description: 'Reorder management, supplier relationship maintenance, and continuous quality monitoring.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight mb-4">
            Our Sourcing Process
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            A proven 6-step process that takes you from product idea to delivered goods — with full transparency at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-xl border border-neutral-200 p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-accent/20">{step.number}</span>
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">{step.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
