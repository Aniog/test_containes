import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    desc: 'Fill in our inquiry form with your product details, target price, quantity, and any specific requirements.',
  },
  {
    number: '02',
    title: 'We Find & Vet Suppliers',
    desc: 'Our team searches our verified supplier network and conducts background checks to shortlist the best matches.',
  },
  {
    number: '03',
    title: 'Factory Audit & Samples',
    desc: 'We visit shortlisted factories, verify their credentials, and arrange product samples for your approval.',
  },
  {
    number: '04',
    title: 'Order & Production Monitoring',
    desc: 'Once you confirm the order, we monitor production milestones and send regular progress reports.',
  },
  {
    number: '05',
    title: 'Quality Inspection',
    desc: 'Our QC inspectors conduct pre-shipment inspections and provide a detailed report with photos.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange sea or air freight and handle all export documentation.',
  },
];

const ProcessOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            How We Source for You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            A structured, transparent process designed to reduce risk and deliver results — from first inquiry to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={step.number} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow relative">
              <span className="text-5xl font-bold text-gray-100 absolute top-4 right-5 select-none leading-none">
                {step.number}
              </span>
              <div className="relative">
                <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
                <h3 className="text-base font-semibold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all text-sm"
          >
            See the Full Process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
