import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-distributor',
    title: 'European Electronics Distributor Saves 35% on BOM Costs',
    subtitle: 'Consumer Electronics',
    result: '35% cost reduction across 12 SKUs',
    desc: 'A German distributor of consumer electronics was paying inflated prices through a Hong Kong trading company. We identified 3 direct manufacturers in Shenzhen, negotiated pricing, and set up QC procedures.',
    imgId: 'case-electronics-bg-h9i0j1',
    titleId: 'case-electronics-title',
    subtitleId: 'case-electronics-subtitle',
    descId: 'case-electronics-desc',
  },
  {
    id: 'furniture-brand',
    title: 'UK Furniture Brand Scales from 1 to 15 Product Lines',
    subtitle: 'Home & Furniture',
    result: 'Revenue grew from £200K to £2.8M in 18 months',
    desc: 'A London-based D2C furniture brand needed reliable production for their expanding catalog. We found a factory cluster in Foshan and managed the entire sourcing and QC pipeline.',
    imgId: 'case-furniture-bg-k2l3m4',
    titleId: 'case-furniture-title',
    subtitleId: 'case-furniture-subtitle',
    descId: 'case-furniture-desc',
  },
  {
    id: 'packaging-startup',
    title: 'US Startup Launches Custom Packaging Line in 6 Weeks',
    subtitle: 'Packaging & Printing',
    result: '6 weeks from brief to first delivery',
    desc: 'A California startup needed custom eco-friendly packaging for their subscription box. We sourced a manufacturer in Dongguan, expedited sampling, and managed production under a tight deadline.',
    imgId: 'case-packaging-bg-n5o6p7',
    titleId: 'case-packaging-title',
    subtitleId: 'case-packaging-subtitle',
    descId: 'case-packaging-desc',
  },
]

export default function CaseStudyPreview() {
  return (
    <section className="py-20 md:py-28 bg-white" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Real Results for Real Buyers
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              See how we've helped businesses across industries reduce costs, improve quality,
              and scale their supply chains.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors flex-shrink-0"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
              <div
                className="aspect-[16/9] bg-slate-100"
                data-strk-bg-id={cs.imgId}
                data-strk-bg={`[${cs.descId}] [${cs.subtitleId}] [${cs.titleId}]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
              />
              <div className="p-6">
                <span id={cs.subtitleId} className="text-xs font-semibold text-accent uppercase tracking-wider">{cs.subtitle}</span>
                <h3 id={cs.titleId} className="font-bold text-slate-900 mt-2 mb-3 leading-snug">{cs.title}</h3>
                <p id={cs.descId} className="text-sm text-slate-500 leading-relaxed mb-4">{cs.desc}</p>
                <div className="bg-green-50 border border-green-100 rounded-lg px-4 py-2.5">
                  <span className="text-sm font-semibold text-green-700">{cs.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
