import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Requirements',
    description:
      'Share your product specifications, target price, quantity, and timeline. We review your brief and confirm scope within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Identification',
    description:
      'We search our network and trade databases to identify 3–5 qualified manufacturers that match your requirements.',
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    description:
      'Our team visits shortlisted factories to verify capacity, certifications, and production standards before you commit.',
  },
  {
    number: '04',
    title: 'Sample & Price Negotiation',
    description:
      'We request samples, review quality, and negotiate pricing and terms on your behalf to get the best deal.',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    description:
      'Once the order is placed, we follow up at key production milestones and report back with photos and updates.',
  },
  {
    number: '06',
    title: 'Inspection & Shipment',
    description:
      'We conduct a final quality inspection before goods leave the factory, then coordinate export and shipping to your door.',
  },
];

export default function HomeProcess() {
  return (
    <section className="section-padding bg-brand-light">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="section-label">Our Process</span>
          <h2 className="section-heading">How We Source for You</h2>
          <p className="section-subtext max-w-2xl mx-auto">
            A structured, transparent process designed to reduce risk and save you time at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative bg-white rounded-xl p-6 border border-brand-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-brand-mid text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/how-it-works" className="btn-secondary inline-flex items-center gap-2">
            See Full Process Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
