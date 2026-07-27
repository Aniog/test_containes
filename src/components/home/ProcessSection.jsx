import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    desc: 'Fill in our inquiry form with your product details, target price, quantity, and any specific requirements.',
  },
  {
    number: '02',
    title: 'We Research & Shortlist Suppliers',
    desc: 'Our team identifies qualified manufacturers from our verified network and conducts initial screening.',
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories in person to verify capabilities, certifications, and working conditions.',
  },
  {
    number: '04',
    title: 'Sample & Price Negotiation',
    desc: 'We request samples, review quality, and negotiate pricing and terms on your behalf.',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    desc: 'Once you place an order, we follow up with the factory to ensure production stays on schedule and on spec.',
  },
  {
    number: '06',
    title: 'Inspection & Shipping',
    desc: 'We conduct pre-shipment inspection and coordinate freight forwarding to your destination.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            How We Source for You
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            A structured, transparent process from your first inquiry to goods arriving at your warehouse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative bg-white rounded-xl border border-slate-100 shadow-sm p-6">
              <div className="text-4xl font-bold text-brand-blue/10 mb-3 leading-none">{step.number}</div>
              <h3 className="text-base font-semibold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            See Full Process Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
