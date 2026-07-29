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
    title: 'We Find Suppliers',
    description: 'Our team identifies and shortlists qualified manufacturers that match your criteria.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'We visit and audit factories to confirm capacity, quality systems, and legitimacy.',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Samples & QC',
    description: 'We manage sample development, approve production, and conduct quality inspections.',
  },
  {
    number: '05',
    icon: Ship,
    title: 'Production & Shipping',
    description: 'We follow production, arrange shipping, and deliver goods to your destination.',
  },
]

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A clear, structured approach that takes the guesswork out of buying from China.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-neutral-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative text-center">
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">Step {step.number}</span>
                  <h3 className="text-lg font-semibold text-neutral-800 mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
