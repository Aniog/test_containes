import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      industry: 'Home & Garden',
      challenge: 'Needed to expand supplier base for seasonal products while maintaining consistent quality across 40+ SKUs.',
      approach: 'Conducted supplier search across 3 provinces, verified 8 factories, implemented standardized QC protocols.',
      results: ['23% reduction in landed cost', 'Zero quality claims in first year', 'On-time delivery rate of 97%'],
      timeline: '14 weeks from initial inquiry to first shipment',
    },
    {
      client: 'US Industrial Equipment Distributor',
      industry: 'Industrial & Tools',
      challenge: 'Required verification of new suppliers for safety-critical components with strict compliance requirements.',
      approach: 'Performed comprehensive factory audits including quality system review, capacity assessment, and reference checks.',
      results: ['12 suppliers verified across 3 provinces', 'Identified 2 capacity constraints before production', 'Established ongoing monitoring program'],
      timeline: '8 weeks for complete verification program',
    },
    {
      client: 'Australian E-commerce Brand',
      industry: 'Consumer Electronics',
      challenge: 'Experiencing quality issues and delivery delays with existing supplier; needed alternative sourcing options.',
      approach: 'Identified 5 qualified alternatives, coordinated sample development, implemented production monitoring.',
      results: ['35% improvement in lead time', 'Defect rate reduced from 4.2% to 0.8%', 'Established backup supplier relationship'],
      timeline: '11 weeks to first production run',
    },
    {
      client: 'Canadian Promotional Products Company',
      industry: 'Apparel & Textiles',
      challenge: 'Needed reliable supplier for custom-branded products with tight seasonal deadlines.',
      approach: 'Sourced 3 qualified manufacturers, managed sample approval process, coordinated production schedule.',
      results: ['Delivered 50,000 units on schedule', 'Maintained brand quality standards', 'Established framework for future seasons'],
      timeline: '9 weeks from brief to delivery',
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-4">Case Studies</h1>
          <p className="text-xl text-slate-300">Real results from our work with international buyers.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {cases.map((study, i) => (
            <div key={i} className="border rounded-xl p-10">
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="text-xs uppercase tracking-widest bg-slate-100 px-3 py-1 rounded">{study.industry}</span>
                <span className="text-xs text-slate-500 self-center">{study.timeline}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{study.client}</h3>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Challenge</div>
                  <p className="text-sm text-slate-700">{study.challenge}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Approach</div>
                  <p className="text-sm text-slate-700">{study.approach}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Results</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    {study.results.map((result, j) => (
                      <li key={j}>• {result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 border-t">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Looking for similar results?</h3>
          <p className="text-slate-600 mb-6">Contact us to discuss how we can support your sourcing objectives.</p>
          <Link to="/contact"><Button>Get a Free Sourcing Quote</Button></Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;