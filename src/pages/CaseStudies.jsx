import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, TrendingUp, Clock, ShieldCheck } from 'lucide-react'

const cases = [
  {
    industry: 'Consumer Electronics',
    title: 'Sourcing Bluetooth Headphones for a US Retail Brand',
    challenge: 'High defect rate (4%) and rising unit costs from an existing supplier.',
    solution: 'Identified a new ISO-certified factory, renegotiated terms, and implemented stricter QC checkpoints.',
    result: 'Reduced unit cost by 18%. Defect rate dropped to under 1%.',
    metrics: [
      { label: 'Cost Reduction', value: '-18%', icon: TrendingDown },
      { label: 'Defect Rate', value: '<1%', icon: ShieldCheck },
    ],
    imgId: 'case-electronics-a1b2c3',
  },
  {
    industry: 'Packaging',
    title: 'Custom Rigid Boxes for a European Cosmetics Startup',
    challenge: 'First-time importer needed consistent print quality and color accuracy across 50,000 units.',
    solution: 'Sourced a specialized packaging factory, managed color-proofing rounds, and supervised container loading.',
    result: 'Delivered on time with 99.2% color consistency. No reprints required.',
    metrics: [
      { label: 'On-Time Delivery', value: '100%', icon: Clock },
      { label: 'Color Consistency', value: '99.2%', icon: TrendingUp },
    ],
    imgId: 'case-packaging-d4e5f6',
  },
  {
    industry: 'Industrial Hardware',
    title: 'CNC Machined Parts for an Australian Robotics Company',
    challenge: 'Needed +/- 0.05mm tolerance across 12 different part variants with tight deadlines.',
    solution: 'Audited 4 precision machine shops, selected the best-equipped facility, and monitored every production batch.',
    result: '100% on-time delivery. All parts passed CMM inspection.',
    metrics: [
      { label: 'On-Time Delivery', value: '100%', icon: Clock },
      { label: 'Pass Rate', value: '100%', icon: ShieldCheck },
    ],
    imgId: 'case-hardware-g7h8i9',
  },
  {
    industry: 'Home & Furniture',
    title: 'Outdoor Furniture for a UK E-commerce Brand',
    challenge: 'Previous supplier used substandard materials that rusted within one season.',
    solution: 'Found a factory with certified aluminum and powder-coating processes. Conducted salt-spray testing.',
    result: 'Zero rust complaints after 12 months. Customer reviews improved significantly.',
    metrics: [
      { label: 'Rust Complaints', value: '0%', icon: TrendingDown },
      { label: 'Review Uplift', value: '+34%', icon: TrendingUp },
    ],
    imgId: 'case-furniture-j0k1l2',
  },
]

export default function CaseStudies() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Case Studies
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto">
            Real projects, real results. See how we have helped businesses like yours source better from China.
          </p>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {cases.map((c) => (
              <div
                key={c.title}
                className="bg-surface rounded-xl border border-border-light overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="aspect-[16/10] lg:aspect-auto bg-slate-100 overflow-hidden">
                    <img
                      data-strk-img-id={c.imgId}
                      data-strk-img={`[case-title-${c.industry}] [case-industry-${c.industry}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-6 md:p-8">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-accent mb-2">
                      {c.industry}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary mb-4">{c.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-bg rounded-lg p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">Challenge</p>
                        <p className="text-sm text-text-secondary">{c.challenge}</p>
                      </div>
                      <div className="bg-bg rounded-lg p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">Solution</p>
                        <p className="text-sm text-text-secondary">{c.solution}</p>
                      </div>
                      <div className="bg-bg rounded-lg p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">Result</p>
                        <p className="text-sm text-text-secondary">{c.result}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {c.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2"
                        >
                          <m.icon className="w-4 h-4 text-primary-accent" />
                          <span className="text-sm font-bold text-primary-accent">{m.value}</span>
                          <span className="text-xs text-text-secondary">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface border-t border-border-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-4">
            Want results like these?
          </h2>
          <p className="text-text-secondary mb-8">
            Share your product and goals. We will put together a sourcing plan tailored to your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
