import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

const cases = [
  {
    id: 'cs1',
    tag: 'Electronics',
    title: 'US Retailer Reduces Defect Rate by 60%',
    summary: 'A US-based electronics importer was receiving shipments with high defect rates. We implemented a 3-stage QC process and reduced defects from 8% to under 3%.',
    country: 'United States',
    result: '60% fewer defects',
  },
  {
    id: 'cs2',
    tag: 'Furniture',
    title: 'European Brand Cuts Sourcing Costs by 22%',
    summary: 'A German furniture brand was overpaying due to relying on a single supplier. We identified 4 alternative factories and negotiated a 22% cost reduction.',
    country: 'Germany',
    result: '22% cost reduction',
  },
  {
    id: 'cs3',
    tag: 'Apparel',
    title: 'Australian Startup Launches Private Label Line',
    summary: 'A first-time importer from Australia needed end-to-end support. We sourced a certified factory, managed sampling, and coordinated the first shipment on time.',
    country: 'Australia',
    result: 'On-time first shipment',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="section-padding bg-brand-bg-alt">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">Client Results</span>
          <h2 className="section-title mt-2">Case Studies</h2>
          <p className="section-subtitle">
            Real outcomes from real clients. Here's how we've helped businesses source smarter from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((cs) => (
            <div key={cs.id} className="card-base p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                  {cs.tag}
                </span>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <MapPin className="w-3 h-3" />
                  {cs.country}
                </div>
              </div>
              <h3 className="font-bold text-brand-blue text-base mb-3">{cs.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{cs.summary}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-brand-gold font-bold text-sm">{cs.result}</span>
                <Link to="/case-studies" className="text-brand-blue text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Read more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-secondary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
