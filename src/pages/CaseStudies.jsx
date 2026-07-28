import React from 'react'
import { Link } from 'react-router-dom'

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      industry: 'Retail',
      challenge: 'Needed to replace an unreliable supplier for ceramic dinnerware while maintaining quality and delivery timelines.',
      solution: 'Identified 4 qualified manufacturers, coordinated samples, conducted factory audits, and implemented pre-shipment inspections.',
      result: 'Successfully transitioned 3 product lines to new suppliers. Zero quality complaints in first 12 months. On-time delivery rate improved from 72% to 96%.'
    },
    {
      client: 'US Industrial Equipment Distributor',
      industry: 'Industrial',
      challenge: 'Required custom hydraulic fittings with tight tolerances and consistent quality for B2B customers.',
      solution: 'Verified 3 specialized manufacturers, established quality control protocols, and set up monthly production monitoring.',
      result: 'Secured a supplier capable of meeting ISO 9001 standards. Reduced defect rate from 4.2% to under 0.8%. Annual savings of approximately 18% on procurement costs.'
    },
    {
      client: 'Australian E-commerce Brand',
      industry: 'Consumer Electronics',
      challenge: 'Scaling rapidly but facing inconsistent product quality and communication issues with existing suppliers.',
      solution: 'Implemented structured sourcing process with documented specifications, weekly progress reports, and third-party inspections.',
      result: 'Improved customer satisfaction scores by 34%. Reduced returns due to quality issues by 61%. Enabled successful launch of 12 new SKUs in one year.'
    }
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-slate-400 tracking-wider mb-3">RESULTS</div>
          <h1 className="text-5xl font-semibold mb-6">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real examples of how we've helped companies improve their China sourcing operations.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {cases.map((study, index) => (
          <div key={index} className="border border-gray-200 rounded-2xl p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <div className="font-semibold text-2xl text-slate-900">{study.client}</div>
                <div className="text-slate-500 mt-1">{study.industry}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="uppercase text-xs tracking-widest text-slate-500 mb-2">Challenge</div>
                <p className="text-slate-700">{study.challenge}</p>
              </div>
              <div>
                <div className="uppercase text-xs tracking-widest text-slate-500 mb-2">Solution</div>
                <p className="text-slate-700">{study.solution}</p>
              </div>
              <div>
                <div className="uppercase text-xs tracking-widest text-slate-500 mb-2">Result</div>
                <p className="text-slate-700">{study.result}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Your project could be next</h2>
          <p className="text-lg text-slate-600 mb-8">Every sourcing engagement is different. Let's discuss what success looks like for your business.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies