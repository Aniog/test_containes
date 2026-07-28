import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, CheckCircle, Building2, Package, Users } from 'lucide-react';

const caseStudies = [
  {
    client: 'UK Electronics Retailer',
    industry: 'Consumer Electronics',
    location: 'United Kingdom',
    icon: Building2,
    challenge: 'The client was experiencing a 30% defect rate from their existing supplier in Shenzhen, leading to high return rates and customer complaints. They needed to switch suppliers quickly but lacked the local presence to vet new factories.',
    approach: [
      'Audited 12 potential suppliers across Guangdong province',
      'Conducted on-site factory visits with production line inspections',
      'Collected and evaluated samples from the top 3 candidates',
      'Negotiated pricing and set up a phased QC checkpoint system',
    ],
    result: 'Defect rate dropped to under 2%. Annual cost savings of $180,000. Client has been working with the new supplier for 3 years with consistent quality.',
    stats: [
      { label: 'Defect Rate', value: '< 2%', icon: CheckCircle },
      { label: 'Annual Savings', value: '$180K', icon: TrendingUp },
      { label: 'Partnership', value: '3 Years', icon: Clock },
    ],
  },
  {
    client: 'US Home Goods Brand',
    industry: 'Home & Furniture',
    location: 'United States',
    icon: Package,
    challenge: 'A new D2C brand wanted to launch three product lines sourced from China but had zero supplier relationships and no experience with importing. They needed a partner to handle everything from sourcing to delivery.',
    approach: [
      'Sourced suppliers across 3 different product categories',
      'Managed sample development and approval processes',
      'Set up QC checkpoints at incoming material, mid-production, and pre-shipment stages',
      'Coordinated shipping and customs documentation for all 3 product lines',
    ],
    result: 'Successfully launched all 3 product lines within the planned timeline. 100% on-time delivery rate across 8 shipments in the first year.',
    stats: [
      { label: 'Product Lines', value: '3', icon: CheckCircle },
      { label: 'On-Time Rate', value: '100%', icon: Clock },
      { label: 'Shipments', value: '8+', icon: Package },
    ],
  },
  {
    client: 'German Industrial Firm',
    industry: 'Machinery Parts',
    location: 'Germany',
    icon: Users,
    challenge: 'The client needed custom precision CNC parts with tight tolerances (0.01mm) and specific material certifications. Their previous supplier in Europe was too expensive and had long lead times.',
    approach: [
      'Identified 5 specialized CNC manufacturers in Zhejiang and Jiangsu',
      'Evaluated tooling capabilities and quality lab equipment',
      'Managed prototype development and iteration with the client',
      'Conducted in-process inspections at critical machining stages',
    ],
    result: 'All parts passed ISO certification and tolerance requirements. Zero rejected batches over 2 years. Lead time reduced by 40% compared to European sourcing.',
    stats: [
      { label: 'Pass Rate', value: '100%', icon: CheckCircle },
      { label: 'Years Active', value: '2+', icon: Clock },
      { label: 'Lead Time', value: '-40%', icon: TrendingUp },
    ],
  },
  {
    client: 'Australian Outdoor Brand',
    industry: 'Sports & Outdoor',
    location: 'Australia',
    icon: Package,
    challenge: 'An outdoor gear brand needed to scale from small-batch to mass production while maintaining quality and meeting strict Australian safety standards.',
    approach: [
      'Found factories with experience in export to Australia and compliance with AS/NZS standards',
      'Set up a comprehensive pre-shipment inspection protocol',
      'Coordinated product testing with third-party labs',
      'Managed shipping consolidation to reduce freight costs',
    ],
    result: 'Scaled from 500 units to 15,000 units per order. All products passed Australian safety testing. Freight cost per unit reduced by 35% through consolidation.',
    stats: [
      { label: 'Volume Growth', value: '30x', icon: TrendingUp },
      { label: 'Compliance', value: '100%', icon: CheckCircle },
      { label: 'Freight Savings', value: '35%', icon: TrendingUp },
    ],
  },
];

const CaseStudies = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-800 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">Results</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Real outcomes from real clients. See how we have helped businesses solve sourcing challenges and achieve measurable results.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-teal-50 rounded-lg">
                        <Icon className="w-5 h-5 text-teal-700" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">{study.industry}</span>
                        <h2 className="text-xl font-bold text-slate-800">{study.client}</h2>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <span className="text-xs font-semibold text-slate-500 uppercase">Challenge</span>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-500 uppercase">Our Approach</span>
                        <ul className="mt-1 space-y-1">
                          {study.approach.map((item, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-teal-600 text-xs mt-0.5">-</span>
                              <span className="text-sm text-slate-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-500 uppercase">Result</span>
                        <p className="text-sm text-slate-700 font-medium mt-1 leading-relaxed">{study.result}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-100">
                      {study.stats.map((stat) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={stat.label} className="flex items-center gap-2">
                            <StatIcon className="w-4 h-4 text-teal-600" />
                            <div>
                              <span className="text-sm font-bold text-slate-800">{stat.value}</span>
                              <span className="text-xs text-slate-500 ml-1">{stat.label}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Have a Similar Challenge?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Let us discuss your sourcing needs and how we can help you achieve similar results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-md transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
