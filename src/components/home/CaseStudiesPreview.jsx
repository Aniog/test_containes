import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'eu-electronics',
    title: 'European Electronics Distributor',
    challenge: 'Needed to find reliable PCB suppliers for a new product line with strict EU compliance requirements.',
    result: 'Identified 3 certified factories, reduced defect rate from 8% to 0.5%, and cut lead time by 30%.',
    tag: 'Electronics',
    imgId: 'case-eu-electronics-v1w2x3',
    titleId: 'case-eu-electronics-title',
    descId: 'case-eu-electronics-desc',
  },
  {
    id: 'us-home-brand',
    title: 'US Home & Garden Brand',
    challenge: 'Struggled with inconsistent quality from existing suppliers and needed to diversify their supply chain.',
    result: 'Verified 5 new suppliers, established a dual-source strategy, and improved on-time delivery to 95%.',
    tag: 'Home & Garden',
    imgId: 'case-us-home-y4z5a6',
    titleId: 'case-us-home-title',
    descId: 'case-us-home-desc',
  },
  {
    id: 'au-apparel',
    title: 'Australian Apparel Retailer',
    challenge: 'Required small MOQs for a new fashion line with tight seasonal deadlines.',
    result: 'Negotiated flexible MOQs, managed production across 2 factories, and delivered 2 weeks ahead of schedule.',
    tag: 'Apparel',
    imgId: 'case-au-apparel-b7c8d9',
    titleId: 'case-au-apparel-title',
    descId: 'case-au-apparel-desc',
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-2">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Real Results for Real Clients
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            See how we've helped businesses across different industries source better from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
            >
              <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-navy/5 text-navy text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {cs.tag}
                </span>
                <h3 id={cs.titleId} className="text-lg font-bold text-slate-900 mb-2">{cs.title}</h3>
                <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed mb-3">
                  <span className="font-medium text-slate-700">Challenge:</span> {cs.challenge}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <span className="font-medium text-green-700">Result:</span> {cs.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-dark transition-colors"
          >
            Read more case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
