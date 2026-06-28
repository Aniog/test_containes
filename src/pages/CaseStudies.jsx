import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Retail Chain',
      industry: 'Retail',
      challenge: 'Needed to source seasonal home decor products with strict quality requirements and tight delivery timelines.',
      approach: 'We identified 8 potential suppliers, conducted factory audits on 4, and managed sample development with 2 finalists.',
      results: ['40% reduction in sourcing cycle time', 'Zero quality issues on first shipment', 'Established 3-year supplier relationship'],
      timeline: '12 weeks',
    },
    {
      client: 'US Industrial Equipment Distributor',
      industry: 'Industrial',
      challenge: 'Required specialized components with tight tolerances and documentation for regulatory compliance.',
      approach: 'We verified 5 suppliers with relevant certifications, coordinated sample testing, and implemented production monitoring.',
      results: ['3 qualified suppliers identified', 'All compliance documentation secured', 'Consistent on-time delivery achieved'],
      timeline: '16 weeks',
    },
    {
      client: 'Australian E-commerce Brand',
      industry: 'Consumer Goods',
      challenge: 'Experienced quality issues with previous suppliers and needed to rebuild their supply chain.',
      approach: 'We conducted a full supplier audit program, implemented inspection protocols, and established ongoing monitoring.',
      results: ['Defect rate reduced from 12% to under 2%', 'Improved communication with factories', 'Scalable sourcing process established'],
      timeline: '10 weeks',
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Case Studies</h1>
          <p className="text-lg text-slate-300">Real examples of sourcing projects we have managed for international clients.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20 space-y-16">
        {cases.map((study, idx) => (
          <div key={idx} className="border border-slate-200 rounded-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
              <div>
                <div className="font-semibold text-xl mb-1">{study.client}</div>
                <div className="text-sm text-slate-500">{study.industry} • {study.timeline}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-sm font-semibold text-slate-500 mb-2">CHALLENGE</div>
                <p className="text-sm text-slate-700">{study.challenge}</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-500 mb-2">APPROACH</div>
                <p className="text-sm text-slate-700">{study.approach}</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-500 mb-2">RESULTS</div>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  {study.results.map((result, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>{result}</span>
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
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Have a Similar Project?</h2>
          <p className="text-slate-600 mb-6">We can help you achieve comparable results for your sourcing needs.</p>
          <Link to="/contact" className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;