import SectionHeading from '@/components/shared/SectionHeading'
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Ship } from 'lucide-react'

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
    title: 'We Source & Shortlist',
    description: 'Our team identifies qualified suppliers and presents you with vetted options.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Samples',
    description: 'We verify the factory on-site and arrange product samples for your approval.',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Production & QC',
    description: 'We monitor production progress and conduct quality inspections before shipment.',
  },
  {
    number: '05',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle documentation, and track your shipment to destination.',
  },
]

const ProcessSteps = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How Our Sourcing Process Works"
          subtitle="A proven 5-step process that takes the risk out of importing from China."
        />

        <div className="relative">
          <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative text-center">
                  <div className="inline-flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-4 relative z-10">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                      Step {step.number}
                    </span>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
