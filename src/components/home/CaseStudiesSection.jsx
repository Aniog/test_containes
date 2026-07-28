import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    client: 'UK Electronics Retailer',
    industry: 'Consumer Electronics',
    challenge: 'Needed to switch from an unreliable supplier causing 30% defect rates.',
    solution: 'Verified 12 factories, selected 2 qualified suppliers, set up QC checkpoints.',
    result: 'Defect rate reduced to under 2%. Annual savings of $180K.',
    stats: [
      { label: 'Defect Rate', value: '< 2%', icon: CheckCircle },
      { label: 'Annual Savings', value: '$180K', icon: TrendingUp },
    ],
  },
  {
    client: 'US Home Goods Brand',
    industry: 'Home & Furniture',
    challenge: 'First-time importing from China. No existing supplier relationships.',
    solution: 'Full-service sourcing from supplier search to container loading supervision.',
    result: 'Successfully launched 3 product lines. On-time delivery for all shipments.',
    stats: [
      { label: 'Product Lines', value: '3', icon: CheckCircle },
      { label: 'On-Time Rate', value: '100%', icon: Clock },
    ],
  },
  {
    client: 'German Industrial Firm',
    industry: 'Machinery Parts',
    challenge: 'Custom precision parts with tight tolerances and complex certifications.',
    solution: 'Sourced specialized CNC manufacturers, managed tooling development, conducted in-process inspections.',
    result: 'All parts passed ISO certification. Zero rejected batches in 2 years.',
    stats: [
      { label: 'Pass Rate', value: '100%', icon: CheckCircle },
      { label: 'Years Active', value: '2+', icon: Clock },
    ],
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Results</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">Case Studies</h2>
          <p className="text-lg text-slate-600">
            Real outcomes from real clients. These examples illustrate how we solve sourcing challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">{study.industry}</span>
                <h3 className="text-lg font-semibold text-slate-800 mt-1">{study.client}</h3>
              </div>

              <div className="space-y-3 mb-5">
                <div>
                  <span className="text-xs font-semibold text-red-600 uppercase">Challenge</span>
                  <p className="text-sm text-slate-600 mt-0.5">{study.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-teal-700 uppercase">Solution</span>
                  <p className="text-sm text-slate-600 mt-0.5">{study.solution}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-700 uppercase">Result</span>
                  <p className="text-sm text-slate-700 font-medium mt-0.5">{study.result}</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-100">
                {study.stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center gap-1.5">
                      <Icon className="w-4 h-4 text-teal-600" />
                      <div>
                        <span className="text-sm font-bold text-slate-800">{stat.value}</span>
                        <span className="text-xs text-slate-500 ml-1">{stat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
