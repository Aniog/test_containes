import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    description:
      'Tell us what you need — product type, specifications, target price, and quantity. We respond within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    description:
      'Our team searches our verified supplier network and identifies 3–5 qualified factories that match your requirements.',
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    description:
      'We conduct on-site or document-based audits to verify production capacity, certifications, and reliability.',
  },
  {
    number: '04',
    title: 'Sampling & Approval',
    description:
      'We arrange samples from shortlisted suppliers and coordinate shipping to your location for review and approval.',
  },
  {
    number: '05',
    title: 'Order Placement & Production Follow-up',
    description:
      'Once you approve, we place the order and monitor production milestones, keeping you informed throughout.',
  },
  {
    number: '06',
    title: 'Quality Inspection & Shipping',
    description:
      'Our QC team inspects goods before shipment. We then coordinate freight, customs, and delivery to your warehouse.',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Sourcing Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How We Source for You
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A structured, transparent process designed to reduce risk and save you time at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  {(index + 1) % 3 !== 0 && (
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            See Full Process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
