import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what you need — product specs, target price, quantity, and timeline. We review your requirements within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    description: 'Our team searches our verified supplier network and identifies 3–5 qualified manufacturers that match your criteria.',
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    description: 'We conduct on-site visits to verify factory credentials, production capacity, certifications, and compliance standards.',
  },
  {
    number: '04',
    title: 'Sample & Price Negotiation',
    description: 'We request samples, review quality, and negotiate pricing and terms on your behalf to get the best deal.',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    description: 'Once you place the order, we follow up with the factory regularly and conduct mid-production inspections as needed.',
  },
  {
    number: '06',
    title: 'QC Inspection & Shipping',
    description: 'Pre-shipment inspection is conducted before goods leave the factory. We then coordinate shipping and handle all export documentation.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mt-2 mb-4">
            How We Source for You
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            A structured, transparent process designed to reduce risk and save you time at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="bg-white rounded-xl p-6 md:p-8 border border-brand-border shadow-sm relative">
              <div className="text-5xl font-bold text-brand-blue/10 absolute top-4 right-6 select-none">
                {step.number}
              </div>
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">{step.number}</span>
              </div>
              <h3 className="text-base font-semibold text-brand-text mb-2">{step.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-navy text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            See Full Process <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
