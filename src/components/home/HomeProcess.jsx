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
    title: 'Supplier Matching',
    desc: 'We search our verified network and identify 3–5 qualified suppliers that match your specifications and budget.',
  },
  {
    number: '03',
    title: 'Factory Audit',
    desc: 'We visit shortlisted factories in person to verify their capabilities, certifications, and production quality.',
  },
  {
    number: '04',
    title: 'Sample & Negotiation',
    desc: 'We request samples, review them against your specs, and negotiate pricing and terms on your behalf.',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    desc: 'Once you place an order, we follow up with the factory regularly and conduct mid-production inspections.',
  },
  {
    number: '06',
    title: 'QC & Shipping',
    desc: 'Pre-shipment inspection is completed, export documents are prepared, and goods are shipped to your door.',
  },
];

export default function HomeProcess() {
  return (
    <section className="py-16 md:py-24 bg-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-white text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4 shadow-sm">
            Sourcing Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            How We Work With You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A structured, transparent process from first inquiry to final delivery — so you always know what's happening with your order.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={step.number} className="bg-white rounded-xl p-6 shadow-sm relative">
              <div className="text-5xl font-black text-primary/10 absolute top-4 right-6 select-none">
                {step.number}
              </div>
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">{idx + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-dark mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            See Full Process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
