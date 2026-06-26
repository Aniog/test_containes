import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Clock, Shield, DollarSign } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'US Retailer Reduced Kitchen Product Costs by 32%',
    category: 'Home & Kitchen',
    client: 'Major US home goods retailer',
    challenge: 'The client was sourcing kitchen products through multiple brokers with inconsistent quality and rising costs. They needed a reliable partner to consolidate sourcing and improve margins.',
    solution: 'We conducted a full supplier audit across 8 factories in Guangdong, negotiated volume pricing, and implemented a 3-stage QC process. We consolidated their supply chain from 5 suppliers to 2 primary factories.',
    results: [
      { metric: '32%', label: 'Cost reduction' },
      { metric: '0%', label: 'Defect rate on first order' },
      { metric: '5 → 2', label: 'Suppliers consolidated' },
      { metric: '6 weeks', label: 'Time to first shipment' },
    ],
    titleId: 'cs-us-kitchen-title',
    descId: 'cs-us-kitchen-desc',
    imgId: 'cs-us-kitchen-img',
  },
  {
    id: 2,
    title: 'German Brand Launched LED Product Line in 8 Weeks',
    category: 'Electronics',
    client: 'European consumer electronics brand',
    challenge: 'The client wanted to launch a new LED product line for the European market with CE certification. They had no existing supplier relationships in China and a tight 8-week deadline.',
    solution: 'We shortlisted 4 LED manufacturers, arranged samples within 10 days, coordinated CE testing, and managed production with weekly milestone inspections. All units passed pre-shipment QC.',
    results: [
      { metric: '8 weeks', label: 'Concept to shipment' },
      { metric: '0', label: 'Defective units shipped' },
      { metric: 'CE', label: 'Certification obtained' },
      { metric: '10,000', label: 'Units delivered' },
    ],
    titleId: 'cs-german-led-title',
    descId: 'cs-german-led-desc',
    imgId: 'cs-german-led-img',
  },
  {
    id: 3,
    title: 'Australian Importer Cut Logistics Costs by 40%',
    category: 'Industrial',
    client: 'Australian industrial equipment distributor',
    challenge: 'The client was importing from 5 different suppliers across 3 Chinese cities, resulting in complex logistics, high freight costs, and inconsistent documentation.',
    solution: 'We identified a single factory capable of producing their full product range, negotiated consolidated shipping, and standardized all export documentation. We also implemented container sharing to reduce per-unit freight costs.',
    results: [
      { metric: '40%', label: 'Logistics cost reduction' },
      { metric: '1', label: 'Consolidated supplier' },
      { metric: '3 → 1', label: 'Shipping origin simplified' },
      { metric: '15%', label: 'Overall cost savings' },
    ],
    titleId: 'cs-au-industrial-title',
    descId: 'cs-au-industrial-desc',
    imgId: 'cs-au-industrial-img',
  },
  {
    id: 4,
    title: 'UK E-commerce Brand Scaled to 50 SKUs with Consistent Quality',
    category: 'Beauty & Personal Care',
    client: 'UK-based e-commerce beauty brand',
    challenge: 'The client wanted to expand from 10 to 50 SKUs while maintaining consistent quality across cosmetics packaging. Previous suppliers could not handle the scale or variety.',
    solution: 'We sourced a specialized cosmetics packaging factory in Zhejiang, developed detailed quality specifications for each SKU, and built a custom inspection checklist. Production monitoring ensured consistency across all batches.',
    results: [
      { metric: '50', label: 'SKUs managed' },
      { metric: '99.2%', label: 'QC pass rate' },
      { metric: '3 months', label: 'Full rollout timeline' },
      { metric: '25%', label: 'Cost savings vs UK suppliers' },
    ],
    titleId: 'cs-uk-beauty-title',
    descId: 'cs-uk-beauty-desc',
    imgId: 'cs-uk-beauty-img',
  },
]

export default function CaseStudies() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Case Studies</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-extrabold text-white">
            Real Results for Real Businesses
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            See how we've helped importers around the world source smarter, reduce costs, and build reliable supply chains from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs, index) => (
              <article key={cs.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${index > 0 ? 'pt-12 border-t border-border' : ''}`}>
                {/* Image */}
                <div
                  className="aspect-[16/10] bg-surface-alt rounded-xl overflow-hidden"
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{cs.category}</span>
                  <h2 id={cs.titleId} className="mt-2 font-heading font-extrabold text-2xl text-text mb-2">{cs.title}</h2>
                  <p id={cs.descId} className="text-text-muted text-sm mb-4">{cs.client}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-heading font-semibold text-sm text-text mb-1">Challenge</h4>
                      <p className="text-text-muted text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm text-text mb-1">Solution</h4>
                      <p className="text-text-muted text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {cs.results.map((r) => (
                      <div key={r.label} className="bg-surface-alt rounded-lg p-3 text-center">
                        <div className="font-heading font-extrabold text-lg text-primary">{r.metric}</div>
                        <div className="text-text-muted text-xs">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-text mb-4">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            Let's discuss your sourcing needs and build a plan tailored to your products and market.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-base px-7 py-3.5 rounded-lg transition-colors"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
