import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      industry: 'Retail / Home Goods',
      challenge: 'High defect rates (12%) on ceramic dinnerware imports from multiple Chinese suppliers. Previous QC was limited to final inspection.',
      approach: 'Implemented a three-stage inspection protocol: pre-production sample approval, mid-production audit, and pre-shipment AQL inspection. Conducted factory capability assessments and established standardized defect classification.',
      results: [
        'Defect rate reduced from 12% to 2.8% within 4 months',
        'Supplier base consolidated from 7 to 3 verified factories',
        'Claim rate dropped 78% year-over-year',
        'Annual savings of approximately €180,000 in quality-related costs',
      ],
      timeline: '6 months from initial engagement to stabilized process',
    },
    {
      client: 'US Industrial Equipment Distributor',
      industry: 'Industrial / B2B Distribution',
      challenge: 'Inconsistent lead times and quality variation on hydraulic fittings and valves. Multiple delayed shipments impacted customer fulfillment.',
      approach: 'Established dedicated supplier management program with weekly production tracking, buffer inventory planning, and consolidated shipping schedules. Introduced material traceability requirements.',
      results: [
        'Average lead time reduced from 68 to 45 days',
        'On-time delivery improved from 71% to 94%',
        'Consolidated 12 suppliers to 5 core partners',
        'Reduced expedited freight costs by 62%',
      ],
      timeline: '9 months including transition period',
    },
    {
      client: 'Australian Consumer Electronics Brand',
      industry: 'Consumer Electronics',
      challenge: 'Needed to identify and qualify OEM suppliers for a new wireless audio product line. Required Bluetooth certification support and competitive pricing.',
      approach: 'Conducted targeted supplier search across 3 provinces. Performed full factory audits including SMT line verification. Coordinated sample development and certification testing.',
      results: [
        '3 qualified OEM suppliers secured with signed agreements',
        'Final unit pricing 18% below initial target',
        'All factories passed Bluetooth SIG qualification audit',
        'First production run completed with 0.9% defect rate',
      ],
      timeline: '14 weeks from briefing to first shipment',
    },
    {
      client: 'UK Contract Furniture Supplier',
      industry: 'Contract Furniture / Hospitality',
      challenge: 'Needed reliable source for custom hotel furniture with strict fire safety compliance (BS 5852) and consistent quality across 800+ room projects.',
      approach: 'Identified and verified 2 specialist manufacturers. Established material specification control, fire testing protocol, and batch sampling procedures. Implemented project-based production scheduling.',
      results: [
        'Successfully delivered 3 hotel projects totaling 2,400 rooms',
        'Zero fire safety compliance issues across all deliveries',
        'Consistent quality score above 97% on client inspections',
        'Established framework agreement for ongoing projects',
      ],
      timeline: 'Ongoing relationship, 18 months to date',
    },
  ]

  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Case Studies</h1>
          <p className="text-xl text-slate-300">Real projects with measurable outcomes. Each case reflects typical challenges and results for our clients.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-20">
          {cases.map((study, idx) => (
            <div key={idx} className="border-b border-slate-200 pb-16 last:border-none last:pb-0">
              <div className="mb-8">
                <div className="text-teal-600 text-sm font-medium mb-2">{study.industry}</div>
                <h2 className="text-3xl font-semibold text-slate-900 mb-2">{study.client}</h2>
                <div className="text-sm text-slate-500">{study.timeline}</div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="mb-8">
                    <div className="font-semibold text-slate-900 mb-3">Challenge</div>
                    <p className="text-slate-600">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-3">Approach</div>
                    <p className="text-slate-600">{study.approach}</p>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-4">Results</div>
                  <ul className="space-y-3">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <span className="text-teal-600 mt-1">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Looking for similar results?</h3>
          <p className="text-slate-600 mb-8">We work with clients across retail, industrial, and contract sectors. Contact us to discuss your sourcing requirements.</p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Start a Conversation <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies