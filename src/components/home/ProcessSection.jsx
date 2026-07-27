import { Link } from 'react-router-dom';
import { MessageSquare, Search, ClipboardList, CheckCircle, Truck, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Inquiry',
    description: 'Tell us what you need — product type, quantity, target price, and any specific requirements. We respond within 24 hours.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification',
    description: 'Our team searches our verified supplier network and identifies 3–5 qualified manufacturers that match your criteria.',
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Factory Audit & Quotes',
    description: 'We conduct background checks and on-site audits, then negotiate competitive pricing and terms on your behalf.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Sample & Approval',
    description: 'We procure samples, inspect them against your specs, and ship them to you for final approval before production.',
  },
  {
    number: '05',
    icon: ClipboardList,
    title: 'Production Monitoring',
    description: 'We follow up with the factory throughout production, conduct mid-production inspections, and report progress to you.',
  },
  {
    number: '06',
    icon: Truck,
    title: 'QC & Shipment',
    description: 'Pre-shipment inspection is completed, export documents are prepared, and goods are shipped to your destination.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            How We Source for You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            A structured, transparent process designed to reduce risk and save you time at every stage of your China sourcing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-navy mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    {(index + 1) % 3 !== 0 && (
                      <ArrowRight className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            See Full Process Details
          </Link>
        </div>
      </div>
    </section>
  );
}
