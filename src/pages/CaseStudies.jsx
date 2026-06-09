import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Star, Quote } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-brand',
    category: 'Consumer Electronics',
    title: 'European Electronics Brand Saves 22% on Manufacturing Costs',
    challenge: 'A German electronics brand was paying high prices through a trading company and experiencing inconsistent product quality across shipments.',
    approach: 'We identified three ISO 9001-certified factories in Shenzhen, conducted full factory audits, coordinated samples from each, and negotiated direct pricing.',
    results: [
      '22% reduction in unit cost by eliminating middleman margins',
      'Consistent AQL 2.5 inspection results across 12+ shipments',
      '3-year stable partnership with dedicated production line',
      'On-time delivery rate improved from 72% to 96%',
    ],
    industry: 'Consumer Electronics',
    region: 'Shenzhen, Guangdong',
  },
  {
    id: 'furniture-importer',
    category: 'Home & Furniture',
    title: 'US Furniture Importer Scales from 3 to 15 Product Lines',
    challenge: 'A US-based furniture brand wanted to expand their product range from wooden furniture to include metal, upholstered, and outdoor pieces — but lacked contacts across these sub-categories.',
    approach: 'We mapped out the supply chain for each new category, identified specialized factories in Foshan (furniture hub), and managed the sampling and development process across 6 different factories.',
    results: [
      'Successfully launched 12 new product lines in 18 months',
      'Quality defect rate reduced to below 1.5%',
      'Consolidated shipping from multiple factories into single containers',
      'Client grew revenue by 300% over 2 years',
    ],
    industry: 'Home & Furniture',
    region: 'Foshan, Guangdong',
  },
  {
    id: 'sporting-goods-uk',
    category: 'Sporting Goods',
    title: 'UK Distributor Avoids $50K Loss Through Factory Audit',
    challenge: 'A UK sporting goods distributor was about to place a $50K order with a supplier they found on Alibaba. The supplier had great online reviews and responsive communication.',
    approach: 'We conducted an on-site factory audit and discovered the supplier was actually a trading company operating from a small office — they had no factory, no production capability, and were subcontracting to unknown workshops.',
    results: [
      'Prevented a potential $50,000 loss',
      'Found and verified a legitimate ISO-certified manufacturer',
      'Negotiated 15% better pricing than the original quote',
      'First order delivered with zero quality issues',
    ],
    industry: 'Sporting Goods',
    region: 'Ningbo, Zhejiang',
  },
  {
    id: 'beauty-brand-australia',
    category: 'Beauty & Personal Care',
    title: `Australian Beauty Brand's Custom Packaging Success`,
    challenge: 'A clean beauty startup from Australia needed custom packaging for their skincare line — eco-friendly materials, custom molds for bottles, and FDA-compliant printing — all within a tight launch timeline.',
    approach: 'We sourced packaging manufacturers, coordinated custom mold development, managed FDA compliance documentation, and ran production with weekly QC inspections.',
    results: [
      'Custom packaging developed and produced in 8 weeks',
      'Full FDA and Australian TGA compliance achieved',
      '10,000 units delivered on time for product launch',
      'Established long-term packaging supply chain',
    ],
    industry: 'Beauty & Personal Care',
    region: 'Guangzhou, Guangdong',
  },
  {
    id: 'construction-tools',
    category: 'Hardware & Tools',
    title: 'Middle Eastern Construction Firm Standardizes Tool Procurement',
    challenge: 'A construction company in the UAE was buying power tools and hardware from multiple suppliers with no quality consistency, leading to high failure rates on job sites.',
    approach: 'We audited 8 factories across Zhejiang and Jiangsu, created standardized quality specifications, implemented pre-shipment inspection protocols, and consolidated procurement under 2 verified manufacturers.',
    results: [
      'Tool failure rate reduced from 12% to below 1%',
      'Bulk pricing reduced procurement costs by 18%',
      'Standardized spare parts availability across all tools',
      'Annual contract with guaranteed delivery schedules',
    ],
    industry: 'Hardware & Tools',
    region: 'Yongkang, Zhejiang',
  },
  {
    id: 'baby-products-canada',
    category: 'Baby & Children Products',
    title: 'Canadian Brand Achieves Full Safety Compliance for Baby Products',
    challenge: 'A Canadian baby products brand needed suppliers for silicone feeding products that met Health Canada, FDA, and EU safety standards — with full material traceability.',
    approach: 'We identified factories with LFGB and FDA certification, coordinated third-party lab testing for BPA, phthalates, and heavy metals, and set up batch-level traceability systems.',
    results: [
      'All products passed Health Canada, FDA, and EU safety standards',
      'Full material traceability from raw silicone to finished product',
      'Ongoing batch testing protocol established',
      '3 product lines successfully launched in North America',
    ],
    industry: 'Baby & Children Products',
    region: 'Dongguan, Guangdong',
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-wide uppercase mb-4">Case Studies</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Real Results for Real Importers
            </h1>
            <p className="text-xl text-brand-200 leading-relaxed">
              See how we've helped importers from around the world source better, reduce costs, and eliminate risk.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '35+', label: 'Countries Served' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '20+', label: 'Industries Covered' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-brand-600">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-2 bg-brand-600 p-8 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        {cs.category}
                      </span>
                      <h2 className="text-2xl font-bold text-white mb-4 leading-tight">{cs.title}</h2>
                      <div className="text-sm text-brand-200">
                        <span className="font-semibold">Region:</span> {cs.region}
                      </div>
                    </div>
                    <Quote className="w-10 h-10 text-brand-400 mt-6" />
                  </div>
                  <div className="lg:col-span-3 p-8">
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">The Challenge</h3>
                      <p className="text-slate-700 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">Our Approach</h3>
                      <p className="text-slate-700 leading-relaxed">{cs.approach}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Results</h3>
                      <ul className="space-y-2">
                        {cs.results.map((r, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-slate-700 text-sm">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Every project starts with a conversation. Tell us about your product and goals, and we'll outline how we can help.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
