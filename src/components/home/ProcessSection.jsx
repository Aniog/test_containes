const steps = [
  {
    step: '01',
    title: 'Tell Us Your Needs',
    desc: 'Share your product requirements, target price, order volume, and quality standards. We analyze your needs and create a sourcing plan.',
  },
  {
    step: '02',
    title: 'Supplier Identification',
    desc: 'We search our database and network to identify pre-qualified manufacturers. You receive a shortlist of 3-5 vetted suppliers.',
  },
  {
    step: '03',
    title: 'Factory Audit & Verification',
    desc: 'Our team conducts on-site factory audits. We verify licenses, production capacity, QC systems, and financial health.',
  },
  {
    step: '04',
    title: 'Sampling & Negotiation',
    desc: 'We coordinate samples, facilitate price negotiations, and help you finalize terms with the best-fit supplier.',
  },
  {
    step: '05',
    title: 'Production & QC',
    desc: 'We monitor production milestones, conduct in-process and pre-shipment inspections, and report to you regularly.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight, handle customs documentation, and track your shipment until it reaches your warehouse.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="section-container">
        <h2 className="section-title">How We Work</h2>
        <p className="section-subtitle">
          A transparent, six-step process that takes you from inquiry to delivery.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-brand-200 leading-none">{s.step}</span>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-6 w-px h-full bg-brand-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}