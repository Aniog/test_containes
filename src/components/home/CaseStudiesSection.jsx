import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    title: 'Electronics Manufacturer Saves 23% on Component Costs',
    industry: 'Electronics',
    challenge: 'A US-based electronics company needed to reduce PCB assembly costs while maintaining quality standards.',
    solution: 'We identified three qualified manufacturers in Shenzhen, conducted factory audits, and negotiated competitive pricing.',
    result: '23% cost reduction with zero quality issues across 50,000 units.',
  },
  {
    title: 'European Retailer Avoids $150K in Defective Products',
    industry: 'Consumer Goods',
    challenge: 'A German retailer was about to ship 30,000 units of home decor items without proper quality checks.',
    solution: 'Our pre-shipment inspection revealed critical defects in 40% of the batch. We coordinated rework before shipping.',
    result: 'Saved $150K in potential returns and protected the brand reputation.',
  },
  {
    title: 'Australian Startup Launches Product Line in 8 Weeks',
    industry: 'Home & Kitchen',
    challenge: 'A new brand needed to source, manufacture, and ship a complete kitchen product line on a tight timeline.',
    solution: 'We managed supplier selection, sample approval, production monitoring, and freight coordination end-to-end.',
    result: 'Product launched on schedule with full quality compliance.',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</span>
          <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Real Results for Real Buyers
          </h2>
          <p id="cases-subtitle" className="text-lg text-slate-600">
            See how we have helped businesses around the world source from China successfully.
          </p>
        </div>

        {/* Case studies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 lg:p-8 flex flex-col">
              <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 rounded-full px-3 py-1 mb-4 w-fit">
                {study.industry}
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">{study.title}</h3>

              <div className="space-y-3 flex-1">
                <div>
                  <span className="text-sm font-medium text-slate-500">Challenge</span>
                  <p className="text-sm text-slate-600 mt-1">{study.challenge}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-slate-500">Solution</span>
                  <p className="text-sm text-slate-600 mt-1">{study.solution}</p>
                </div>
                <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-medium text-green-800">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
