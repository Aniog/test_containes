import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Home Goods Importer — USA',
      category: 'Home & Kitchen',
      challenge: 'The client was struggling with inconsistent quality and long lead times from multiple suppliers.',
      solution: 'We consolidated sourcing to two verified factories, implemented pre-shipment inspections, and negotiated better payment terms.',
      result: 'Reduced supplier lead time by 22% and cut defect rate from 8% to 1.2% within 6 months.',
    },
    {
      title: 'Electronics Brand — Germany',
      category: 'Electronics',
      challenge: 'The client needed certified suppliers for a new product line with strict compliance requirements.',
      solution: 'We audited 14 factories, shortlisted 3 certified suppliers, and set up a QC schedule for every production batch.',
      result: 'Secured 3 certified suppliers and achieved 99.1% on-time delivery for 18 consecutive months.',
    },
    {
      title: 'Promotional Products Distributor — UK',
      category: 'Gifts & Promotional',
      challenge: 'The client was managing 12 SKUs across 8 suppliers, leading to high QC costs and missed deadlines.',
      solution: 'We audited existing suppliers, identified one factory capable of producing all SKUs, and standardized inspection criteria.',
      result: 'Consolidated 12 SKUs under one factory audit, reducing QC costs by 35%.',
    },
    {
      title: 'Automotive Parts Buyer — Canada',
      category: 'Automotive',
      challenge: 'The client needed ISO-certified suppliers for aftermarket parts with tight tolerances.',
      solution: 'We performed factory audits focused on quality systems, arranged sample testing, and set up a production monitoring plan.',
      result: 'Onboarded 2 ISO-certified suppliers and achieved zero customer returns for 9 months.',
    },
    {
      title: 'Apparel Brand — Australia',
      category: 'Textiles & Apparel',
      challenge: 'The client faced fabric quality issues and sizing inconsistencies across orders.',
      solution: 'We introduced fabric lab testing, added mid-production inspections, and created a detailed quality checklist.',
      result: 'Reduced fabric defects by 60% and customer returns by 45% in the first year.',
    },
    {
      title: 'Beauty Product Startup — Singapore',
      category: 'Beauty & Personal Care',
      challenge: 'The client needed regulatory-compliant packaging and formulation suppliers for a new skincare line.',
      solution: 'We sourced GMP-certified manufacturers, coordinated formula stability testing, and managed packaging approvals.',
      result: 'Launched the product line on schedule with full regulatory compliance and zero formulation issues.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Case Studies</h1>
            <p className="mt-4 text-slate-600 text-lg">
              Real results for real buyers. Here is how we have helped companies source better from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-shadow flex flex-col">
                <span className="inline-block text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">{item.category}</span>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h2>
                <div className="space-y-3 text-sm text-slate-600 flex-1">
                  <div>
                    <span className="font-medium text-slate-900">Challenge:</span> {item.challenge}
                  </div>
                  <div>
                    <span className="font-medium text-slate-900">Solution:</span> {item.solution}
                  </div>
                  <div>
                    <span className="font-medium text-slate-900">Result:</span> {item.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              Start your success story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
