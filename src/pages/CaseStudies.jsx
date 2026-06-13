import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      industry: 'Retail',
      challenge: 'Needed to identify 5-7 reliable suppliers for seasonal home decor products with strict quality standards and competitive pricing.',
      approach: 'Conducted supplier search across 3 provinces, performed factory audits on 12 candidates, coordinated sample evaluation from 6 suppliers.',
      results: [
        'Identified 6 qualified suppliers',
        'Achieved 23% cost reduction vs. previous sourcing',
        'Established quality inspection protocol',
        'First order delivered on schedule'
      ],
      timeline: '8 weeks'
    },
    {
      client: 'US Industrial Equipment Distributor',
      industry: 'Industrial',
      challenge: 'Required new suppliers for specialized machinery components with specific technical specifications and certification requirements.',
      approach: 'Targeted suppliers with relevant certifications, conducted technical capability assessments, coordinated sample production and testing.',
      results: [
        'Established relationships with 3 new suppliers',
        'All suppliers met technical specifications',
        'Obtained required certifications',
        'Reduced lead time by 2 weeks'
      ],
      timeline: '12 weeks'
    },
    {
      client: 'Australian Consumer Products Brand',
      industry: 'Consumer Goods',
      challenge: 'Experiencing quality issues with existing suppliers and needed to improve quality control processes while maintaining cost targets.',
      approach: 'Implemented multi-stage inspection program, trained supplier quality teams, established ongoing monitoring protocols.',
      results: [
        'Quality pass rate improved from 94% to 99.2%',
        'Reduced returns by 78%',
        'Maintained existing cost structure',
        'Implemented sustainable quality system'
      ],
      timeline: '6 weeks'
    },
    {
      client: 'Canadian E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'Rapid growth required scaling supplier base while maintaining product quality and delivery reliability across multiple categories.',
      approach: 'Developed supplier onboarding process, created standardized quality documentation, established logistics coordination procedures.',
      results: [
        'Added 8 new suppliers across 4 categories',
        'Maintained 98% on-time delivery rate',
        'Reduced per-unit sourcing costs by 15%',
        'Created repeatable sourcing framework'
      ],
      timeline: '16 weeks'
    },
  ]

  return (
    <div>
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Case Studies</h1>
          <p className="text-xl text-[#94A3B8]">Examples of sourcing projects and outcomes for our clients.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {cases.map((study, index) => (
            <div key={index} className="border border-[#E2E8F0] rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-1">{study.client}</h2>
                  <span className="text-sm text-[#0D9488]">{study.industry}</span>
                </div>
                <span className="text-sm text-[#64748B] mt-2 md:mt-0">Timeline: {study.timeline}</span>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-[#64748B]">Challenge</h4>
                  <p className="text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-[#64748B]">Approach</h4>
                  <p className="text-sm">{study.approach}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-[#64748B]">Results</h4>
                  <ul className="space-y-1 text-sm">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#0D9488] mt-1">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Have a Sourcing Project?</h2>
          <p className="text-[#64748B] mb-6">Contact us to discuss how we can support your sourcing requirements.</p>
          <Button asChild>
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies