import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Retail Chain',
      industry: 'Retail',
      challenge: 'Needed to source 12 product categories from China with consistent quality and competitive pricing while reducing sourcing cycle time.',
      approach: 'Implemented a structured supplier evaluation process with standardized quality criteria. Established inspection protocols at three production stages.',
      results: [
        '40% reduction in sourcing cycle time',
        'Zero quality claims across 18 months',
        '12 qualified suppliers onboarded',
        'Consistent pricing across product lines'
      ]
    },
    {
      client: 'US Hardware Distributor',
      industry: 'Distribution',
      challenge: 'Required new suppliers for fasteners and hardware components with improved pricing while maintaining existing quality standards.',
      approach: 'Conducted comprehensive supplier search across multiple regions. Performed detailed factory audits focusing on production capabilities and quality systems.',
      results: [
        '22% cost reduction on key SKUs',
        '3 new qualified suppliers identified',
        'Improved lead times by 15%',
        'Enhanced product specifications documentation'
      ]
    },
    {
      client: 'Australian Importer',
      industry: 'Import/Wholesale',
      challenge: 'Experienced recurring quality issues with previous suppliers and needed a systematic approach to quality assurance.',
      approach: 'Developed customized inspection checklists for each product category. Implemented pre-shipment inspection protocols with photographic documentation.',
      results: [
        'Zero quality claims over 18 months',
        'Improved supplier communication',
        'Standardized quality documentation',
        'Reduced returns by 95%'
      ]
    },
    {
      client: 'UK E-commerce Brand',
      industry: 'E-commerce',
      challenge: 'Rapid growth required scaling supplier base while maintaining product quality and delivery reliability.',
      approach: 'Created a supplier onboarding framework with clear quality gates. Established weekly production reporting and milestone tracking.',
      results: [
        'Supplier base expanded from 5 to 18',
        'On-time delivery rate improved to 97%',
        'Quality acceptance rate reached 99%',
        'Sourcing capacity doubled within 12 months'
      ]
    }
  ]

  return (
    <div>
      <section className="bg-[#0F172A] text-white py-16">
        <div className="container">
          <h1 className="text-5xl mb-4 text-white">Case Studies</h1>
          <p className="text-xl text-[#94A3B8] max-w-2xl">
            Results from recent client engagements across different industries and product categories.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="space-y-12">
            {cases.map((study, index) => (
              <div key={index} className="card">
                <div className="mb-6">
                  <span className="text-sm text-[#1E40AF] font-medium">{study.industry}</span>
                  <h2 className="text-2xl mt-1">{study.client}</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold mb-2 text-[#334155]">Challenge</h4>
                    <p className="text-[#64748B] text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[#334155]">Approach</h4>
                    <p className="text-[#64748B] text-sm">{study.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[#334155]">Results</h4>
                    <ul className="space-y-1 text-sm text-[#64748B]">
                      {study.results.map((result, i) => (
                        <li key={i}>• {result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-t border-[#E2E8F0]">
        <div className="container text-center">
          <h2 className="text-3xl mb-4">Your Project Could Be Next</h2>
          <p className="text-[#64748B] mb-6 max-w-xl mx-auto">
            Contact us to discuss how we can support your sourcing requirements.
          </p>
          <Link to="/contact">
            <Button>Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies