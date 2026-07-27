import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Retail Chain',
      industry: 'Retail',
      challenge: 'Needed to source 12 product categories from reliable suppliers while maintaining consistent quality standards across all items.',
      approach: 'Conducted comprehensive supplier search across multiple regions, performed factory audits on 25 potential suppliers, and established quality inspection protocols.',
      results: ['60% reduction in sourcing timeline', '12 qualified suppliers onboarded', 'Zero quality issues in first year', 'Consistent pricing across categories'],
      timeline: '4 months'
    },
    {
      client: 'US Industrial Distributor',
      industry: 'Industrial',
      challenge: 'Required cost reduction on existing product lines without compromising specifications or delivery reliability.',
      approach: 'Analyzed current supply chain, identified alternative suppliers with comparable capabilities, negotiated improved terms, and implemented quality verification processes.',
      results: ['25% cost reduction achieved', '3 new suppliers qualified', 'Maintained specification compliance', 'Improved delivery reliability'],
      timeline: '6 months'
    },
    {
      client: 'Australian E-commerce Brand',
      industry: 'E-commerce',
      challenge: 'Expanding product range to 50+ SKUs required reliable supply chain with consistent quality and on-time delivery.',
      approach: 'Developed supplier portfolio across multiple categories, implemented production monitoring system, established inspection checkpoints, and coordinated logistics.',
      results: ['50+ SKUs successfully sourced', '95%+ on-time delivery rate', 'Consistent quality standards', 'Scalable supply chain established'],
      timeline: '8 months'
    },
    {
      client: 'Canadian Hardware Importer',
      industry: 'Hardware',
      challenge: 'Needed to verify new suppliers for private label products and ensure compliance with North American safety standards.',
      approach: 'Performed detailed factory audits focusing on quality systems and compliance documentation, coordinated third-party testing, and established ongoing monitoring.',
      results: ['8 suppliers verified and approved', 'All products met safety standards', 'Clear compliance documentation', 'Repeat order process streamlined'],
      timeline: '5 months'
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Real sourcing projects and outcomes for our clients.</p>
      </div>

      <div className="space-y-16">
        {cases.map((study, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-10">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-4 py-1 bg-slate-100 text-slate-700 rounded text-sm">{study.industry}</span>
              <span className="px-4 py-1 bg-slate-100 text-slate-700 rounded text-sm">{study.timeline}</span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">{study.client}</h2>
            <div className="space-y-6 mt-8">
              <div>
                <div className="font-semibold text-slate-900 mb-2">Challenge</div>
                <p className="text-slate-600">{study.challenge}</p>
              </div>
              <div>
                <div className="font-semibold text-slate-900 mb-2">Approach</div>
                <p className="text-slate-600">{study.approach}</p>
              </div>
              <div>
                <div className="font-semibold text-slate-900 mb-2">Results</div>
                <ul className="grid md:grid-cols-2 gap-2 text-slate-600">
                  {study.results.map((result, j) => (
                    <li key={j}>• {result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-600 mb-6">Interested in similar results for your business?</p>
        <Link to="/contact"><Button size="lg">Start Your Project</Button></Link>
      </div>
    </div>
  )
}

export default CaseStudies