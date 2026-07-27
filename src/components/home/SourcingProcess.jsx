import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck } from 'lucide-react'

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
    title: 'We Find Suppliers',
    description: 'Our team identifies and shortlists 3-5 qualified manufacturers for your review.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'We visit and audit the factories to confirm capacity, quality systems, and legitimacy.',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sample & Production',
    description: 'We manage sampling, negotiate pricing, and monitor production progress.',
  },
  {
    number: '05',
    icon: Truck,
    title: 'QC & Shipping',
    description: 'Final inspection before shipment, then we coordinate logistics to your destination.',
  },
]

const SourcingProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-brand-blue uppercase tracking-wide mb-3">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Our Sourcing Process
          </h2>
          <p className="text-brand-muted text-lg">
            A clear, structured approach to sourcing from China — no guesswork, no surprises.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-brand-border" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">Step {step.number}</span>
                  <h3 className="text-base font-semibold text-brand-dark mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SourcingProcess
