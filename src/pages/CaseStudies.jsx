import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      industry: 'Home & Kitchen',
      challenge: 'Needed to expand product range while maintaining quality standards and competitive pricing across 12 categories.',
      approach: 'Conducted extensive supplier research across 3 provinces, performed 18 factory audits, and implemented a multi-stage QC protocol.',
      results: ['22% reduction in landed costs', 'Zero quality claims in first year', 'Successfully onboarded 7 new suppliers', 'Expanded product range by 40%'],
      timeline: '4 months'
    },
    {
      client: 'US E-commerce Electronics Brand',
      industry: 'Consumer Electronics',
      challenge: 'Rapid growth required new suppliers for 3 product lines within tight seasonal deadlines.',
      approach: 'Leveraged existing supplier relationships and conducted targeted searches. Coordinated sample production and testing across multiple factories simultaneously.',
      results: ['3 qualified suppliers onboarded in 6 weeks', 'First production run delivered on schedule', 'Quality acceptance rate above 98%', 'Established ongoing supplier partnership'],
      timeline: '6 weeks'
    },
    {
      client: 'Australian Apparel Distributor',
      industry: 'Textiles & Apparel',
      challenge: 'Recurring quality issues with existing supplier causing customer returns and damaging brand reputation.',
      approach: 'Audited current supplier operations, identified process gaps, and implemented enhanced QC checkpoints. Also identified backup suppliers.',
      results: ['Return rate reduced from 8% to under 1%', 'Improved communication protocols established', 'Backup supplier qualified and approved', 'Long-term quality agreement signed'],
      timeline: '3 months'
    },
    {
      client: 'Canadian Industrial Equipment Importer',
      industry: 'Industrial Components',
      challenge: 'Needed reliable source for specialized machined components with strict tolerance requirements.',
      approach: 'Identified precision manufacturers with relevant certifications. Conducted capability studies and trial production runs before full order placement.',
      results: ['Supplier qualified for tight tolerance work', 'Consistent quality across 6 production batches', 'Lead time reduced by 3 weeks vs previous source', 'Annual contract established'],
      timeline: '5 months'
    }
  ]

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-slate-300">Real sourcing projects and measurable outcomes for our clients.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {cases.map((item, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div>
                  <div className="text-sky-600 font-medium mb-1">{item.industry}</div>
                  <h3 className="text-2xl font-semibold">{item.client}</h3>
                </div>
                <div className="text-sm text-slate-500 mt-2 md:mt-0">Timeline: {item.timeline}</div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-slate-500">Challenge</h4>
                  <p className="text-slate-600">{item.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-slate-500">Approach</h4>
                  <p className="text-slate-600">{item.approach}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-slate-500">Results</h4>
                  <ul className="space-y-2">
                    {item.results.map((result, i) => (
                      <li key={i} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-emerald-500 flex-shrink-0">✓</span> {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">Ready to achieve similar results for your business?</p>
          <Button asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies