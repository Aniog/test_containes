import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Retail Chain',
      industry: 'Consumer Goods',
      challenge: 'Needed to identify cost-effective suppliers for private-label home goods while maintaining quality standards.',
      solution: 'Conducted supplier search across 3 provinces, verified 8 factories, managed sample evaluation, and implemented quarterly inspections.',
      result: 'Reduced sourcing costs by 22% while improving product quality scores by 15% over previous suppliers.',
    },
    {
      client: 'US Hardware Importer',
      industry: 'Industrial',
      challenge: 'Previous direct sourcing attempts resulted in quality issues and delivery delays.',
      solution: 'Implemented full verification process, production monitoring, and pre-shipment inspections for all orders.',
      result: 'Successfully onboarded 3 new suppliers with zero quality issues in first year. On-time delivery improved to 97%.',
    },
    {
      client: 'Australian Furniture Brand',
      industry: 'Furniture',
      challenge: 'Long lead times and inconsistent communication with existing suppliers affecting inventory planning.',
      solution: 'Introduced production milestone tracking, weekly progress reports, and consolidated shipping coordination.',
      result: 'Cut average lead times by 35% and improved forecast accuracy through reliable production data.',
    },
    {
      client: 'UK Promotional Products Distributor',
      industry: 'Promotional',
      challenge: 'Needed reliable suppliers for custom-branded merchandise with tight turnaround times.',
      solution: 'Established preferred supplier network, pre-approved sample library, and expedited inspection protocols.',
      result: 'Reduced average order cycle time from 8 weeks to 5 weeks while maintaining brand quality standards.',
    },
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Case Studies</h1>
          <p className="text-lg text-slate-300">Real sourcing projects and measurable outcomes for our clients.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {cases.map((c, idx) => (
          <div key={idx} className="border border-slate-200 rounded-lg p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold">{c.client}</h3>
                <p className="text-sm text-slate-500">{c.industry}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <p className="font-medium text-slate-500 mb-1">Challenge</p>
                <p className="text-slate-700">{c.challenge}</p>
              </div>
              <div>
                <p className="font-medium text-slate-500 mb-1">Solution</p>
                <p className="text-slate-700">{c.solution}</p>
              </div>
              <div>
                <p className="font-medium text-slate-500 mb-1">Result</p>
                <p className="text-slate-700">{c.result}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-50 py-16 text-center">
        <Button asChild>
          <Link to="/contact">Discuss Your Sourcing Project</Link>
        </Button>
      </section>
    </div>
  )
}

export default CaseStudies