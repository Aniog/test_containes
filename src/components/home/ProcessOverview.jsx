import { Link } from 'react-router-dom'

const steps = [
  {
    number: '01',
    title: 'Share Your Requirements',
    description: 'Tell us what you need — product specs, target price, quantity, and timeline.',
  },
  {
    number: '02',
    title: 'We Source & Shortlist',
    description: 'Our team identifies qualified suppliers, requests samples, and compares quotes.',
  },
  {
    number: '03',
    title: 'Factory Verification',
    description: 'We visit and audit the factory to confirm capacity, quality systems, and legitimacy.',
  },
  {
    number: '04',
    title: 'Sample & Negotiation',
    description: 'We manage sample approval, negotiate pricing, and finalize production terms.',
  },
  {
    number: '05',
    title: 'Production & QC',
    description: 'We monitor production progress and conduct quality inspections before shipment.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle export docs, and ensure on-time delivery.',
  },
]

const ProcessOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            How Our Sourcing Process Works
          </h2>
          <p id="process-subtitle" className="mt-4 text-text-body text-lg">
            A clear, structured approach from your initial inquiry to final delivery.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative bg-white rounded-xl border border-border p-6">
              <span className="text-4xl font-bold text-accent/20">{step.number}</span>
              <h3 className="mt-2 text-lg font-semibold text-text-primary">{step.title}</h3>
              <p className="mt-2 text-text-body text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors"
          >
            Learn more about our process →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProcessOverview
