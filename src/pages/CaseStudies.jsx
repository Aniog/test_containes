import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      industry: 'Consumer Goods',
      challenge: 'Needed to expand supplier base for seasonal product lines while maintaining consistent quality across 40+ SKUs.',
      approach: 'Conducted supplier search across 3 provinces, verified 8 factories, implemented standardized inspection protocols.',
      results: ['23% reduction in landed cost', '99.1% first-pass quality rate', 'Reduced lead time from 75 to 52 days', 'Added 3 new long-term suppliers'],
      timeline: '14 weeks',
    },
    {
      client: 'US Industrial Equipment Distributor',
      industry: 'Industrial',
      challenge: 'Required alternative suppliers for critical components after primary supplier experienced quality issues and delivery delays.',
      approach: 'Identified 12 potential suppliers, conducted detailed audits on 5, negotiated trial orders with 2 approved manufacturers.',
      results: ['40% improvement in on-time delivery', 'Established dual-source supply chain', 'Reduced component cost by 18%', 'Zero quality issues in first year'],
      timeline: '10 weeks',
    },
    {
      client: 'Australian Consumer Electronics Brand',
      industry: 'Electronics',
      challenge: 'Scaling production for new product launch required reliable manufacturing partner with strict quality requirements.',
      approach: 'Shortlisted 6 manufacturers, conducted comprehensive audits, implemented production monitoring for first 3 production runs.',
      results: ['99.2% first-pass quality rate', 'On-time delivery for launch window', 'Established scalable production capacity', 'Documented processes for future runs'],
      timeline: '12 weeks',
    },
    {
      client: 'UK Furniture Importer',
      industry: 'Furniture',
      challenge: 'Expanding product range required new upholstery suppliers with consistent quality and competitive pricing.',
      approach: 'Sourced 15 upholstery manufacturers, verified 4 through on-site audits, coordinated sample development and approval.',
      results: ['Successfully launched 12 new SKUs', 'Maintained target margin requirements', 'Established quality inspection framework', 'Created supplier performance tracking'],
      timeline: '16 weeks',
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Case Studies</h1>
          <p className="text-xl text-slate-300">Real results from sourcing projects across different industries and product categories.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {cases.map((study, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div>
                  <div className="text-sm text-slate-500 mb-2">{study.industry} • {study.timeline}</div>
                  <h3 className="text-2xl font-semibold tracking-tight">{study.client}</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-2">CHALLENGE</div>
                  <p className="text-slate-700">{study.challenge}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-2">APPROACH</div>
                  <p className="text-slate-700">{study.approach}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-2">RESULTS</div>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-slate-700 flex items-start gap-2">
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
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Have a Similar Project?</h2>
          <p className="text-slate-600 mb-8">We can help you achieve comparable results. Start with a free consultation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded font-medium hover:bg-slate-800 transition-colors">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;