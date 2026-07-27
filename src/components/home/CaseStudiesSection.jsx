import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'

const caseStudies = [
  {
    company: 'EuroTech GmbH',
    industry: 'Consumer Electronics',
    country: 'Germany',
    challenge: 'Needed a reliable supplier for custom Bluetooth speakers with specific quality requirements.',
    result: 'Found and verified a factory in Shenzhen. Saved 35% compared to previous supplier. Product launched on time.',
    metric: '35% cost savings',
  },
  {
    company: 'Pacific Home Goods',
    industry: 'Home & Kitchen',
    country: 'Australia',
    challenge: 'Required stainless steel kitchenware supplier with FDA compliance for export to Australia.',
    result: 'Audited 5 factories, selected one with ISO and FDA certifications. 50,000 units delivered defect-free.',
    metric: '50,000 units delivered',
  },
  {
    company: 'Atlas Auto Parts',
    industry: 'Automotive',
    country: 'UAE',
    challenge: 'Looking for automotive LED lighting manufacturers with competitive pricing for Middle East market.',
    result: 'Secured partnership with 3 verified factories. Production monitoring reduced defect rate to under 0.5%.',
    metric: '< 0.5% defect rate',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            Case Studies
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Real results from real partnerships. See how we have helped buyers source successfully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 lg:p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-navy-600 bg-navy-50 px-2.5 py-1 rounded-full">
                    {cs.industry}
                  </span>
                  <span className="text-xs text-gray-500">{cs.country}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-700 mb-3">{cs.company}</h3>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Challenge</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{cs.challenge}</p>
                </div>
                <div className="mb-4 flex-1">
                  <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">Result</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{cs.result}</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <span className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-3 py-1.5 rounded-lg">
                    {cs.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-500 transition-colors"
          >
            View All Case Studies
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}