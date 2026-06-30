import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-retailer',
    title: 'European Electronics Retailer',
    category: 'Consumer Electronics',
    result: '40% cost reduction on smart home product line',
    description: 'Sourced 12 new smart home products from 5 verified suppliers in Shenzhen. Full QC inspection and consolidated shipping reduced logistics costs by 25%.',
  },
  {
    id: 'us-furniture-brand',
    title: 'US Furniture Brand',
    category: 'Home & Garden',
    result: '300+ SKUs launched in 8 months',
    description: 'Identified and audited 8 furniture factories in Guangdong. Managed end-to-end production monitoring and quality control for a full product line expansion.',
  },
  {
    id: 'australian-fashion',
    title: 'Australian Fashion Label',
    category: 'Apparel',
    result: '60% faster sample turnaround',
    description: 'Streamlined sample development process with 3 garment factories. Reduced sampling cycle from 6 weeks to 2 weeks with rigorous quality checks.',
  },
]

export default function CaseStudiesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      // Stock images loaded at runtime
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 text-center mb-4">
          Client Success Stories
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          Real results from real partnerships. See how we&apos;ve helped businesses 
          optimize their China sourcing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all group"
            >
              <div className="h-48 bg-navy-100 flex items-center justify-center">
                <div className="text-navy-400 text-sm font-medium px-4 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-navy-200 rounded-full flex items-center justify-center">
                    <span className="text-navy-500 font-bold text-lg">{cs.category.charAt(0)}</span>
                  </div>
                  <span>{cs.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {cs.result}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{cs.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{cs.description}</p>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors"
                >
                  Read full story <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}