import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SectionHeading from '@/components/SectionHeading'

const caseStudies = [
  {
    id: 1,
    client: 'European Home Goods Retailer',
    industry: 'Retail / Consumer Goods',
    challenge: 'High defect rates (8%) on imported kitchen products were damaging brand reputation and increasing returns.',
    solution: 'Implemented a three-stage quality control process (pre-production, during production, pre-shipment) and worked with suppliers on process improvements.',
    results: [
      'Defect rate reduced from 8% to under 1%',
      'Return rate dropped 70%',
      'Supplier quality scores improved across 12 factories',
      'Annual savings of approximately €180,000 in returns and rework'
    ],
    scope: 'Supplier audits, QC protocol design, ongoing inspection management, supplier development'
  },
  {
    id: 2,
    client: 'US Industrial Equipment Distributor',
    industry: 'Industrial / B2B',
    challenge: 'Long and unpredictable lead times were causing stockouts and lost sales. Multiple suppliers with inconsistent performance.',
    solution: 'Consolidated sourcing to three verified suppliers, implemented production monitoring, and established buffer stock agreements.',
    results: [
      'Average lead time reduced by 35%',
      'On-time delivery improved from 72% to 96%',
      'Inventory carrying costs reduced 22%',
      'Simplified supplier management from 14 to 3 vendors'
    ],
    scope: 'Supplier consolidation, production scheduling, logistics coordination, performance monitoring'
  },
  {
    id: 3,
    client: 'Australian Consumer Brand',
    industry: 'Consumer Products',
    challenge: 'New brand entering market needed reliable manufacturing partners for four product categories with no prior China experience.',
    solution: 'Full end-to-end sourcing support: supplier identification, verification, sample management, contract negotiation, and first production oversight.',
    results: [
      'Successfully launched 4 product lines on schedule',
      'All suppliers passed initial quality audits',
      'First container delivered with zero quality issues',
      'Established repeatable sourcing process for future products'
    ],
    scope: 'Complete sourcing program, supplier development, quality systems, logistics setup'
  },
  {
    id: 4,
    client: 'Canadian Automotive Parts Importer',
    industry: 'Automotive',
    challenge: 'Needed to qualify new suppliers for aftermarket brake components while maintaining strict quality and certification requirements.',
    solution: 'Conducted detailed supplier audits, coordinated third-party testing, and established ongoing quality monitoring protocols.',
    results: [
      '3 suppliers qualified and approved',
      'All products met required certifications (DOT, ECE)',
      'Cost reduction of 18% vs previous supplier',
      'Established ongoing inspection program'
    ],
    scope: 'Supplier audits, certification support, sample evaluation, production monitoring'
  }
]

const CaseStudies = () => {
  return (
    <div>
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[2px] uppercase text-slate-400 mb-3">CLIENT RESULTS</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real results for real buyers. These case studies represent typical outcomes from our work.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-slate-200 overflow-hidden">
              <CardHeader className="bg-slate-50 border-b">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{study.client}</CardTitle>
                    <p className="text-sm text-slate-500 mt-1">{study.industry}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-sm tracking-wider text-slate-500 mb-2">THE CHALLENGE</h4>
                    <p className="text-slate-700 mb-6">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-sm tracking-wider text-slate-500 mb-2">OUR APPROACH</h4>
                    <p className="text-slate-700">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm tracking-wider text-slate-500 mb-2">RESULTS</h4>
                    <ul className="space-y-2 mb-6">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-emerald-600 mt-0.5">→</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold text-sm tracking-wider text-slate-500 mb-2">SCOPE OF WORK</h4>
                    <p className="text-sm text-slate-600">{study.scope}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">Ready to discuss your project?</h2>
          <p className="text-slate-600 mb-6">Every sourcing situation is different. Let's talk about what you need.</p>
          <Link to="/contact">
            <Button size="lg">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
