import { Link } from 'react-router-dom'
import { Building2, Package, CheckCircle, ChevronRight } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Electronics Retailer Reduces Costs by 30%',
    client: 'US-based Electronics Retailer',
    category: 'Electronics',
    description: 'We helped a US retailer source LED lighting products directly from verified factories, reducing their procurement costs while maintaining quality standards. The client was struggling with high prices from their existing supplier and inconsistent quality.',
    challenge: 'The client was paying 40% above market price and experiencing quality issues with their existing supplier. They needed to find reliable factories that could meet their quality standards at competitive prices.',
    solution: 'We identified 3 verified LED lighting manufacturers, conducted factory audits, negotiated pricing, and implemented quality inspections. We also helped optimize their packaging to reduce shipping costs.',
    results: ['30% cost reduction', 'Verified 3 factories', '500K+ units delivered', 'Zero quality complaints', 'Improved packaging efficiency'],
    image: 'Electronics retailer LED lighting sourcing success',
  },
  {
    id: 2,
    title: 'Furniture Brand Ensures Quality Compliance',
    client: 'European Home Furniture Brand',
    category: 'Furniture',
    description: 'Conducted comprehensive factory audits and quality inspections for a European client sourcing home furniture from multiple Chinese manufacturers. The client needed to ensure compliance with European quality and safety standards.',
    challenge: 'The client needed to source furniture from multiple factories but lacked the resources to verify each factory and ensure consistent quality across suppliers.',
    solution: 'We conducted on-site factory audits for 5 potential suppliers, implemented during-production inspections, and performed pre-shipment quality checks. We also helped the client establish clear quality specifications.',
    results: ['100% quality compliance', '5 factories audited', 'On-time delivery', 'Consistent quality across suppliers', 'Established quality standards'],
    image: 'European furniture brand quality compliance case study',
  },
  {
    id: 3,
    title: 'Apparel Company Streamlines Supply Chain',
    client: 'Australian Fashion Brand',
    category: 'Textiles',
    description: 'Helped an Australian fashion brand establish a reliable supply chain for garments, from fabric sourcing to final production monitoring. The client was experiencing delays and communication issues with their existing suppliers.',
    challenge: 'The client faced frequent production delays, quality inconsistencies, and communication barriers with their existing suppliers in China.',
    solution: 'We helped identify reliable garment manufacturers, established clear communication channels, implemented production monitoring, and coordinated shipping. We also helped source high-quality fabrics at better prices.',
    results: ['3 suppliers sourced', 'Lead time reduced by 20%', 'Consistent quality', 'Improved communication', 'Better fabric pricing'],
    image: 'Australian fashion brand apparel sourcing supply chain',
  },
  {
    id: 4,
    title: 'Auto Parts Distributor Expands Product Line',
    client: 'Canadian Auto Parts Distributor',
    category: 'Automotive',
    description: 'Supported a Canadian distributor in expanding their product line by sourcing new auto parts from certified manufacturers. We helped them identify reliable suppliers and ensure quality compliance.',
    challenge: 'The client wanted to expand their product line but lacked knowledge of the Chinese auto parts market and needed to ensure all parts met industry certifications.',
    solution: 'We researched the market, identified certified auto parts manufacturers, verified their certifications, and coordinated sample testing. We also negotiated favorable pricing and payment terms.',
    results: ['15 new products sourced', 'All certifications verified', '20% better pricing', 'Reliable supply chain', 'Ongoing quality monitoring'],
    image: 'Canadian auto parts distributor sourcing success story',
  },
]

const CaseStudiesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Real examples of how we have helped businesses successfully source
              from China. See the results we delivered for our clients across
              different industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-16">
          {caseStudies.map((study, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={study.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12`}
              >
                {/* Image Placeholder */}
                <div className="flex-1">
                  <div
                    className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center"
                    data-strk-bg-id={`case-study-detail-${study.id}`}
                    data-strk-bg={study.image}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  >
                    <Building2 className="text-blue-300" size={64} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded mr-3">
                      {study.category}
                    </span>
                    <span className="text-sm text-gray-500">{study.client}</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {study.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Results:</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a free consultation. Let us help you achieve
            similar results for your sourcing project.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Get a Free Sourcing Quote
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage
