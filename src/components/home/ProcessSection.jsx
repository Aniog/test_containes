const steps = [
  {
    number: '01',
    title: 'Submit Inquiry',
    desc: 'Tell us what you need — product specs, target price, order volume, and any certifications required.',
  },
  {
    number: '02',
    title: 'Supplier Matching',
    desc: 'We shortlist 3-5 qualified factories from our verified network and present detailed profiles.',
  },
  {
    number: '03',
    title: 'Factory Audit & Sampling',
    desc: 'We conduct on-site audits, collect samples, and negotiate pricing on your behalf.',
  },
  {
    number: '04',
    title: 'Production & QC',
    desc: 'We monitor production with weekly updates and perform inspections at key checkpoints.',
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    desc: 'We handle logistics, documentation, and customs clearance to your destination port or warehouse.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            How We Work
          </h2>
          <p id="process-subtitle" className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
            A proven five-step process that takes you from inquiry to delivery.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-brand-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 relative z-10">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-sm text-brand-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div
            className="rounded-xl overflow-hidden max-w-4xl mx-auto"
            data-strk-bg-id="process-img-d4e5f6"
            data-strk-bg="[process-subtitle] [process-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
          >
            <div className="h-64 md:h-80 bg-brand-gray-100" />
          </div>
        </div>
      </div>
    </section>
  )
}
