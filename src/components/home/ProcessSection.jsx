import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, and any specific requirements.',
  },
  {
    number: '02',
    title: 'We Research & Shortlist Suppliers',
    desc: 'Our team identifies and vets potential suppliers from our network and verified databases across China.',
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    desc: 'We conduct on-site or document-based audits to verify factory credentials, capacity, and compliance.',
  },
  {
    number: '04',
    title: 'Sample Review & Approval',
    desc: 'We coordinate sample production, review quality on your behalf, and send you detailed reports.',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    desc: 'Once you place an order, we follow up with the factory to ensure timelines and quality standards are met.',
  },
  {
    number: '06',
    title: 'Inspection & Shipping',
    desc: 'Pre-shipment inspection is conducted, then we coordinate freight and documentation for smooth delivery.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f4f6f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-4">
            How We Source for You
          </h2>
          <p className="text-[#5a6a7e] max-w-2xl mx-auto text-base leading-relaxed">
            A structured, transparent process designed to reduce risk and give you full visibility at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="bg-white rounded-xl border border-[#dde3ec] p-6 relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0d2340] rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-[#e8621a] font-bold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#0d2340] mb-2">{step.title}</h3>
                  <p className="text-[#5a6a7e] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  {(index + 1) % 3 !== 0 && (
                    <div className="w-6 h-6 bg-[#e8621a] rounded-full flex items-center justify-center">
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
            className="inline-flex items-center gap-2 bg-[#1a4f8a] hover:bg-[#0d2340] text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            See Full Process Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
