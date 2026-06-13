import React from 'react'
import CTAButton from '../components/CTAButton'

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      category: 'Home & Kitchen',
      challenge: 'Needed to identify cost-effective suppliers for a new kitchenware product line while maintaining quality standards required for European retail.',
      approach: 'Conducted supplier search across three industrial regions, performed factory audits on six candidates, and coordinated sample production from three finalists.',
      results: [
        'Identified supplier with 22% lower unit cost than previous source',
        'Maintained quality rating above 4.5/5 in customer reviews',
        'Established backup supplier for supply chain resilience',
        'Completed onboarding within 8 weeks',
      ],
    },
    {
      client: 'US E-commerce Electronics Brand',
      category: 'Consumer Electronics',
      challenge: 'Required three new suppliers for seasonal product launch with strict timeline and quality specifications.',
      approach: 'Leveraged existing supplier relationships and conducted targeted searches for specialized manufacturers. Coordinated parallel sample production and quality verification.',
      results: [
        'All three suppliers qualified and approved within 6 weeks',
        'Zero quality defects in first production run',
        'Met aggressive launch timeline',
        'Negotiated favorable payment terms',
      ],
    },
    {
      client: 'Australian Industrial Equipment Distributor',
      category: 'Industrial Machinery',
      challenge: 'Recurring quality issues with existing supplier affecting customer satisfaction and warranty claims.',
      approach: 'Conducted root cause analysis at factory, implemented process improvements, and established enhanced quality control checkpoints.',
      results: [
        'Quality defect rate reduced from 8% to under 1%',
        'Warranty claims decreased by 75%',
        'Customer satisfaction scores improved significantly',
        'Supplier relationship strengthened for long-term partnership',
      ],
    },
    {
      client: 'Canadian Furniture Importer',
      category: 'Furniture & Home Decor',
      challenge: 'Expanding product range required new suppliers for upholstered furniture with specific material and compliance requirements.',
      approach: 'Identified manufacturers with relevant certifications, coordinated material sourcing, and managed compliance documentation for Canadian import regulations.',
      results: [
        'Successfully onboarded two new suppliers',
        'All products met Canadian safety standards',
        'Achieved target margins on new product line',
        'Established repeatable sourcing process for future expansion',
      ],
    },
  ]

  return (
    <div>
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Case Studies</h1>
          <p className="text-xl text-gray-300">Real sourcing outcomes from our client partnerships.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {cases.map((study, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg p-10">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="text-xs uppercase tracking-wider bg-gray-100 px-3 py-1 rounded">{study.category}</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">{study.client}</h2>

            <div className="mt-8 grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-3">Challenge</h3>
                <p className="text-gray-600">{study.challenge}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-3">Approach</h3>
                <p className="text-gray-600">{study.approach}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-3">Results</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {study.results.map((result, i) => (
                    <li key={i}>• {result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#F3F4F6] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Your Success Story Starts Here</h2>
          <p className="text-gray-600 mb-8">Contact us to discuss your sourcing requirements.</p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies