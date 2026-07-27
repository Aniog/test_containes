import { Link } from 'react-router-dom';
import { MessageSquare, Search, FileSearch, ClipboardCheck, Ship, Headphones } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Tell Us Your Needs',
    desc: 'Share your product requirements, target price, order volume, and timeline with our team.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Matching',
    desc: 'We identify and shortlist qualified suppliers from our verified factory network.',
  },
  {
    step: '03',
    icon: FileSearch,
    title: 'Factory Audit & Samples',
    desc: 'We audit the factory, collect samples, and send them to you for approval.',
  },
  {
    step: '04',
    icon: ClipboardCheck,
    title: 'Production & QC',
    desc: 'We monitor production with regular inspections to ensure quality standards are met.',
  },
  {
    step: '05',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'We coordinate freight, handle customs documentation, and track your shipment.',
  },
  {
    step: '06',
    icon: Headphones,
    title: 'Ongoing Support',
    desc: 'We remain your partner for reorders, new products, and any issues that arise.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading mb-4">How We Work</h2>
          <p className="section-subheading mx-auto">
            A proven 6-step sourcing process designed to give you peace of mind at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="relative bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-500 text-white rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center mb-2">
                    <item.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/how-it-works" className="btn-primary">
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  );
}
