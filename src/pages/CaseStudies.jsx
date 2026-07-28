import { Link } from 'react-router-dom'

export default function CaseStudies() {
  const cases = [
    {
      id: 'retail-kitchen',
      client: 'European Retail Chain',
      industry: 'Retail / Home Goods',
      product: 'Kitchen Appliances',
      challenge: 'Needed to source 12 SKUs of small kitchen appliances with strict quality requirements and competitive pricing for a 40,000-unit annual order.',
      approach: 'Identified 6 potential suppliers, conducted full audits on 3, coordinated sample development, and implemented a 3-stage inspection protocol.',
      results: [
        '23% reduction in landed cost vs. previous supplier',
        'Quality pass rate improved from 91% to 98.4%',
        'Lead time reduced from 75 to 58 days',
        'Established 2 backup suppliers for risk mitigation'
      ],
      timeline: '14 weeks from initial inquiry to first shipment'
    },
    {
      id: 'electronics-brand',
      client: 'US E-commerce Brand',
      industry: 'Consumer Electronics',
      product: 'Bluetooth Audio Products',
      challenge: 'Rapid growth required scaling from 3 to 8 suppliers while maintaining consistent quality across wireless speakers and headphones.',
      approach: 'Developed supplier qualification framework, conducted quarterly audits, implemented inline production monitoring, and established shared quality standards.',
      results: [
        '4 new verified suppliers onboarded within 6 months',
        '99.2% average quality acceptance rate',
        'Reduced inspection costs by 18% through process improvements',
        'Successfully passed 3 third-party compliance audits'
      ],
      timeline: 'Ongoing partnership, 18 months'
    },
    {
      id: 'industrial-distributor',
      client: 'Australian Industrial Distributor',
      industry: 'Industrial / B2B',
      product: 'Hand Tools & Safety Equipment',
      challenge: 'Inconsistent quality and delivery delays from existing suppliers affecting customer satisfaction and contract renewals.',
      approach: 'Conducted comprehensive supplier review, replaced 2 underperforming suppliers, implemented production scheduling system, and added pre-shipment inspections.',
      results: [
        'On-time delivery improved from 78% to 96%',
        'Customer complaints reduced by 67%',
        'Lead time shortened from 90 to 62 days average',
        'Renewed 3 major distribution contracts'
      ],
      timeline: '22 weeks for full transition'
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-semibold text-[#0F2942] mb-4">Case Studies</h1>
        <p className="text-xl text-[#64748B]">Real examples of how we help clients improve their China sourcing operations.</p>
      </div>

      <div className="space-y-16">
        {cases.map((c, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
              <div>
                <div className="text-sm text-[#3A8A7B] font-medium mb-1">{c.industry}</div>
                <h2 className="text-2xl font-semibold text-[#0F2942]">{c.client}</h2>
                <p className="text-[#64748B] mt-1">{c.product}</p>
              </div>
              <div className="mt-4 md:mt-0 text-sm text-[#64748B] md:text-right">
                <div className="font-medium text-[#0F2942]">Timeline</div>
                {c.timeline}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-[#0F2942] mb-2 text-sm uppercase tracking-wide">Challenge</h4>
                <p className="text-[#64748B] text-sm">{c.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0F2942] mb-2 text-sm uppercase tracking-wide">Approach</h4>
                <p className="text-[#64748B] text-sm">{c.approach}</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0F2942] mb-2 text-sm uppercase tracking-wide">Results</h4>
                <ul className="space-y-1.5">
                  {c.results.map((r, i) => (
                    <li key={i} className="text-sm text-[#1E293B] flex gap-2">
                      <span className="text-[#3A8A7B]">•</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-[#F8FAFC] rounded-xl p-10">
        <h3 className="text-xl font-semibold text-[#0F2942] mb-2">Your results may vary based on project scope.</h3>
        <p className="text-[#64748B] mb-6">Contact us to discuss how we can support your specific sourcing requirements.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#3A8A7B] text-white font-medium rounded-lg hover:bg-[#2F6F63]">
          Start a Conversation
        </Link>
      </div>
    </div>
  )
}