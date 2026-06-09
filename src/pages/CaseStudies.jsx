import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      category: 'Home & Kitchen',
      challenge: 'Needed to identify cost-effective suppliers for a new product line while maintaining quality standards required for European retail.',
      approach: 'We conducted market research across three manufacturing regions, performed factory audits on 12 shortlisted suppliers, and coordinated sample development with three finalists.',
      results: [
        'Identified supplier achieving 23% cost reduction vs. previous source',
        'Improved product quality ratings from 3.8 to 4.6 stars',
        'Established reliable supply for 28 SKUs',
        'Reduced lead time from 75 to 52 days',
      ],
      timeline: '14 weeks from initial consultation to first shipment',
    },
    {
      client: 'US Industrial Equipment Distributor',
      category: 'Industrial Parts',
      challenge: 'Required reliable sourcing for 40+ replacement parts with strict quality specifications and consistent availability.',
      approach: 'Developed supplier qualification criteria, conducted on-site audits, implemented quality control protocols, and established production monitoring procedures.',
      results: [
        'Qualified 6 suppliers across product categories',
        'Achieved 98.2% first-pass quality rate',
        'Established 4-month inventory buffer capability',
        'Reduced expedited shipping incidents by 85%',
      ],
      timeline: '16 weeks to full operational status',
    },
    {
      client: 'Australian E-commerce Brand',
      category: 'Consumer Products',
      challenge: 'Rapid growth required scaling supplier base while maintaining product consistency and delivery reliability.',
      approach: 'Analyzed existing supplier performance, identified capacity constraints, sourced additional suppliers, and implemented standardized quality procedures.',
      results: [
        'Added 3 qualified suppliers to existing network',
        'Improved average lead time by 15 days',
        'Reduced quality-related returns by 40%',
        'Enabled 35% volume increase without service disruption',
      ],
      timeline: '12 weeks for supplier expansion project',
    },
    {
      client: 'Canadian Automotive Parts Importer',
      category: 'Automotive',
      challenge: 'Needed to diversify supplier base beyond existing single-source arrangement for critical components.',
      approach: 'Identified alternative suppliers, conducted capability assessments, coordinated sample validation, and managed gradual transition with dual-sourcing period.',
      results: [
        'Qualified 2 additional suppliers for critical parts',
        'Negotiated 12% cost improvement on new contracts',
        'Maintained zero service interruptions during transition',
        'Established competitive bidding process for future orders',
      ],
      timeline: '18 weeks including transition period',
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Case Studies</h1>
          <p className="text-xl text-slate-300">
            Real results from sourcing projects with international clients.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {cases.map((study, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <div className="text-sm text-slate-500 mb-1">{study.category}</div>
                  <h2 className="text-2xl font-semibold">{study.client}</h2>
                </div>
                <div className="text-sm text-slate-500 mt-2 md:mt-0 md:text-right">
                  {study.timeline}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-medium text-sm uppercase tracking-wider text-slate-500 mb-3">Challenge</h3>
                  <p className="text-sm text-slate-700">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm uppercase tracking-wider text-slate-500 mb-3">Approach</h3>
                  <p className="text-sm text-slate-700">{study.approach}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm uppercase tracking-wider text-slate-500 mb-3">Results</h3>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">•</span>
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
          <h2 className="text-2xl font-semibold mb-4">Your Project Could Be Next</h2>
          <p className="text-slate-600 mb-8">
            Contact us to discuss how we can support your sourcing objectives.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;