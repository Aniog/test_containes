import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Retail Chain',
      industry: 'Home Goods',
      challenge: 'Needed to source 15 SKUs of kitchenware with strict quality requirements and tight delivery timeline.',
      solution: 'Identified 4 qualified factories, conducted audits, managed sample approval, and coordinated production across 3 facilities.',
      results: 'Delivered 12,000 units on schedule with 99.2% first-pass quality rate. 35% cost reduction vs. previous supplier.'
    },
    {
      client: 'US E-commerce Brand',
      industry: 'Consumer Electronics',
      challenge: 'Required reliable supplier for private-label Bluetooth speakers with custom packaging.',
      solution: 'Verified 3 audio manufacturers, coordinated ODM development, managed quality inspections at each production stage.',
      results: 'Successfully launched 8 product variants. Repeat orders increased 4x within 18 months.'
    },
    {
      client: 'Australian Distributor',
      industry: 'Industrial Equipment',
      challenge: 'Sourcing safety equipment for mining sector with compliance documentation requirements.',
      solution: 'Located certified manufacturers, verified certifications, coordinated third-party testing, managed export documentation.',
      results: 'Approved supplier list established. First order of 5,000 units delivered with full compliance documentation.'
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#0F2942] mb-4">Case Studies</h1>
        <p className="text-[#475569] max-w-2xl mx-auto">Real results from sourcing projects we've completed</p>
      </div>

      <div className="space-y-8 mb-12">
        {cases.map((caseStudy, index) => (
          <div key={index} className="bg-white p-8 rounded-lg border border-[#E2E8F0]">
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="inline-block px-3 py-1 bg-[#F8FAFC] text-[#475569] text-sm rounded">{caseStudy.industry}</span>
            </div>
            <h3 className="text-xl font-semibold text-[#0F2942] mb-2">{caseStudy.client}</h3>
            <div className="space-y-4 text-[#475569]">
              <div>
                <span className="font-medium text-[#0F2942]">Challenge: </span>
                {caseStudy.challenge}
              </div>
              <div>
                <span className="font-medium text-[#0F2942]">Solution: </span>
                {caseStudy.solution}
              </div>
              <div>
                <span className="font-medium text-[#0F2942]">Results: </span>
                {caseStudy.results}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/contact"><Button size="lg">Start Your Project</Button></Link>
      </div>
    </div>
  )
}

export default CaseStudies