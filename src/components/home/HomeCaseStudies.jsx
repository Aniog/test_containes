import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    id: 'cs1',
    industry: 'Electronics',
    country: 'Germany',
    title: 'LED Lighting Manufacturer Verified for EU Retailer',
    summary:
      'A German retailer needed CE-certified LED products. We audited 6 factories, shortlisted 2, and secured a 40% cost reduction vs. their previous supplier.',
    result: '40% cost saving · CE certified · On-time delivery',
    tag: 'Factory Audit + QC',
  },
  {
    id: 'cs2',
    industry: 'Furniture',
    country: 'USA',
    title: 'Custom Office Furniture for US E-Commerce Brand',
    summary:
      'An American e-commerce brand needed custom office chairs at scale. We managed supplier selection, sample approval, and 3 production inspections.',
    result: '0 defects on arrival · 12-week lead time met',
    tag: 'Full Sourcing Service',
  },
  {
    id: 'cs3',
    industry: 'Apparel',
    country: 'France',
    title: 'Private Label Sportswear Line for French Brand',
    summary:
      'A French activewear startup needed a reliable OEM partner. We sourced 3 factories, negotiated MOQs, and oversaw sample development and bulk production.',
    result: 'Brand launched on schedule · Repeat orders placed',
    tag: 'OEM Sourcing',
  },
];

export default function HomeCaseStudies() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Real Results for Real Buyers
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A selection of sourcing projects we've completed for international buyers
            across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-card-hover transition-shadow flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {c.industry}
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">
                    {c.country}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 text-base mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{c.summary}</p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                  <p className="text-emerald-700 text-xs font-medium">{c.result}</p>
                </div>
              </div>
              <div className="px-6 pb-5">
                <span className="text-xs text-slate-400 font-medium">{c.tag}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-blue-700 transition-colors"
          >
            View all case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
