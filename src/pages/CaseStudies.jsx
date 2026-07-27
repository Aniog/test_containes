import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      industry: 'Home & Garden',
      challenge: 'Needed to identify 3-5 reliable furniture suppliers with consistent quality and competitive pricing for seasonal product launches.',
      approach: 'Conducted supplier search across 4 provinces, performed 8 factory audits, and coordinated sample production from 4 shortlisted suppliers.',
      results: [
        'Identified 4 verified suppliers meeting quality and pricing targets',
        'Reduced average unit cost by 23% compared to previous sourcing',
        'Established quality inspection protocol reducing defect rate to under 2%',
        'First container shipped within 9 weeks of project start'
      ],
      timeline: '9 weeks to first shipment'
    },
    {
      client: 'US E-commerce Electronics Brand',
      industry: 'Consumer Electronics',
      challenge: 'Expanding product line required onboarding multiple new accessory suppliers while maintaining brand quality standards.',
      approach: 'Developed supplier qualification criteria, performed remote and on-site verifications, and implemented a multi-stage quality inspection process.',
      results: [
        'Successfully onboarded 4 new suppliers across 3 product categories',
        'All suppliers passed initial quality audits with scores above 85%',
        'Established ongoing supplier performance monitoring system',
        'Reduced quality-related returns by 40% within first 6 months'
      ],
      timeline: '6 weeks for supplier onboarding'
    },
    {
      client: 'Australian Industrial Equipment Distributor',
      industry: 'Industrial Equipment',
      challenge: 'Long lead times and inconsistent delivery were affecting customer satisfaction and inventory planning.',
      approach: 'Analyzed existing supply chain, identified bottlenecks, and worked with suppliers to optimize production scheduling and logistics.',
      results: [
        'Reduced average lead time from 90 to 65 days',
        'Improved on-time delivery rate from 72% to 94%',
        'Negotiated volume-based pricing reducing costs by 11%',
        'Implemented production milestone tracking for better forecasting'
      ],
      timeline: '4 months for full optimization'
    },
    {
      client: 'UK Fashion Accessories Importer',
      industry: 'Textiles & Apparel',
      challenge: 'Needed to diversify supplier base beyond existing relationships while maintaining quality and compliance standards.',
      approach: 'Identified new suppliers in emerging production regions, conducted comprehensive audits including social compliance, and coordinated initial production runs.',
      results: [
        'Added 3 new verified suppliers to approved vendor list',
        'All new suppliers met social compliance requirements',
        'Successfully transitioned 30% of production volume to new suppliers',
        'Maintained consistent quality across supplier transition'
      ],
      timeline: '12 weeks to full transition'
    }
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold mb-6">Case Studies</h1>
          <p className="text-xl text-slate-300">Real results from sourcing projects across industries and regions.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {cases.map((study, index) => (
          <div key={index} className="border border-gray-200 rounded-2xl p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
              <div>
                <div className="text-sm uppercase tracking-widest text-slate-500 mb-2">{study.industry}</div>
                <h2 className="text-3xl font-semibold">{study.client}</h2>
              </div>
              <div className="text-sm px-4 py-2 bg-slate-100 rounded-full text-slate-600 whitespace-nowrap self-start md:self-auto">
                {study.timeline}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-500 mb-3">Challenge</h4>
                <p className="text-slate-700">{study.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-500 mb-3">Approach</h4>
                <p className="text-slate-700">{study.approach}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-500 mb-3">Results</h4>
                <ul className="space-y-2">
                  {study.results.map((result, i) => (
                    <li key={i} className="text-sm text-slate-700 flex gap-2">
                      <span className="text-emerald-600">•</span> {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Your Success Story Starts Here</h2>
          <p className="text-lg text-slate-600 mb-8">Every project is different. Let's discuss what success looks like for your business.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800">
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies