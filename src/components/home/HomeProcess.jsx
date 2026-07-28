import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Fill out our inquiry form with your product details, target price, quantity, and any specific requirements.',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    description: 'Our team researches the market and shortlists 3–5 qualified suppliers that match your criteria.',
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    description: 'We conduct on-site or document-based audits to verify supplier legitimacy and production capability.',
  },
  {
    number: '04',
    title: 'Sample & Quality Review',
    description: 'Samples are arranged, inspected, and reported on before you commit to a production order.',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    description: 'We follow up during production to ensure timelines and quality standards are maintained.',
  },
  {
    number: '06',
    title: 'Inspection & Shipping',
    description: 'Final QC inspection is completed before goods are released. We coordinate shipping and documentation.',
  },
];

export default function HomeProcess() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-red-50 text-brand-red text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Sourcing Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            How We Work With You
          </h2>
          <p className="text-brand-mid text-lg max-w-2xl mx-auto">
            A structured, transparent process from your first inquiry to goods delivered at your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-brand-light rounded-xl p-7 h-full border border-brand-border hover:border-brand-blue/30 hover:shadow-md transition-all">
                <div className="text-4xl font-black text-brand-blue/15 mb-3 leading-none">{step.number}</div>
                <h3 className="text-base font-semibold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-brand-mid text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-brand-border" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            See Full Process Details <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
