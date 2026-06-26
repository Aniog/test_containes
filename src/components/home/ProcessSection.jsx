import { Search, Building2, ClipboardCheck, Eye, Ship, Package } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Tell Us What You Need',
    description: 'Share product specs, target price, volume, and any supplier preferences.',
  },
  {
    step: '02',
    icon: Building2,
    title: 'We Find & Verify Suppliers',
    description: 'We shortlist 3–5 qualified factories and perform on-site verification.',
  },
  {
    step: '03',
    icon: ClipboardCheck,
    title: 'Sample Evaluation',
    description: 'Coordinate sample production, review quality, and confirm specifications.',
  },
  {
    step: '04',
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Regular follow-ups and milestone inspections to keep everything on track.',
  },
  {
    step: '05',
    icon: Ship,
    title: 'Quality Check & Shipping',
    description: 'Pre-shipment inspection, container loading supervision, and freight booking.',
  },
  {
    step: '06',
    icon: Package,
    title: 'Delivery & Support',
    description: 'Track shipment to your door and provide after-delivery support if needed.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-accent mb-3">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
            How It Works
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A simple, transparent 6-step process designed to reduce risk and give you full visibility from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative bg-bg rounded-xl border border-border-light p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary-accent" />
                </div>
                <span className="text-2xl font-extrabold text-border-light">{s.step}</span>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
