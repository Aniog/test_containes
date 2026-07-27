import React from 'react'
import { Link } from 'react-router-dom'

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      industry: 'Retail',
      challenge: 'Needed to expand product range with 12 new SKUs while maintaining existing quality standards and delivery timelines.',
      approach: 'Conducted supplier search across 3 provinces, performed 8 factory audits, and coordinated sample development with 4 shortlisted manufacturers.',
      results: 'Selected 2 suppliers. Achieved 18% cost reduction versus previous sourcing. Zero quality issues across first 3 production runs. Lead time reduced from 75 to 52 days.',
      timeline: '14 weeks from inquiry to first shipment',
    },
    {
      client: 'US Industrial Equipment Distributor',
      industry: 'Industrial',
      challenge: 'Required alternative supplier for critical component after primary manufacturer raised prices 35%.',
      approach: 'Identified 6 potential suppliers, conducted detailed capability audits, and managed sample iteration process over 6 weeks.',
      results: 'Qualified new supplier with equivalent quality at 22% lower cost. Established safety stock program. Improved delivery reliability from 78% to 96%.',
      timeline: '10 weeks to full production transition',
    },
    {
      client: 'Australian E-commerce Brand',
      industry: 'Consumer Goods',
      challenge: 'Scaling from 3 to 18 SKUs required reliable supply chain with consistent quality and communication.',
      approach: 'Implemented structured supplier onboarding process, established inspection protocols, and created weekly reporting framework.',
      results: 'Successfully launched 15 new products. Maintained 99.2% quality acceptance rate over 18 months. Reduced communication response time from 5 days to 24 hours.',
      timeline: 'Ongoing partnership, 24 months',
    },
    {
      client: 'Canadian Promotional Products Company',
      industry: 'Promotional',
      challenge: 'Seasonal demand spikes required flexible capacity with consistent branding quality across multiple product types.',
      approach: 'Developed relationships with 3 complementary suppliers, created standardized quality checklists, and established pre-season capacity reservations.',
      results: 'Successfully managed 3x volume increase during peak season. Consistent brand quality across all products. Reduced rush order costs by 40%.',
      timeline: '12 weeks initial setup, ongoing seasonal support',
    },
  ]

  return (
    <div>
      <section className="bg-[#F8FAFC] section-padding">
        <div className="container max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-[#475569]">
            Real results from client sourcing projects.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            {cases.map((study, index) => (
              <div key={index} className="card">
                <div className="mb-6">
                  <div className="font-semibold text-2xl mb-1">{study.client}</div>
                  <div className="text-sm text-[#1E40AF]">{study.industry} • {study.timeline}</div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-sm font-semibold text-[#475569] mb-2">CHALLENGE</div>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#475569] mb-2">APPROACH</div>
                    <p className="text-sm">{study.approach}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#475569] mb-2">RESULTS</div>
                    <p className="text-sm">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC] text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Your Project Could Be Next</h2>
          <p className="text-lg text-[#475569] mb-8 max-w-xl mx-auto">
            Contact us to discuss how we can support your sourcing objectives.
          </p>
          <Link to="/contact" className="btn-primary">Start a Conversation</Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies