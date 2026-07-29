import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Shield } from 'lucide-react'

const caseStudies = [
  {
    id: 'eco-packaging',
    title: 'Sustainable Packaging for a US Startup',
    industry: 'Packaging',
    results: [
      { icon: DollarSign, text: '40% cost reduction vs. local suppliers' },
      { icon: TrendingUp, text: 'Scaled from 500 to 50,000 units in 6 months' },
      { icon: Shield, text: '100% on-time delivery rate' },
    ],
    summary: 'Helped a US-based eco-friendly startup find and qualify a sustainable packaging manufacturer in Guangdong.',
  },
  {
    id: 'electronics-eu',
    title: 'Consumer Electronics for a European Retailer',
    industry: 'Electronics',
    results: [
      { icon: DollarSign, text: '30% landed cost savings' },
      { icon: TrendingUp, text: '3 production lines dedicated within 2 months' },
      { icon: Shield, text: 'Pre-shipment QC passed with 99.2% yield' },
    ],
    summary: 'Sourced and managed production of a full product line for a European retailer expanding into new markets.',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts for an Australian Distributor',
    industry: 'Automotive',
    results: [
      { icon: DollarSign, text: '25% margin improvement on landed costs' },
      { icon: TrendingUp, text: 'Consistent monthly shipments for 18+ months' },
      { icon: Shield, text: 'Zero quality incidents across 120+ shipments' },
    ],
    summary: 'Built a reliable supply chain for 200+ auto parts SKUs from multiple factories across Zhejiang province.',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4" id="case-studies-section-title">
            Case Studies
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real results from real partnerships. See how we have helped businesses like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-xl border border-neutral-100 overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div
                className="h-48 bg-neutral-200"
                data-strk-bg-id={`cs-bg-${cs.id}`}
                data-strk-bg={`[cs-title-${cs.id}]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'none' }}
              />
              <div className="p-6">
                <span className="text-xs font-semibold text-brand-500 bg-brand-50 px-3 py-1 rounded-full">
                  {cs.industry}
                </span>
                <h3 id={`cs-title-${cs.id}`} className="text-lg font-semibold text-neutral-900 mt-3 mb-2">
                  {cs.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-4">{cs.summary}</p>
                <div className="space-y-2 mb-4">
                  {cs.results.map((r) => (
                    <div key={r.text} className="flex items-start gap-2">
                      <r.icon className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">{r.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}