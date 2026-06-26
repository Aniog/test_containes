import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Shield, DollarSign, Clock } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Electronics Manufacturer Saves 23% on Component Costs',
    industry: 'Electronics',
    client: 'US-based electronics company',
    challenge: 'A US-based electronics company needed to reduce PCB assembly costs while maintaining quality standards. Their existing supplier was raising prices and communication had become difficult.',
    solution: 'We identified three qualified manufacturers in Shenzhen, conducted thorough factory audits, and negotiated competitive pricing. We also arranged sample production and quality testing before final selection.',
    result: '23% cost reduction with zero quality issues across 50,000 units. The client has continued working with the new supplier for over two years.',
    metrics: [
      { label: 'Cost Savings', value: '23%' },
      { label: 'Units Produced', value: '50,000' },
      { label: 'Quality Issues', value: '0' },
    ],
  },
  {
    id: 2,
    title: 'European Retailer Avoids $150K in Defective Products',
    industry: 'Consumer Goods',
    client: 'German home decor retailer',
    challenge: 'A German retailer was about to ship 30,000 units of home decor items without proper quality checks. The factory had a history of inconsistent quality.',
    solution: 'Our pre-shipment inspection revealed critical defects in 40% of the batch, including color mismatches, structural weaknesses, and packaging issues. We coordinated rework with the factory before shipping.',
    result: 'Saved $150K in potential returns and protected the brand reputation. The retailer now uses our inspection services for every order.',
    metrics: [
      { label: 'Potential Loss Avoided', value: '$150K' },
      { label: 'Defect Rate Found', value: '40%' },
      { label: 'Units Inspected', value: '30,000' },
    ],
  },
  {
    id: 3,
    title: 'Australian Startup Launches Product Line in 8 Weeks',
    industry: 'Home & Kitchen',
    client: 'Australian kitchen brand',
    challenge: 'A new brand needed to source, manufacture, and ship a complete kitchen product line on a tight timeline for a seasonal launch.',
    solution: 'We managed supplier selection, sample approval, production monitoring, and freight coordination end-to-end. Weekly updates kept the client informed throughout the process.',
    result: 'Product launched on schedule with full quality compliance. The client achieved first-month sales targets and placed a second order within three weeks.',
    metrics: [
      { label: 'Timeline', value: '8 weeks' },
      { label: 'Products Launched', value: '12' },
      { label: 'Quality Pass Rate', value: '100%' },
    ],
  },
  {
    id: 4,
    title: 'UK Distributor Consolidates 8 Suppliers into One Operation',
    industry: 'Industrial Equipment',
    client: 'UK industrial distributor',
    challenge: 'A UK distributor was managing eight different suppliers for various industrial components, resulting in complex logistics and inconsistent quality.',
    solution: 'We identified a consolidation strategy, sourcing from fewer but more capable manufacturers. We set up a warehousing and consolidation operation in Shenzhen for combined shipping.',
    result: 'Reduced shipping costs by 35%, simplified quality management, and improved delivery reliability from 78% to 96%.',
    metrics: [
      { label: 'Shipping Savings', value: '35%' },
      { label: 'Suppliers Reduced', value: '8 to 3' },
      { label: 'Delivery Reliability', value: '96%' },
    ],
  },
  {
    id: 5,
    title: 'Canadian Brand Protects IP During Custom Manufacturing',
    industry: 'Custom Products',
    client: 'Canadian consumer goods brand',
    challenge: 'A Canadian brand wanted to manufacture a proprietary product in China but was concerned about intellectual property protection and design copying.',
    solution: 'We helped draft a manufacturing agreement with IP protection clauses, split production across two factories to prevent full design exposure, and conducted regular compliance audits.',
    result: 'Product manufactured successfully with no IP breaches. The brand has since expanded to three additional product lines with the same protection framework.',
    metrics: [
      { label: 'IP Breaches', value: '0' },
      { label: 'Product Lines', value: '4' },
      { label: 'Years of Partnership', value: '3+' },
    ],
  },
  {
    id: 6,
    title: 'Middle East Buyer Navigates Complex Certification Requirements',
    industry: 'Building Materials',
    client: 'UAE construction company',
    challenge: 'A UAE construction company needed building materials that met specific Gulf region certification standards, but their Chinese supplier lacked the necessary documentation.',
    solution: 'We worked with the factory to obtain required certifications (SASO, GCC), arranged third-party testing, and ensured all documentation met import requirements.',
    result: 'Materials cleared customs without delays. The construction project stayed on schedule, and the supplier is now certified for Gulf region exports.',
    metrics: [
      { label: 'Certifications Obtained', value: '3' },
      { label: 'Customs Delays', value: '0' },
      { label: 'Project Impact', value: 'On schedule' },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</span>
            <h1 id="cs-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              Real Results for Real Buyers
            </h1>
            <p id="cs-hero-subtitle" className="text-lg text-slate-300 leading-relaxed mb-8">
              See how we have helped businesses around the world source from China successfully, save costs, and avoid risks.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {caseStudies.map((study) => (
              <div key={study.id} className="border-b border-slate-200 pb-12 md:pb-16 last:border-0">
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 rounded-full px-3 py-1 mb-4">
                  {study.industry}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{study.title}</h2>
                <p className="text-sm text-slate-500 mb-6">Client: {study.client}</p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Challenge</h3>
                    <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Solution</h3>
                    <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Result</h3>
                    <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium text-green-800">{study.result}</p>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, mi) => (
                    <div key={mi} className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">{metric.value}</div>
                      <div className="text-sm text-slate-600 mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell us about your sourcing needs, and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
