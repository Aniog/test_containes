import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const cases = [
  {
    category: 'Electronics',
    title: 'Sourcing PCB Assemblies for a German IoT Startup',
    excerpt: 'How we helped a Berlin-based startup find a certified PCB manufacturer and reduce lead times by 40%.',
  },
  {
    category: 'Industrial',
    title: 'Factory Verification for a UK Hydraulics Distributor',
    excerpt: 'On-site audit revealed capacity issues — we pivoted to a better supplier, saving the client from a costly mistake.',
  },
  {
    category: 'Consumer Goods',
    title: 'Quality Control for a US Home Decor Brand',
    excerpt: 'Implemented multi-stage QC that reduced defect rates from 12% to under 1.5% within three production runs.',
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Real Results for Real Clients
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            See how we have helped businesses around the world source better from China.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((item, i) => (
            <div key={i} className="group rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden hover:shadow-md transition-all">
              <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                <div
                  className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"
                  data-strk-bg-id={`case-preview-${i}`}
                  data-strk-bg={`[case-title-${i}] [case-excerpt-${i}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                />
              </div>
              <div className="p-5 md:p-6">
                <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full mb-3">
                  {item.category}
                </span>
                <h3 id={`case-title-${i}`} className="font-semibold text-gray-900 mb-2 leading-snug">{item.title}</h3>
                <p id={`case-excerpt-${i}`} className="text-sm text-gray-600 leading-relaxed mb-4">{item.excerpt}</p>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Read Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 bg-white text-primary border border-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-light transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}