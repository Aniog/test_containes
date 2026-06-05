import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    title: 'European Retailer Reduces Costs by 22%',
    industry: 'Home & Garden',
    desc: 'A German home goods retailer needed to source 15 product lines from China. We verified 8 factories, conducted quality inspections, and coordinated consolidated shipping — reducing their landed cost by 22% compared to their previous supplier.',
    result: '22% cost reduction',
    imgQuery: 'retail store home goods furniture European shop',
  },
  {
    title: 'US Brand Launches Custom Product Line',
    industry: 'Promotional Products',
    desc: 'A US corporate gifting company wanted custom-branded products for their clients. We managed the entire process from design adaptation to factory selection, sample approval, and delivery of 50,000 units across 4 product types.',
    result: '50,000 units delivered on time',
    imgQuery: 'custom branded corporate gifts promotional products',
  },
  {
    title: 'Australian Importer Avoids Quality Crisis',
    industry: 'Electronics',
    desc: 'During a pre-shipment inspection for an Australian electronics importer, we discovered a 15% defect rate in a batch of 10,000 units. We negotiated a full rework with the factory before shipping, saving the client from costly returns.',
    result: '15% defects caught before shipping',
    imgQuery: 'electronics quality inspection testing product',
  },
]

const CaseStudiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
            Real Results
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See how we have helped businesses around the world source from China
            more efficiently, with fewer risks and better outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  data-strk-img-id={`case-study-${cs.title.replace(/\s+/g, '-').toLowerCase()}-img-f5t9k`}
                  data-strk-img={`[case-study-${cs.title.replace(/\s+/g, '-').toLowerCase()}-desc]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  className="w-full h-full object-cover"
                />
                <div id={`case-study-${cs.title.replace(/\s+/g, '-').toLowerCase()}-desc`} className="hidden">{cs.imgQuery}</div>
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 text-xs font-semibold text-brand-600 rounded-full">
                    {cs.industry}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cs.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {cs.desc}
                </p>
                <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg">
                  <svg className="w-4 h-4 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-green-700">
                    {cs.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
