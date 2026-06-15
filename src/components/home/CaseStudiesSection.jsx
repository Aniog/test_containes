import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Package, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Electronics Retailer Reduces Costs by 30%',
    client: 'US-based Electronics Retailer',
    category: 'Electronics',
    description: 'We helped a US retailer source LED lighting products directly from verified factories, reducing their procurement costs while maintaining quality standards.',
    results: ['30% cost reduction', 'Verified 3 factories', '500K+ units delivered'],
    image: 'Electronics sourcing success story',
  },
  {
    id: 2,
    title: 'Furniture Brand Ensures Quality Compliance',
    client: 'European Home Furniture Brand',
    category: 'Furniture',
    description: 'Conducted comprehensive factory audits and quality inspections for a European client sourcing home furniture from multiple Chinese manufacturers.',
    results: ['100% quality compliance', '5 factories audited', 'On-time delivery'],
    image: 'Furniture quality inspection case study',
  },
  {
    id: 3,
    title: 'Apparel Company Streamlines Supply Chain',
    client: 'Australian Fashion Brand',
    category: 'Textiles',
    description: 'Helped an Australian fashion brand establish a reliable supply chain for garments, from fabric sourcing to final production monitoring.',
    results: ['3 suppliers sourced', 'Lead time reduced by 20%', 'Consistent quality'],
    image: 'Apparel sourcing and production monitoring',
  },
]

const CaseStudiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real examples of how we have helped businesses successfully source
            from China. See the results we delivered for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Image placeholder */}
              <div
                className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center"
                data-strk-bg-id={`case-study-${study.id}`}
                data-strk-bg={study.image}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="600"
              >
                <Building2 className="text-blue-400" size={48} />
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">
                    {study.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {study.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {study.description}
                </p>

                <div className="border-t pt-4">
                  <p className="text-xs text-gray-500 mb-2">Results:</p>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={14} />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
