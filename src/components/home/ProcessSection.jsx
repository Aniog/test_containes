import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Inquiry',
    description: 'Tell us what you need — product type, quantity, target price, and any specific requirements. We respond within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Matching',
    description: 'We search our verified network and trade databases to identify 3–5 qualified manufacturers that match your criteria.',
  },
  {
    number: '03',
    title: 'Factory Audit',
    description: 'Our team visits shortlisted factories to verify capacity, certifications, and production standards before you commit.',
  },
  {
    number: '04',
    title: 'Sample & Negotiation',
    description: 'We request samples, review quality, and negotiate pricing and terms on your behalf to get the best deal.',
  },
  {
    number: '05',
    title: 'Production & QC',
    description: 'We monitor production progress, conduct mid-production and pre-shipment inspections, and report back to you.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate freight, handle export documentation, and track your shipment until it arrives at your warehouse.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">Our Process</p>
          <h2 className="text-neutral-900 text-3xl md:text-4xl font-bold">
            How We Source for You
          </h2>
          <p className="text-neutral-500 text-lg mt-4 max-w-2xl mx-auto">
            A structured, transparent process from first inquiry to final delivery — so you always know what's happening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow relative">
              <div className="text-5xl font-bold text-neutral-200 leading-none mb-4">{step.number}</div>
              <h3 className="text-neutral-900 font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  {(index + 1) % 3 !== 0 && (
                    <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-brand-navy text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
          >
            See Full Process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
