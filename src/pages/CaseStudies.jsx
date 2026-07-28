import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const cases = [
  {
    title: 'Home goods importer',
    category: 'Quality Inspection',
    challenge: 'Frequent defects and returns from an existing supplier.',
    result: 'Reduced defect rate from 12% to under 2% with pre-shipment inspections and supplier follow-up.',
    impact: 'Lower return costs and stronger buyer confidence.',
  },
  {
    title: 'Electronics brand',
    category: 'Supplier Sourcing',
    challenge: 'Long supplier onboarding and unclear factory capacity.',
    result: 'Shortened onboarding from 8 weeks to 3 weeks with verified factory shortlisting and sample coordination.',
    impact: 'Faster time to market and clearer production planning.',
  },
  {
    title: 'Industrial parts buyer',
    category: 'Shipping Coordination',
    challenge: 'High freight costs and inconsistent delivery schedules.',
    result: 'Saved 18% on landed cost through optimized shipping routes and better documentation.',
    impact: 'Improved margins and more reliable delivery windows.',
  },
  {
    title: 'Promotional products distributor',
    category: 'Factory Verification',
    challenge: 'Uncertainty about factory legitimacy and compliance.',
    result: 'Completed on-site audits for 4 candidate factories and selected 2 compliant partners.',
    impact: 'Reduced supplier risk and improved order consistency.',
  },
  {
    title: 'Kitchenware retailer',
    category: 'Quality Inspection',
    challenge: 'Inconsistent finishing quality across production batches.',
    result: 'Introduced during-production inspections and defined acceptable quality limits with the factory.',
    impact: 'More consistent product quality and fewer customer complaints.',
  },
  {
    title: 'E-commerce seller',
    category: 'Supplier Sourcing + Shipping',
    challenge: 'Needed a new supplier and faster shipping for a seasonal launch.',
    result: 'Sourced a new supplier, managed sample approval, and coordinated air freight for on-time delivery.',
    impact: 'Successful launch with no stockout and on-time delivery.',
  },
];

const CaseStudies = () => {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Case Studies</h1>
            <p className="mt-3 text-slate-600">Practical examples of how we helped buyers reduce risk, improve quality, and control costs.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">{item.category}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-amber-600">
                    <Star className="h-3.5 w-3.5" /> Result
                  </span>
                </div>
                <h2 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-600"><span className="font-medium text-slate-900">Challenge:</span> {item.challenge}</p>
                <p className="mt-2 text-sm text-slate-600"><span className="font-medium text-slate-900">Result:</span> {item.result}</p>
                <p className="mt-2 text-sm text-slate-600"><span className="font-medium text-slate-900">Impact:</span> {item.impact}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:underline">
                  Discuss a similar project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-slate-900">Want results like these?</h3>
            <p className="mt-2 text-sm text-slate-600">Tell us your current challenge and we will propose a practical approach.</p>
            <div className="mt-4">
              <Link to="/contact"><Button>Get a Free Sourcing Quote</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
