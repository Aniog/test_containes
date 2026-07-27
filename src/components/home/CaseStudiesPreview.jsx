import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'case-1',
    industry: 'Consumer Electronics',
    title: 'LED Lighting Sourcing for European Distributor',
    result: 'Reduced unit cost by 22% while improving quality consistency',
    titleId: 'case-1-title',
    descId: 'case-1-desc',
    imgId: 'case-study-1-img-x1y2z3',
  },
  {
    id: 'case-2',
    industry: 'Home & Garden',
    title: 'Custom Furniture Line for US Retailer',
    result: 'Delivered 3,000 units on time with 99.2% pass rate at QC',
    titleId: 'case-2-title',
    descId: 'case-2-desc',
    imgId: 'case-study-2-img-a4b5c6',
  },
  {
    id: 'case-3',
    industry: 'Health & Beauty',
    title: 'Private Label Skincare for Australian Brand',
    result: 'Found FDA-compliant manufacturer, launched in 8 weeks',
    titleId: 'case-3-title',
    descId: 'case-3-desc',
    imgId: 'case-study-3-img-d7e8f9',
  },
]

const CaseStudiesPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-brand-blue uppercase tracking-wide mb-3">Case Studies</span>
          <h2 id="case-studies-section-title" className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Real Results for Real Buyers
          </h2>
          <p className="text-brand-muted text-lg">
            See how we have helped businesses source successfully from China.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}] [case-studies-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full mb-3">
                  {cs.industry}
                </span>
                <h3 id={cs.titleId} className="text-base font-semibold text-brand-dark mb-2">{cs.title}</h3>
                <p id={cs.descId} className="text-sm text-brand-muted">{cs.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesPreview
