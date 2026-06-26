import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    title: 'US Retailer Saved 32% on Kitchen Products',
    category: 'Home & Kitchen',
    result: 'Reduced unit cost by 32% while maintaining quality standards for a 5,000-unit order.',
    titleId: 'case-us-kitchen-title',
    descId: 'case-us-kitchen-desc',
    imgId: 'case-us-kitchen-img',
  },
  {
    title: 'German Brand Launched LED Product Line in 8 Weeks',
    category: 'Electronics',
    result: 'From first sample to container shipment in under 8 weeks with zero defective units.',
    titleId: 'case-german-led-title',
    descId: 'case-german-led-desc',
    imgId: 'case-german-led-img',
  },
  {
    title: 'Australian Importer Consolidated 5 Suppliers Into 1',
    category: 'Industrial',
    result: 'Streamlined supply chain, reduced logistics costs by 40%, and simplified quality oversight.',
    titleId: 'case-au-industrial-title',
    descId: 'case-au-industrial-desc',
    imgId: 'case-au-industrial-img',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Case Studies</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-text">
              Real Results for Real Buyers
            </h2>
            <p className="mt-3 text-text-muted text-base max-w-lg">
              See how we have helped businesses around the world source smarter, save money, and reduce risk.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-light transition-colors shrink-0"
          >
            View all case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <Link
              key={item.title}
              to="/case-studies"
              className="group block bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div
                className="aspect-[16/10] bg-surface-alt relative overflow-hidden"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{item.category}</span>
                <h3 id={item.titleId} className="mt-2 font-heading font-bold text-base text-text mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-text-muted text-sm leading-relaxed">{item.result}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
