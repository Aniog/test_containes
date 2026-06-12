import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Fill in our free inquiry form with your product details, target price, quantity, and any specific requirements.',
  },
  {
    number: '02',
    title: 'We Find & Vet Suppliers',
    description: 'Our team researches the market, contacts suppliers, and shortlists 3–5 verified factories that match your criteria.',
  },
  {
    number: '03',
    title: 'Sample & Factory Audit',
    description: 'We arrange product samples and conduct on-site factory audits to verify quality, capacity, and compliance.',
  },
  {
    number: '04',
    title: 'Order & Production Monitoring',
    description: 'Once you confirm the order, we follow up with the factory throughout production and send you regular updates.',
  },
  {
    number: '05',
    title: 'Quality Inspection',
    description: 'Before shipment, our QC team inspects the goods against your specifications and provides a detailed report.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate freight, handle customs documentation, and ensure your goods arrive on time and in good condition.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            How We Source for You
          </h2>
          <p className="text-slate-500 text-lg">
            A clear, structured process designed to reduce risk and deliver results — from first inquiry to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative bg-white rounded-xl p-7 border border-slate-100 hover:shadow-sm transition-shadow">
              <div className="text-5xl font-black text-slate-100 leading-none mb-4 select-none">{step.number}</div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
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
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            See the Full Process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
