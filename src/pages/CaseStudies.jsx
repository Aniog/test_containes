import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CaseStudies() {
  const cases = [
    {
      client: 'European Home Retail Chain',
      category: 'Home Textiles',
      challenge: 'High defect rates (8%) on imported bedding products were causing returns and damaging brand reputation.',
      approach: 'Implemented a three-stage QC process including fabric inspection, in-line checks, and pre-shipment verification with photo documentation.',
      result: 'Defect rate reduced to under 1%. Return rate dropped 85%. Client expanded sourcing volume by 40% within 12 months.',
      timeline: '6 months'
    },
    {
      client: 'US E-commerce Electronics Brand',
      category: 'Consumer Electronics',
      challenge: 'Needed to diversify from a single supplier and reduce unit costs while maintaining quality standards.',
      approach: 'Conducted competitive supplier search across three provinces, performed full factory audits, and negotiated volume pricing.',
      result: 'Onboarded three new qualified suppliers. Achieved 22% average cost reduction. Improved lead time consistency.',
      timeline: '4 months'
    },
    {
      client: 'Australian Furniture Distributor',
      category: 'Furniture',
      challenge: 'First-time importer with no prior China sourcing experience. Concerned about quality, logistics, and customs compliance.',
      approach: 'Full-service engagement including supplier selection, contract review, production monitoring, and end-to-end logistics coordination.',
      result: 'Successful first container delivery with zero customs delays. Zero quality claims in first year. Now sourcing 4 product lines.',
      timeline: '8 months'
    },
    {
      client: 'Canadian Promotional Products Company',
      category: 'Promotional Merchandise',
      challenge: 'Seasonal rush orders with tight deadlines were frequently delayed due to poor supplier communication.',
      approach: 'Established dedicated production calendar, weekly milestone reporting, and buffer inventory planning with two backup suppliers.',
      result: 'On-time delivery improved from 65% to 96%. Rush order capacity increased without premium pricing.',
      timeline: 'Ongoing (18 months)'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-semibold mb-4">Case Studies</h1>
        <p className="text-lg text-slate-600">Selected examples of sourcing projects we have managed for clients across different industries and regions.</p>
      </div>

      <div className="space-y-10">
        {cases.map((study, idx) => (
          <div key={idx} className="border border-slate-200 rounded-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <div className="text-xs uppercase tracking-[2px] text-slate-500 mb-2">{study.category}</div>
                <h2 className="text-2xl font-semibold">{study.client}</h2>
              </div>
              <div className="text-sm text-slate-500 md:text-right">Timeline: {study.timeline}</div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <div className="font-medium text-slate-900 mb-2">Challenge</div>
                <p className="text-slate-600">{study.challenge}</p>
              </div>
              <div>
                <div className="font-medium text-slate-900 mb-2">Approach</div>
                <p className="text-slate-600">{study.approach}</p>
              </div>
              <div>
                <div className="font-medium text-slate-900 mb-2">Result</div>
                <p className="text-slate-600">{study.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-600 mb-4">Every sourcing project is different. Contact us to discuss how we can support your specific requirements.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
          Start a conversation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}