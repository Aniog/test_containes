import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

const cases = [
  {
    client: 'European Electronics Distributor',
    industry: 'Electronics',
    title: 'Sourcing Reliable PCB Suppliers for a European Distributor',
    desc: 'We helped a mid-sized electronics distributor identify and verify two qualified PCB manufacturers in Shenzhen, reducing defect rates from 12% to under 2%.',
    result: 'Defect rate reduced to under 2%',
    location: 'Shenzhen, China',
    duration: '3 months',
  },
  {
    client: 'Australian Retail Chain',
    industry: 'Home Goods',
    title: 'End-to-End Sourcing for a New Home Goods Line',
    desc: 'From supplier research to shipping, we managed the complete sourcing process for a new kitchenware product line, delivering 15 SKUs on time and within budget.',
    result: '15 SKUs delivered on time',
    location: 'Guangdong, China',
    duration: '4 months',
  },
  {
    client: 'US Industrial Equipment Company',
    industry: 'Machinery',
    title: 'Factory Verification for Industrial Automation Parts',
    desc: 'Our team conducted on-site audits of three shortlisted CNC machining factories, providing detailed reports that enabled confident supplier selection.',
    result: '3 factories fully audited',
    location: 'Dongguan, China',
    duration: '6 weeks',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-light-blue text-brand text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Real Results for Real Clients
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              See how we have helped businesses across industries source better
              from China.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors shrink-0"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-light-blue text-brand text-xs font-semibold rounded-full">
                    {c.industry}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {c.desc}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {c.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {c.duration}
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-sm font-semibold text-emerald-700">
                    {c.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
