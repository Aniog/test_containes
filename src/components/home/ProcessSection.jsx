import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Inquiry',
    desc: 'Tell us what product you need, your target price, quantity, and any specific requirements. We respond within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Identification',
    desc: 'We search our network and verified databases to identify 3–5 qualified manufacturers that match your criteria.',
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories in person to verify their capabilities, certifications, and production standards.',
  },
  {
    number: '04',
    title: 'Sample & Negotiation',
    desc: 'We request samples, review quality, and negotiate pricing and terms on your behalf to get the best deal.',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    desc: 'Once you place an order, we follow up with the factory regularly and report on production progress.',
  },
  {
    number: '06',
    title: 'QC Inspection & Shipping',
    desc: 'We inspect finished goods before shipment and coordinate with freight forwarders to ensure on-time delivery.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-brand-light-blue">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            How We Source for You
          </h2>
          <p className="text-brand-body text-lg max-w-2xl mx-auto">
            A structured, transparent process from first inquiry to final delivery.
            You stay informed at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={step.number} className="bg-white rounded-xl p-6 border border-brand-border relative overflow-hidden">
              <div className="absolute top-4 right-4 text-5xl font-bold text-brand-light-blue leading-none select-none">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-brand-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/how-it-works" className="btn-secondary inline-flex items-center gap-2">
            See Full Process Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
