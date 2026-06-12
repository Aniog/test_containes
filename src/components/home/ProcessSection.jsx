import SectionHeading from '@/components/shared/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Share Your Requirements',
    description: 'Tell us what you need — product specs, target price, quantity, certifications, and timeline.',
  },
  {
    number: '02',
    title: 'We Find & Verify Suppliers',
    description: 'Our team identifies qualified factories, conducts audits, and presents you with a shortlist of vetted options.',
  },
  {
    number: '03',
    title: 'Sample & Negotiate',
    description: 'We arrange samples, negotiate pricing and terms, and help you select the best supplier for your needs.',
  },
  {
    number: '04',
    title: 'Production & QC',
    description: 'We monitor production progress, conduct quality inspections at key stages, and report back with photos and data.',
  },
  {
    number: '05',
    title: 'Ship & Deliver',
    description: 'We coordinate freight, handle export documentation, and track your shipment until it arrives at your warehouse.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="Our Sourcing Process"
          subtitle="A clear, step-by-step approach that keeps you informed and in control at every stage."
        />

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className={`relative md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} md:mb-12`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`bg-white rounded-xl p-6 border border-slate-200 shadow-sm ${index % 2 === 0 ? 'md:ml-auto' : ''} max-w-md`}>
                    <span className="text-accent-500 font-bold text-sm">{step.number}</span>
                    <h3 className="text-lg font-semibold text-navy-900 mt-1 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-accent-500 rounded-full items-center justify-center text-white font-bold text-sm shadow-lg shadow-accent-500/30">
                  {step.number}
                </div>

                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
