import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what you need — product type, specifications, target price, and quantity. We review your requirements within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    description: 'Our team searches our verified supplier network and identifies 3–5 qualified manufacturers that match your criteria.',
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    description: 'We conduct on-site or document-based audits to verify factory legitimacy, capacity, certifications, and compliance.',
  },
  {
    number: '04',
    title: 'Sample & Price Negotiation',
    description: 'We request samples, review quality, and negotiate pricing and terms on your behalf to get the best deal.',
  },
  {
    number: '05',
    title: 'Production Monitoring & QC',
    description: 'Once production starts, we monitor progress, conduct inspections, and report back with photos and detailed reports.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate with freight forwarders, prepare export documents, and ensure your goods are shipped on time.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-brand-blue-light">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-label mb-3">Our Process</p>
          <h2 className="section-heading mb-4">How We Source for You</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A structured, transparent process designed to reduce risk and give you full visibility at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative bg-white rounded-xl p-6 md:p-8 border border-brand-border hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-brand-navy font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/how-it-works" className="btn-primary">
            See Full Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
